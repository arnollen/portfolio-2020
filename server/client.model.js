const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Client = new Schema({
  client_name: {
    type: String,
  },
  client_route: {
    type: Array,
  },
  client_type: {
    type: String,
  },
  client_description: {
    type: String,
  },
  client_bgPath: {
    type: String,
  },
  client_bgColor: {
    type: String,
  },
  client_video: {
    type: String,
  },
  client_images: {
    type: String,
  },
  client_imageHeaders: {
    type: String,
  },
  client_link: {
    type: String,
  },
});

module.exports = mongoose.model('Client', Client);