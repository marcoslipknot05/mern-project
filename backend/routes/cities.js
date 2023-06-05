const express = require('express');
const router = express.Router();

const citiesData = [
  { id: 1, name: 'Ciudad 1' },
  { id: 2, name: 'Ciudad 2' },
  { id: 3, name: 'Ciudad 3' }
];

router.get('/', (req, res) => {
  res.send(citiesData);
});

module.exports = router;