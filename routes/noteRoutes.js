const router = require('express').Router()
const { readFile, writeFile } = require('fs')
const { join, parse } = require('path')
const uuid = require('uuid')
const notes = require('../db/db.json')


router.get('/notes', (req, res) => {
  res.json(notes)
})

router.post('/notes', (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text
  }

  notes.push(newNote)
  res.json(200)
})







module.exports = router