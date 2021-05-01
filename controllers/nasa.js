const apodRouter = require('express').Router()
const axios = require('axios')
const Apod = require('../models/apod')

apodRouter.get('/:date', async (request,response) => {
  const apod = await Apod.findOne({date: request.params.date})
  if(apod){
    console.log('cache')
    return response.json(apod)
  }
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${request.params.date}`
  const nasa = await axios.get(url)
  const newBlog = {
    date: nasa.data.date,
    explanation: nasa.data.explanation,
    hdurl: nasa.data.hdurl,
    media_type: nasa.data.media_type,
    service_version: nasa.data.service_version,
    title: nasa.data.title,
    url: nasa.data.url,
    copyright: nasa.data.copyright || 'none'
    }
  const newApod = new Apod(newBlog)
  await newApod.save()
  
  response.json(newApod)
})

module.exports = apodRouter
