const express    = require('express'),
      router     = express.Router();


// INDEX ROUTES
router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/choices', (req, res) => {
    res.render('choices');
});

module.exports = router;