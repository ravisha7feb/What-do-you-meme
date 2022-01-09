const express    = require('express'),
      router     = express.Router()
      uuid       = require('uuid');


// INDEX ROUTES
router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/choices', (req, res) => {
    let roomID = uuid.v4();
    res.render('choices', {id: roomID});
});

router.get('/gameScreen1', (req, res) => {
    res.render('gameScreen1');
});

router.get('/createRoom', (req, res) => {
    res.render('createRoom');
});



module.exports = router;