const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res, next) => {
    Models.disease.findAll({
        include: [{
            model: Models.user,
            where: { 
                user_id: req.param('user_id')
            },
        }],
    })
    .then(diseases => {
        res.json(diseases)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
})

router.post('/', (req, res, nex) => {
    return Models.disease.create({
        disease_name: req.body.disease_name
    })
    .then(function (results) {
        Models.sequelize.query(
            `INSERT INTO diseaseUsers (disease_id, user_id, is_admin) \
            VALUES (${results.dataValues.disease_id}, ${req.body.user_id}, ${1})`
        )
        .then(function(err, results){
            if (err) {
                res.send(err);
            } else {
                res.send(results);
            }
        })

        // "diseaseUser".create({
        //     disease_id: results.dataValues.disease_id,
        //     user_id: req.body.user_id,
        // })
    })
    // .then(function (disease) {
    //     if (disease) {
    //         res.send(disease);
    //     } else {
    //         res.status(400).send('Error in insert new record');
    //     }
    // });
});

router.post('/', (req, res, nex) => {
    const today = new Date()
    const keyData = {
        key_name: req.body.key_name,
        project_id: req.body.project_id,
        key_created_at: today,
        key_value: req.body.key_value
    }
    Models.key.findOne ({
        where: {
            key_name: req.body.key_name,
            project_id: req.body.project_id
        }
    })
    .then (key => {
        if (!key) {
            Models.key.create(keyData)
            .then(function (key) {
                
                if (key) {
                    putItem(key.dataValues.key_id.toString(), keyData.key_value);
                    res.send(key);
                } else {
                    res.status(400).send('Error in insert new record');
                }
            });
        } else {
            res.json({ error: 'Key already exists' })
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
