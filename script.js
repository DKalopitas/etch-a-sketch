function createGrid(columns = 16) {
    const gridContainer = document.querySelector('#grid-container');
    document.getElementById('grid-container').style.gridTemplateColumns = 
        `repeat(${columns}, 1fr)`;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            gridContainer.appendChild(div);
        }
    }
}

function removeGrid() {
    const gridContainer = document.querySelector('#grid-container');
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridContainer.removeChild(gridItem));
}

function setGrid() {
    let columns = prompt('Enter ammount of boxes per side:');
    if (columns === null) {
        return;
    }
    columns = parseInt(columns);
    if (columns >= 0 && columns <= 100) {
        removeGrid();
        createGrid(columns);
    } else {
        alert('Invalid ammount!\nPlease enter a number between 0 and 100');
    }
    const gridItems = document.querySelectorAll('.grid-item');
    console.log(gridItems.length);
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', ()=> {
        gridItem.classList.add('hovered');
    }))

}

createGrid();

const gridItems = document.querySelectorAll('.grid-item');
console.log(gridItems.length);
gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', ()=> {
    gridItem.classList.add('hovered');
}))
