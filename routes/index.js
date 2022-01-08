const express    = require('express'),
      router     = express.Router();


// INDEX ROUTES
router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/choices', (req, res) => {
    res.render('choices');
});

router.get('/gameScreen1', (req, res) => {
    res.render('gameScreen1');
});


module.exports = router;