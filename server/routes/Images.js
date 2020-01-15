const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res, next) => {
    Models.image.findAll({
        where: { 
            time: req.param('time'),
            date: req.param('date'),
            subdisease_id: req.param('subdisease_id')
        }
    })
    .then(images => {
        res.json(images)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
});

module.exports = router;
