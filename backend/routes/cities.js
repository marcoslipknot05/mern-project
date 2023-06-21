const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');
const itineraryModel = require('../model/itineraryModel');

router.get('/test', (req, res) => {
  res.send({ message: 'OK' });
});

router.get('/all', (req, res) => {
  cityModel.find()
    .then(cities => {
      res.send(cities.map(city => ({
        ...city.toObject(),
        link: `/cities/${city.name}/itineraries` // Agregar el enlace a la página de itinerarios
      })));
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error al recuperar las ciudades');
    });
});

router.get('/city/:name/itineraries', (req, res) => {
  const cityName = req.params.name;

  cityModel.findOne({ name: cityName })
    .then(city => {
      if (!city) {
        return res.status(404).send('Ciudad no encontrada');
      }

      itineraryModel.find({ cityID: city._id })
        .then(itineraries => {
          if (itineraries.length === 0) {
            return res.status(404).send('No se encontraron itinerarios para la ciudad especificada');
          }
          res.json(itineraries);
        })
        .catch(err => {
          console.log(err);
          res.status(500).send('Error al recuperar los itinerarios');
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error al recuperar la ciudad');
    });
});

router.post('/', (req, res) => {
  const newCity = new cityModel({
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
      res.status(400).send('Error al crear la ciudad');
    });
});

module.exports = router;