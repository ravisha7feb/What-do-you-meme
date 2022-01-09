const express    = require('express'),
      router     = express.Router();

// ROOM ROUTES
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('room/settings', {id: id});
});

router.get('/:id/play', (req, res) => {
    res.render('room/play');
});

module.exports = router;