const mongoose     = require('mongoose'),
      random       = require('mongoose-simple-random');

const ScenarioSchema = new mongoose.Schema({
    scene: String
});
ScenarioSchema.plugin(random);

module.exports = mongoose.model('Scenario', ScenarioSchema);