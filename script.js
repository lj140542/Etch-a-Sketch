let nbrOfCol = 9;
let nbrOfRow = 9;
const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

resizeButton.addEventListener('click', resize)
drawGrid();

function drawGrid() {
    for (let iRow = 1; iRow <= nbrOfRow; iRow++) {
        let row = document.createElement('div')
        row.classList.add('row');

        for (let iCol = 1; iCol <= nbrOfCol; iCol++) {
            let col = document.createElement('div');
            col.classList.add('col');
            col.onmouseover = hovered;
            row.appendChild(col);
        }

        container.appendChild(row);
    }
}

function resize() {
    let input = prompt('Enter the new size (a number between 9 and 250)');
    nbrOfCol = input;
    nbrOfRow = input;
    clearGrid();
    drawGrid();
}

function clearGrid() {
    let nbrOfChild = container.childElementCount;
    for (let i = 1; i <= nbrOfChild; i++) {
        let child = container.firstChild;
        container.removeChild(child);
    }
}

function hovered() {
    this.classList.add('hovered');
}
