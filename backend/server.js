const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connection to MongoDB established');
    // Aquí puedes seguir configurando tu servidor y rutas
  })
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/cities', require('./routes/cities'));

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});