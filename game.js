let rounds = prompt("Please enter enter the number of rounds to play: 1,2,3,...");


// TODO: Implment global variables for Wins, Loses, Ties

// GLOBAL Variables
let wins = 0;
let loses = 0; 
let ties = 0;
const winDiv = document.querySelector('#wins span');
const lossesDiv = document.querySelector('#loses span');
const tiesDiv = document.querySelector('#ties span');

// TODO: Parse to integer
let intNum = Number.parseInt(rounds);
console.log('Interger Num', intNum);


// TODO: Loop through number of rounds
for (let i = 0; i < intNum; ++i) {
    // TODO random num 0-2
    // NOTE 0:rock, 1:paper, 2:scissors
    let randNum = Math.floor(Math.random() * 3); 
    // console.log('randNum: ', randNum);
    let numChosen;
    
    // No Checking of r, s, p
   // let rockPaperScissors = prompt(`Round ${i+1}: Please enter enter r for Rock, p for Paper, or s for Scissors.`);

    // With checking for r, s, p
    let rockPaperScissors = checkRPS(i+1);



    if ((rockPaperScissors === 'r' && randNum === 0) || (rockPaperScissors === 'p' && randNum === 1) || (rockPaperScissors === 's' && randNum === 2)) {
        numChosen = 0;
        // console.log('numChosen', numChosen);
      // let newNum = Number.parseInt(tiesDiv.innerText) + 1;
        ++ties;
        tiesDiv.innerText = ties;
        console.log('ties: ', ties);
        alert("You've Tied")
    } else
        if (((rockPaperScissors === 'r') && (randNum === 2)) || ((rockPaperScissors === 'p') && (randNum === 0)) || ((rockPaperScissors === 's') && (randNum === 1)) ) {
            ++wins;
           // let newNum = Number.parseInt(winDiv.innerText) + 1;
           console.log('wins: ', wins);
            winDiv.innerText = wins;
            alert("You've Won!!")
        } else 
            if (((rockPaperScissors === 'r') && (randNum === 1)) || ((rockPaperScissors === 'p') && (randNum === 2)) || ((rockPaperScissors === 's') && (randNum === 0))) {
                ++loses;
                console.log('loses: ', loses);
                lossesDiv.innerText = loses; 
                alert("You've Loss.") 
            }

}

alert(`You have: ${winDiv.innerText} Wins, ${lossesDiv.innerText} Losses, and ${tiesDiv.innerText} Ties. Refresh to play again.`)


function checkRPS(ind) {
    let rps = '' 
    rps = prompt(`Round ${ind}: Please enter enter r for Rock, p for Paper, or s for Scissors.`);

    if (rps === 'p' || rps === 'r' || rps === 's') {
        return rps;
    } else {
      return  checkRPS(ind);
    }
}