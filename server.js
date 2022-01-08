const express      = require('express'),
      mongoose     = require('mongoose'),
      bodyParser   = require('body-parser'),
      keys         = require('./config/keys'),
      seedDB       = require('./seeds'),
      app          = express();

const scenarios    = require('./routes/api/scenarios'),
      memes        = require('./routes/api/memes'),
      indexRoutes  = require('./routes/index');

// const path = require('path');
// const http = require('http');
// const socketio = require('socket.io');
// const server = http.createServer(app);
// const io = socketio(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('Database connected'))
    .catch(() => console.log(err));

// seedDB();

app.use(indexRoutes);
app.use('/api/scenarios', scenarios);
app.use('/api/memes', memes);

// io.on('connection', (socket) => {
//     console.log(`A user connected with id ${socket.id}`);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));