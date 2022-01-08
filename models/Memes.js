const mongoose     = require('mongoose'),
      random       = require('mongoose-simple-random');

const MemeSchema = new mongoose.Schema({
    image: String
});
MemeSchema.plugin(random);

module.exports = mongoose.model('Meme', MemeSchema);