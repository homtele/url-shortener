const mongoose = require('mongoose')

const Schema = mongoose.Schema

const urlSchema = new Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', urlSchema)
