const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./keys').mongoEO1;
const db2 = require('./keys').mongoURI2;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const citiesRouter = require('./routes/cities');
const itinerariesRouter = require('./routes/itineraries');

app.use('/cities', citiesRouter);
app.use('/itineraries', itinerariesRouter);

const port = 3002;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch(err => console.log(err));
