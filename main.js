// setting variables

const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info') 
const startCells = [
    "", "", "", "", "", "", "", "", "",
]

let turn = "circle"
infoDisplay.textContent = "Circle goes first!" // rendering player turn text

// function for rendering board

function createBoard(){
    startCells.forEach((cell, index) =>{
        const cellElement = document.createElement('div') // creating div elements
        cellElement.classList.add('square') // giving those divs a class of square
        cellElement.id = index // assigning id to divs
        cellElement.addEventListener('click', addTurn) // adding event listener to each click ona  cell, running function addTurn
        gameBoard.append(cellElement) // appending cell to div
    })
}
createBoard()

// function for adding moves to gameboard

function addTurn(e){
    const turnDisplay = document.createElement('div') // function for creating circle div
    turnDisplay.classList.add(turn) // circle goes first on start
    e.target.append(turnDisplay) // targeting thr event listener 
    turn = turn === "circle" ? "x" : "circle" // function for if turn = circle, go, else x turn
    infoDisplay.textContent = "It is now " + turn + "'s turn." // concatenating turn text
    e.target.removeEventListener('click', addTurn)
}