const express = require('express')
const { rmSync } = require('fs')
const { join } = require('path')
const notes = require('./db/db.json')

const app = express ()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/api/notes', (req,res) => {
  res.json(notes)
})

app.post('/api/notes', (req,res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text
  }

  notes.push(newNote)
  res.json(200)
})


app.use(require('./routes'))

app.listen(process.env.PORT || 3000)