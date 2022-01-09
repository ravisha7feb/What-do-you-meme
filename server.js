const express      = require('express'),
      mongoose     = require('mongoose'),
      bodyParser   = require('body-parser'),
      keys         = require('./config/keys'),
      seedDB       = require('./seeds'),
      app          = express();

const scenarios    = require('./routes/api/scenarios'),
      memes        = require('./routes/api/memes'),
      indexRoutes  = require('./routes/index'),
      room         = require('./routes/room');

const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

let users = require('./users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));

// seedDB();

app.use(function(req, res, next) {
    res.locals.users = users;
    next();
});

app.use(indexRoutes);
app.use('/room', room);
app.use('/api/scenarios', scenarios);
app.use('/api/memes', memes);

// SOCKET IO
io.on('connection', (socket) => {
    console.log(`A user connected with id ${socket.id}`);

    // Welcome current user
    socket.emit('message', 'Welcome to WDYM!');
    
    // Boradcast when a user connects
    socket.broadcast.emit('message', 'A user has connected');

    // Runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));