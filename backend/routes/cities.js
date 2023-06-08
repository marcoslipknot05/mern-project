const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');

router.get('/test', (req, res) => {
  res.send({mesage:'OK'})
});

router.get('/all', (req, res) => {
  cityModel.find()
    .then(cities => {
      console.log(cities);
      res.send(cities);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error retrieving cities');
    });
});

router.get('/city/:id', (req, res) => {
  cityModel.findById(req.params.id)
    .then(city => {
      if (!city) {
        return res.status(404).send('City not found');
      }
      res.send(city);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error retrieving city');
    });
});

router.post('/', (req, res) => {
  const newCity = new City({
    name: req.body.name,
    country: req.body.country,
    img: req.body.img
  });

  newCity.save()
    .then(city => {
      res.status(201).send(city);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('Error creating city');
    });
});

module.exports = router;
