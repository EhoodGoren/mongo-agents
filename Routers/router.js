const express = require('express');
const router = express.Router();
const Agent = require(`${__dirname}/../model/agent-model`);

router.get('/cities', (req, res) => {
    Agent.find({}).distinct('city').then((cities) => {
        res.send(cities);
    })
})

router.get('/agents', (req, res) => {
    const query = req.query;
    console.log(query);
})

router.put('/agent/:id/edit', (req, res) => {

})

module.exports = router;
