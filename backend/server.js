const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/cities', require('./routes/cities'));

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});