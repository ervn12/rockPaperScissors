// const paperBtn = document.querySelector('.paper');
// const scissorsBtn = document.querySelector('.scissor');

const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(element => element.addEventListener('click', sendPlayerChoice)); // Creates array for rock, paper, scissor > ['rock', 'paper', 'scissors]

function getFetch() {
    fetch('/play')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('#wins').innerText = ` Wins: ${data.wins}`;
        document.querySelector('#losses').innerText = `Losses: ${data.losses}`;
        document.querySelector('#ties').innerText = `Ties: ${data.ties}`;
    })
    .catch((err) => {
        console.error(error);
    })
}


function sendPlayerChoice(click) {
    fetch('/play', {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: click.currentTarget.id
        }),
    })
    .then(getFetch())
}



// scoreboard area

// document.querySelector('#wins').addEventListener('click', )
// document.querySelector('#losses').addEventListener('click', scoreboardLosses)
// document.querySelector('#ties').addEventListener('click', scoreboardTies)











// PROTOTYPING:

// function YouWin(){
//     if(playersChoice === "You Win!"){
//         function scoreboardWins(){
//             winScore = winScore + 1
//             document.querySelector('#wins').innerText = winScore
//         }
//     }

// }