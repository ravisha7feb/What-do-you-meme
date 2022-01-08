const express    = require('express'),
      router     = express.Router(),
      Meme       = require('../../models/Memes');

router.get('/', (req, res) => {
    Meme.findRandom({}, {}, {limit: 5}, function(err, results) {
        if (err) {
          console.log(err);
        } else {
            res.json(results);
        }
    });
});

module.exports = router;