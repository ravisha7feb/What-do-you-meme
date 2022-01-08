const express    = require('express');
const router     = express.Router();
const Scenario   = require('../../models/Scenario');

router.get('/', (req, res) => {
    Scenario
        .find()
        .then(items => res.json(items));
});

module.exports = router;