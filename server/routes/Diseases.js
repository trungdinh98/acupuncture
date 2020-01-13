const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res, next) => {
    Models.disease.findAll({})
    .then(diseases => {
        res.json(diseases)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
});

router.get('/:id', (req, res, next) => {
    var id = req.params['id']; 
    Models.disease.findOne ({
        where: {
            disease_id: id,
        }
    })
    .then(disease => {
        res.json(disease)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
})

router.post('/', (req, res, nex) => {
    const today = new Date()
    const diseaseData = {
        disease_name: req.body.disease_name,
        disease_created_at: today
    }
    Models.disease.findOne ({
        where: {
            disease_name: req.body.disease_name,
        }
    })
    .then (disease => {
        if (!disease) {
            Models.disease.create(diseaseData)
            .then(function (disease) {
                if (disease) {
                    putItem(disease.dataValues.disease_id.toString(), diseaseData.disease_value);
                    res.send(disease);
                } else {
                    res.status(400).send('Error in insert new record');
                }
            });
        } else {
            res.json({ error: 'This disease already exists' })
        }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});

router.delete('/', (req, res, next) => {
    Models.disease.destroy({
        where: {
            disease_id: req.param('disease_id')
        }
    })
    .then(diseases => {
        res.json(diseases)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
})

module.exports = router;
