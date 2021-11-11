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
        res.send(agents);
    })
    .catch(() => {
        res.status(404).send('No data');
    })
})

router.put('/agent/:id/edit', (req, res) => {

})

module.exports = router;
