const express    = require('express'),
      router     = express.Router(),
      Meme       = require('../models/Memes');
      Scenario   = require('../models/Scenario');

let users = require('../users');

// ROOM ROUTES

router.get('/:id/settings', (req, res) => {
    const id = req.params.id;
    res.render('room/settings', {id: id});
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('room/settings', {id: id});
});

router.post('/:id', (req, res) => {
    let username = req.body.username;
    let rounds = 0;
    let score = 0;
    if (req.body.rounds) {
        rounds = req.body.rounds;
    } else {
        rounds = users[0].rounds;
    }

    let user = {
        username: username,
        rounds: rounds,
        score: score
    }

    if (users.length == 0) {
        user.organiser = true;
    } else {
        user.organiser = false;
    }

    users.push(user);
    res.redirect('/room/'+ req.params.id + '/play');
});

let scene = '';
Scenario.findRandom({}, {}, {limit: 1}, function(err, results) {
    if (err) {
        console.log(err);
    } else {
        scene = results;
    }
});

function getRandomScene() {
    Scenario.findRandom({}, {}, {limit: 1}, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            scene = results;
        }
    });
}

router.get('/:id/play', (req, res) => {    
    let memes = [];
    Meme.findRandom({}, {}, {limit: 5}, function(err, results) {
        if (err) {
          console.log(err);
        } else {
            memes = results;
            res.render('room/play', {id: req.params.id, scene: scene, memes: memes})
        }
    });
});

let topMemes = [];

router.get('/:id/topmemes', (req, res) => {
    res.render('room/top', {id: req.params.id, topMemes: topMemes});
});

router.post('/:id/topmemes', (req, res) => {
    let imgId = req.body.memeImg;
    let sc = req.body.scene;
    console.log(sc);
    topMemes.push({sc: sc, img: imgId});
    res.redirect('/room/'+req.params.id+'/topmemes');
});

router.get('/:id/playAgain', (req, res) => {  
    topMemes = [];
    getRandomScene();
    res.redirect('/room/'+req.params.id+'/play');    
});

module.exports = router;