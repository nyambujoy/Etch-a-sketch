let color = 'black'
let click = false

document.addEventListener('DOMContentLoaded', function () {
    createBoard(16)
    // getSize() called when selsct is clicked
    document.querySelector('body').addEventListener('click', function (e) {
        if (e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector('#draw')
            if (click) {
                draw.textContent = 'you can draw'
            } else {
                draw.textContent = "you can't draw"
            }
        }
    })
    let btn_popup = document.querySelector('#popup')
    btn_popup.addEventListener('click', function () {
        let size = getSize()
        createBoard(size)
    }

    )
    console.log('hi')
})//waits for th css to load to prevent your website from crashing

function createBoard(size) {
    let board = document.querySelector('.board');


    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)

        board.insertAdjacentElement('beforeend', div)
    }

}

function getSize() {
    let input = prompt("what size of board do you want?")
    let message = document.querySelector('#message')
    if (input === "") {
        message.textContent = "please provide number"
    } else if (input < 0 || input > 100) {
        message.textContent = "please provide a valid number (0-100)"
    } else {
        message.textContent = "now you can play!"
        return input
    }
}

function colorDiv() {
    if (click) {
        if (color == 'random') {
            this.style.background = `hsl(${Math.random() * 360},100% ,50%)`
        } else {
            this.style.background = 'black'

        }
    }

}

function setColor(colorChoice) {
    color = colorChoice

}

function resetBoard() {
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}