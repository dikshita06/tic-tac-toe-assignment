let player1Name = "";
let player2Nmae = "";
let player1Symbol = "";
let player2Symbol = "";
let gameEnded = false;


let currentPlayer = player1Symbol;
let board = ["","","","","","","","",""]


const playerForm = document.getElementById("player-form");
const gameBoard = document.getElementById("game-board");
const turnDisplay = document.getElementById("turn");
const cells = document.querySelectorAll("td");
const winningMessage = () => `Player ${currentPlayer} has won!`
const playerTurn = ()=>{
    return currentPlayer === player1Symbol ? player2Symbol : player1Symbol
};
let winner = document.getElementsByClassName("winner");



function startGame() {
    player1Name = document.getElementById("player1").value;
    player2Name = document.getElementById("player2").value;

    player1Symbol = player1Name;
    player2Symbol = player2Name;

    playerForm.style.display = "none";
    gameBoard.style.display = "block";

    // turnDisplay.textContent = `${player1Symbol}'s turn`;
}
for (let i = 0; i <= 8; i++) {
      document.getElementById(i.toString()).addEventListener(
        "click", 
        function() {
                  if (this.innerHTML === "" && !gameEnded) {
              this.innerHTML = currentPlayer;
            };
           currentPlayer = currentPlayer == player1Symbol ? player2Symbol : player1Symbol
           turnDisplay.innerHTML = `${currentPlayer}'s turn`;
            whoWon();
            
            console.log(whoWon)
       }
    
      );
    }
  
    
    const whoWon = ()=>{
        let boxtext = document.getElementsByClassName('boxtext');
        let wins = [
            [0, 1, 2, 5, 5, 0],
            [3, 4, 5, 5, 15, 0],
            [6, 7, 8, 5, 25, 0],
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            [0, 4, 8, 5, 15, 45],
            [2, 4, 6, 5, 15, 135],
        ]
        wins.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
                alert (boxtext[e[0]].innerText + " Won")
                gameEnded = true
               
            }
        })
    }
    
    
    let playerSymbol = [player1Symbol, player2Symbol]