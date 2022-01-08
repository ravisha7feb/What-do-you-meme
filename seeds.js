const mongoose   = require('mongoose'),
      Meme       = require('./models/Memes');

const data = [
    {image: 'https://drive.google.com/uc?id=1JlWK7eyjpGkJPrNJqXDSEdcru96AmVak'},
    {image: 'https://drive.google.com/uc?id=1rxjctClxXQu4ZepHG9rcaqNw1Nlfptev'},
    {image: 'https://drive.google.com/uc?id=1BKGCqrBTwItCgqxMe4oLXnr5Oku2LaOP'},
    {image: 'https://drive.google.com/uc?id=1dOUQf4YHuItbM3qfNBoJNq4rMnO4x3aB'},
    {image: 'https://drive.google.com/uc?id=1Tg4xfjnUiaij0KCKfI2NKYqHnQBYQ9Nq'},
    {image: 'https://drive.google.com/uc?id=1SowB_gPGWTKSK7G9iSdqJeSWzDVEr3EN'},
    {image: 'https://drive.google.com/uc?id=1f0MLxtP2Kndzg8GMFkpd3M8t8ovTjnOw'},
    {image: 'https://drive.google.com/uc?id=1y1GDzmcTarUqMVVTdB_leaqzyT5oL0bC'},
    {image: 'https://drive.google.com/uc?id=1JX1VfKO3IW0eJidY_6Rb-4HG1uZVEs-P'},
    {image: 'https://drive.google.com/uc?id=1QrwX6rBt2J1Nf5k7z2wu2aVDX8unSvJf'},
    {image: 'https://drive.google.com/uc?id=1zQ0GA5DUWaLhXWVqk7NfgFO_I_J2rLfy'},
    {image: 'https://drive.google.com/uc?id=1JFGgMF4jkiUMmcwktuID6rxUVnoxXpde'}
]

function seedDB() {
    // REMOVE ALL MEMES
    Meme.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Removed Memes');

            // ADD A FEW SCENARIOS
            data.forEach((seed) => {
                Meme.create(seed, function(err, meme) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Added a meme');
                    }
                });
            });
        }
    });
}

module.exports = seedDB;