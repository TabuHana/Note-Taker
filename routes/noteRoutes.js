const router = require('express').Router()
const { readFile, writeFile } = require('fs')
const { join, parse } = require('path')

router.get('/api/notes', (req, res) => {
  res.json(notes)
})

router.post('/api/notes', (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text
  }

  notes.push(newNote)
  res.json(200)
})







module.exports = router