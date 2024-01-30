const router = require('express').Router()
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const { response } = require('express');
const { get } = require('http');


router.get('/notes', (req,res)=>{
    console.log(req.body);
    const newNote = {
        title: req.body.title,
        text: req.body.text
    };

    readAndAppend(newNote, "./db/db.json")
    res.json('Ahh fuckin give it to me!');

});

module.exports = router;