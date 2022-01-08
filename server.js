const express      = require('express'),
      mongoose     = require('mongoose'),
      bodyParser   = require('body-parser'),
      keys         = require('./config/keys'),
      seedDB       = require('./seeds'),
      app          = express();

const scenarios    = require('./routes/api/scenarios'),
      memes        = require('./routes/api/memes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('Database connected'))
    .catch(() => console.log(err));

// seedDB();

app.use('/api/scenarios', scenarios);
app.use('/api/memes', memes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));