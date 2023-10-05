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
        cellElement.id = index // assigning id to divs
        cellElement.addEventListener('click', addTurn) // adding event listener to each click ona  cell, running function addTurn
        gameBoard.append(cellElement) // appending cell to div
    })
}
createBoard()

// function for adding moves to gameboard

function addTurn(e){
    const goTurn = document.createElement('div') // function for creating circle div
    goTurn.classList.add('circle') // adding class of 'circle'
    e.target.append(goTurn) // targeting thr event listener 
}