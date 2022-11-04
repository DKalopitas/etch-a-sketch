function createGrid() {
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            // div.textContent = `${i} - ${j}`;
            gridContainer.appendChild(div);
        }
    }
}

createGrid();