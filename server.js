const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const keys       = require('./config/keys');
const scenarios  = require('./routes/api/scenarios');
const seedDB     = require('./seeds');
const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('Database connected'))
    .catch(() => console.log(err));

// seedDB();

app.use('/api/scenarios', scenarios);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));