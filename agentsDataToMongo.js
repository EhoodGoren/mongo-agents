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
        // console.log(license_number.trim(), agent_name.trim(), city.trim());
        return {
            license_number: license_number.trim(),
            name: agent_name.trim(),
            city: city.trim()
        }
    })
    // console.log(modifiedAgentList);
    Agent.insertMany(modifiedAgentList).then(() => console.log('saved')).catch(() => console.log('failed'));
});
