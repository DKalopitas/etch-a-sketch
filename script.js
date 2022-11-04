function createGrid(columns = 16) {
    const gridContainer = document.querySelector('#grid-container');
    document.getElementById('grid-container').style.gridTemplateColumns = 
        `repeat(${columns}, 1fr)`;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.setAttribute('id', `${i}-${j}`);
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
    changeColor();
}

function changeColor() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', ()=> {
        const id = gridItem.getAttribute('id');
        const item = document.getElementById(id);
        if (gridItem.getAttribute('class') === 'grid-item hovered') {
            let rgb =  window.getComputedStyle(item).backgroundColor;
            rgb = rgb.replace(/[^\d,]/g, '').split(',');
            const r = Math.floor(rgb[0] * 0.8);
            const g = Math.floor(rgb[1] * 0.8);
            const b = Math.floor(rgb[2] * 0.8);
            console.log(r);
            document.getElementById(id).style.backgroundColor = 
                `rgb(${r}, ${g}, ${b})`;
        } else {
            const r = Math.floor(Math.random() * (255 - 10 + 1) + 10);
            const g = Math.floor(Math.random() * (255 - 10 + 1) + 10);
            const b = Math.floor(Math.random() * (255 - 10 + 1) + 10);
            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            item.classList.add('hovered');
        }
    }));
}

createGrid();
changeColor();
