const express    = require('express'),
      router     = express.Router();

// INDEX ROUTES
router.get('/:id', (req, res) => {
    res.send('hello this is the rooms page')
});

module.exports = router;