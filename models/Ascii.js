const mongoose = require('mongoose')

const AsciiSchema = new mongoose.Schema({
  asciiName: {
    type: String,
    required: true,
  },
  asciiArt: {
    data: Buffer,
    contentType: String,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Ascii', AsciiSchema)