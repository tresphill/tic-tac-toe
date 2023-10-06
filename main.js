// setting variables

const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    "", "", "", "", "", "", "", "", "",
]

let turn = "circle"
infoDisplay.textContent = "Circle goes first!" // rendering player turn text

// function for rendering board

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div') // creating div elements
        cellElement.classList.add('square') // giving those divs a class of square
        cellElement.id = index // assigning id to divs
        cellElement.addEventListener('click', addTurn) // adding event listener to each click ona  cell, running function addTurn
        gameBoard.append(cellElement) // appending cell to div
    })
}
createBoard()

// function for adding moves to gameboard

function addTurn(e) {
    const turnDisplay = document.createElement('div') // function for creating turn div
    turnDisplay.classList.add(turn) // displaying circle goes first on start
    e.target.append(turnDisplay) // targeting the event listener 
    turn = turn === "circle" ? "x" : "circle" // function for if turn = circle, go, else x turn
    infoDisplay.textContent = "It's now " + turn + "'s turn." // concatenating turn text
    e.target.removeEventListener('click', addTurn) // this removes the ability to reclick a cell thats already been played
    checkScore()
}

// function for winning combos
// arrays are all correct, not sure why its not functioning
// function for selecting every array to check against winning combo

function checkScore() {
    const allSquares = document.querySelectorAll('.square')
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    let draw = true; // assuming its a draw from init

    winningCombos.forEach(array => { // function for winning combos
        let circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle')) // checking index of all arrays that also contain class of circle

        if (circleWins) { // if circle wins, display text
            infoDisplay.textContent = "Circle wins!"
            draw = false;
            allSquares.forEach(square => square.removeEventListener) // tried MDN model of removing and it broke
            return
        }
    })
    winningCombos.forEach(array => { // function for winning combos
        let xWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('x')) // checking index of all arrays that also contain class of x

        if (xWins) { // if x wins, display text
            infoDisplay.textContent = "X wins!"
            draw = false;
            allSquares.forEach(square => square.removeEventListener) // tried MDN model of removing and it broke
            return
        }
    })

    if (draw) {
        draw = Array.from(allSquares).every(square => square.firstChild.classList.contains('circle') || square.firstChild.classList.contains('x'));
    }

    if (draw) {
        // if all squares are filled and no player has won, it's a draw
        infoDisplay.textContent = "It's a draw!";
        allSquares.forEach(square => square.removeEventListener('click', handleClick));
}
}
