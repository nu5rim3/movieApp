const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;
