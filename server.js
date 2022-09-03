const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);


    const { title, text } = req.body;

  if (req.body) {
    const note = {
        title,
        text,
        id: uuidv4(),
    };
  console.log(req.body);

  db.push(note);

  fs.writeFileSync('./db/db.json', JSON.stringify(db, null, 4))

  const response = {
    status: 'success',
    body: newNote,
  };


  res.json(response)
} else {
  res.json('Error in posting feedback');
}

});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
