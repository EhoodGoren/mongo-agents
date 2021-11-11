const csv = require('csvtojson');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const Agent = require('./model/agent-model');


mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
});

const csvFilePath = path.resolve('./data/agent-data.csv');

csv().fromFile(csvFilePath).then(agentList => {
    const modifiedAgentList = agentList.map(agent => {
        const { license_number, agent_name, city } = agent;
        return {
            license_number: license_number.trim(),
            name: agent_name.trim(),
            city: city.trim()
        }
    })
    Agent.insertMany(modifiedAgentList)
    .then(() => console.log('Saved!'))
    .catch(() => console.log('Save failed'));
});
