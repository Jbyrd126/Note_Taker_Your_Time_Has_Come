const path = require('path');
const router = require('express').Router()

// sends user to homeslice
router.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../public/index.html')));

//sends user to notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
// sends user to home page if anything else is clicked or a unknown path is entered
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = router;