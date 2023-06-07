const express = require('express');
const router = express.Router();
const City = require('../model/cityModel');

router.get('/all', (req, res) => {
  City.find({})
    .then(cities => {
      console.log(cities);
      res.send(cities);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error retrieving cities');
    });
});

router.get('/:id', (req, res) => {
  City.findById(req.params.id)
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
