// setting variables

const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info') 
const startCells = [
    "", "", "", "", "", "", "", "", "",
]

// function for rendering board

function createBoard(){
    startCells.forEach((cell, index) =>{
        const cellElement = document.createElement('div') // creating div elements
        cellElement.classList.add('square') // giving those divs a class of square
        cellElement.id = index
        gameBoard.append(cellElement) // appending cell to div
    })
}
createBoard()