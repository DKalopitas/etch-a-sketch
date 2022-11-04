function createGrid() {
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            gridContainer.appendChild(div);
        }
    }
}

createGrid();

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', ()=> {
    gridItem.classList.add('hovered');
}))