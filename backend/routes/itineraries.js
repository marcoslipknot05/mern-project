const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel');

router.get('/test', (req, res) => {
  res.send({ message: 'OK' });
});

router.get('/:name/itineraries', (req, res) => {
  const name = req.params.name;
  console.log(name);

  itineraryModel.find({ name: name })
    .then(itineraries => {
      console.log(itineraries);
      if (itineraries.length === 0) {
        return res.status(404).send('No se encontraron itinerarios para la ciudad especificada');
      }
      res.json(itineraries);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error al recuperar los itinerarios');
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const newItinerary = new itineraryModel({
    name: req.body.name,
    cityID: req.body.cityID,
    img: req.body.img,
    duration: req.body.duration,
    price: req.body.price,
    rating: req.body.rating
  });

  newItinerary.save()
    .then(itinerary => {
      res.status(201).send(itinerary);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('Error al crear el itinerario');
    });
});

module.exports = router;