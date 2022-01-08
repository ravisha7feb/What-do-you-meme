const mongoose   = require('mongoose'),
      Scenario = require('./models/Scenario');

const data = [
    {scene: 'Me every night ignoring my sleeping schedule & choosing to run through traumatic thoughts & what I would do in extremely unlikely scenarios'},
    {scene: 'When you are arguing with someone and one Google search decides you are right'},
    {scene: 'When you look at your boyfriend after watching Kim Ji-young and realize he is not Jung Dae-hyun'},
    {scene: 'Me opening my fridge to see if anything magically appeared since the last time I check 7 minutes ago'},
    {scene: 'When your mom hand delivers you and your brother from a fight to the dinner table'},
    {scene: 'When you walk past a colleague you dont know well yet'},
    {scene: 'When you introduce your friend to bts and the first thing they say is “They all look the same”'},
    {scene: 'When you tap your pocket and dont feel your phone'},
    {scene: 'Whe face you make when you just woke up from bed on a working day'},
    {scene: 'when your best friend has a new best friend'},
    {scene: 'When your mom is scolding your sibling for eating the chocolate you ate'},
    {scene: 'When you google random symptoms and find out you are dying'},
    {scene: 'When you walk into a room and forget what you went there for'},
    {scene: 'When exams are approaching but you have no idea whats going on in class because you spent the entire semester looking at memes'},
    {scene: 'When you finally get into your comfy blanket in winters but you gotta go pee again'},
    {scene: 'When your unwanted relatives come over to your house and start questioning your life decisions'},
    {scene: 'Me and my best friend eating during the class lesson'},
    {scene: 'When you know the other person is lying but they think you dont and keeps talking as if they took the truth serum from professor Snape'},
    {scene: 'When you realize your parents were kids once too'},
    {scene: 'My mom getting mad at me in tiny in front of our relatives'},
    {scene: 'When you turn around and a student is actually taking notes during a lecture'},
    {scene: 'When you hand over your phone to someone to show a picture and they start scrolling through your gallery'},
    {scene: 'When your dad sends you a friend request on Facebook'},
    {scene: 'When the teacher asks who is presenting next'},
    {scene: 'When a customer comes in to activate a phone 2 mins before closing the store'},
    {scene: 'When you have online classes and the professor suddenly asks everyone to turn on cams for roll call'},
    {scene: 'When life suddenly starts going too well'},
    {scene: '6 yr old me after the waitress drew a smiley face with ketchup on my burger'},
    {scene: 'When someone asks you to explain your joke'},
    {scene: 'When someone remembers your name but you dont remember theirs'},
    {scene: 'Me after I eat all of my quarantine snacks in one day'},
    {scene: 'When you want the meeting to end and someone keeps asking questions'},
    {scene: 'My face when the cameraman at my cousins wedding films me while eating'},
    {scene: 'When you fart on a zoom call and your name lights up on the screen'},
    {scene: 'Me leaving school the day before vacation starts'},
    {scene: 'When I finally decide to clean my room and stop after picking up one sock'},
    {scene: 'Me when corona cases rise again and schools/ colleges shut down right before semester exams'},
    {scene: 'When you cant find something for ages and your mom walks in and finds it in 0.001 secs'},
    {scene: 'Me waiting for my letter of acceptance to Hogwarts on my 11th birthday after watching Harry Potter movies instead of reading bedtime stories before going to bed'},
    {scene: 'When someone is crying and you don’t know what to do'},
    {scene: 'When you cut your hair and instantly regret it'},
    {scene: 'English speaking lessons **repeat after me** : Let us sleep. Me: **ok snores** My friend: ...'},
    {scene: 'We when I put down my phone to charge for hours and come back to see I didnt turn on the switch'},
    {scene: 'The look that you give your friend when the teacher says to pick a partner'},
    {scene: 'When you’re happy it’s Friday but you have extra classes on Saturday'},
    {scene: 'Me trying to stay sleepy while going to the bathroom at 3 am'},
    {scene: 'When I share a good meme in the group chat but no one reacts'},
    {scene: 'When somebody adds another dish to the sink while I am washing the dishes'},
    {scene: 'When you are using your phone at night and your grandma walks in to check on you'},
    {scene: 'When you just woke up and there was a fight in the group chat'},
    {scene: 'That moment when you see your boss in the mall after calling in sick'},
    {scene: 'When you’re teasing your best friend and someone jumps in the conversation to tease them too'},
    {scene: 'When I am mad at my partner but they bring me food'},
    {scene: 'Me at an all you can eat buffet'}
];

function seedDB() {
    // REMOVE ALL SCENARIOS
    Scenario.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Removed Scenarios');

            // ADD A FEW SCENARIOS
            data.forEach((seed) => {
                Scenario.create(seed, function(err, scenario) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Added a scenario');
                    }
                });
            });
        }
    });
}

module.exports = seedDB;