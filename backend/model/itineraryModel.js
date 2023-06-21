const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cityID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  img: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const itineraryModel = mongoose.model('itinerary', itinerarySchema);

module.exports = itineraryModel;