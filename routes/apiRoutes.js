const app = require('express').Router()
const fs = require('fs');
const { readFromFile, readAndAppend, deleteFromFile } = require('../helpers/fsUtils');
const uuid  = require('../helpers/uuid')



app.get('/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
app.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text,} = req.body;

  // If all the required properties are present
  if (title && text ) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuid(),
    };
//add new note to the file
    readAndAppend(newNote, './db/db.json');

   //respond to the route 
    res.status(200).send("message recieved");
  } else {
    res.json('Error in posting note');
  }
});

app.delete('/notes/:id', (req, res)=>{

    const noteId = req.params.id;

    if (noteId){
deleteFromFile('./db/db.json', noteId);

res.status(200).send("Here it is man");}
else {
    res.status(400).json('Its fucked up')
}
});



module.exports = app;