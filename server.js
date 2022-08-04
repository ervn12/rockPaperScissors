const express = require('express');
const app = express(); 
const PORT = 8000;

app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

function rockPaperScissors() {
    let random = Math.random();
    if(random < 0.33) {
        return 'rock';
    } else if (random < 0.66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

console.log(rockPaperScissors())

function selectWinner(user){
    let botChoice = rockPaperScissors();
    if (user == botChoice){
        console.log("Tie");
    } else if(user === 'rock' && botChoice === 'scissors' || user === 'scissors' && botChoice === 'paper' || user === 'paper' && botChoice === 'rock'){
        console.log("User wins");
    } else {
        console.log("Computer Wins");
    }


}

selectWinner('scissors');

app.put('')


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, you better go catch it`)
})