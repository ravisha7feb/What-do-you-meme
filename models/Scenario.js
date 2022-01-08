const mongoose = require('mongoose');

const ScenarioSchema = new mongoose.Schema({
    scene: String
});

module.exports = mongoose.model('Scenario', ScenarioSchema);