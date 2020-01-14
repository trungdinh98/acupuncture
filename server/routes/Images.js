const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res, next) => {
    Models.image.findAll({
        where: { 
            disease_id: req.param('disease_id')
        }
    })
    .then(images => {
        res.json(images)
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
});

// router.get('/:id', (req, res, next) => {
//     var id = req.params['id']; 
//     Models.image.findAll ({
//         where: {
//             image_id: id,
//         }
//     })
//     .then(image => {
//         res.json(image)
//     })
//     .catch(err => {
//         res.send('Error: ' + err)
//     })
// })

module.exports = router;
