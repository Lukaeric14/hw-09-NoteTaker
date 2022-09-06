const notes = require('express').Router();
const fs = require('fs');
const path = require('path')
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    res.json(db)
})


// POST Route
notes.post('/', (req, res) => {
    const { title, text } = req.body;

        const note = {
            title, text, id: uuidv4(),
        };

        db.push(note);

        fs.writeFileSync('./db/db.json', JSON.stringify(db, null, 4))
        res.json(response);
});

notes.delete('/:id', (req, res) => {

    const Id = req.params.id;
    db.splice(Id - 1,1);
    obj.id = i + 1;

    fs.writeFileSync('./db/db.json', JSON.stringify(newData, null, 4), function () {
      res.json(`${id}`);
    });
});
  

module.exports = notes;