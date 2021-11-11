const express = require('express');
const router = express.Router();
const Agent = require(`${__dirname}/../model/agent-model`);

router.get('/cities', (req, res) => {
    Agent.find({}).distinct('city').then((cities) => {
        res.send(cities);
    })
})

router.get('/agents', (req, res) => {
    const searchedCity = req.query.city;
    if(!searchedCity) return;
    Agent.find({ city: `${searchedCity}` })
    .then(agents => {
        agents.length === 0
        ? res.status(404).send('No agents in the city')
        : res.send(agents);
    })
    .catch(() => {
        res.status(404).send('No data');
    })
})

router.put('/agent/:id/edit', (req, res) => {
    const updateCity = req.body.city;
    const updatedAgent = { city: updateCity };
    const agentId = req.params.id;
    Agent.findByIdAndUpdate(agentId, updatedAgent, { new: true })
    .then(agent => res.send(agent))
    .catch(() => res.status(404).send('Cant find agent'));
})

module.exports = router;
