const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
date: String,
explanation: String,
hdurl: String,
media_type: String,
service_version: String,
title: String,
url: String,
copyright: String
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Apod', blogSchema)

