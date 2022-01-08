const express    = require('express');
const router     = express.Router();
const Scenario   = require('../../models/Scenario');

router.get('/', (req, res) => {
    Scenario.findRandom({}, {}, {limit: 1}, function(err, results) {
        if (err) {
          console.log(err);
        } else {
            res.json(results);
        }
    });
});

module.exports = router;