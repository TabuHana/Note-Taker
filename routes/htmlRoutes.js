const router = require('express').Router()
const { readFile, writeFile } = require('fs')
const { join } = require('path')

//Get the notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

//Get the index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


module.exports = router