const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res, next) => {
    Models.subdisease.findAll({
        include: [{
            model: Models.disease,
            where: { 
                disease_name: req.param('disease_name')
            },
        }],
    })
    .then(subdiseases => {
        res.json(subdiseases)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
});

router.get('/:id', (req, res, next) => {
    var id = req.params['id']; 
    Models.subdisease.findOne ({
        include: [{
            model: Models.disease,
        }],
        where: {
            subdisease_id: id,
        }
    })
    .then(subdisease => {
        res.json(subdisease)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
});

module.exports = router;
