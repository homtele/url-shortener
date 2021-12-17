const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/url-lsit'

mongoose.connect(MONGODB_URI)
const db = mongoose.connection

db.once('error', () => {
  console.log('mongodb error!')
})

db.on('open', () => {
  console.log('mongodb connected!')
})

module.exports = db
