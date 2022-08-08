const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const PORT = 8000;

// ========================
// Middleware
// ========================
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

const Game = {
    // score count
    wins: 0,
    losses: 0,
    ties: 0
}

function getBotChoice() {
    let random = Math.random();
    if(random < 0.33) {
        return 'rock';
    } else if (random < 0.66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function selectWinner(playersChoice){
    let botChoice = getBotChoice();
    if (playersChoice == botChoice){
        console.log(`You chose ${playersChoice}, Computer chose ${botChoice}. It's a Tie!`);
        Game.ties++
        console.log(Game);
    } else if(playersChoice=== 'rock' && botChoice === 'scissors' || playersChoice=== 'scissors' && botChoice === 'paper' || playersChoice=== 'paper' && botChoice === 'rock'){
        console.log(`You chose ${playersChoice}, Computer chose ${botChoice}. You win!`);
        Game.wins++
        console.log(Game);
    } else {
        console.log(`You chose ${playersChoice}, Computer chose ${botChoice}. You Lose!`);
        Game.losses++
        console.log(Game);
    }
}


// ========================
// Routes
// ========================
app.put('/play', (req, res) => {
    playersChoice = req.body.id;
    console.log("Playing game...")
    selectWinner(playersChoice);
    res.end();
})

app.get('/play', (req, res) => {
    console.log('res.json');
    res.json({'wins' : Game.wins, 'losses': Game.losses , 'ties': Game.ties})
})


app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}, you better go catch it`)
})