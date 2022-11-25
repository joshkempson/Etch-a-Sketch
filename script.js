const container = document.querySelector('.container');


const resetBtn = document.querySelector('#resetBtn');
const btn16 = document.querySelector('.btn.one');
const btn64 = document.querySelector('.btn.two');
const btn256 = document.querySelector('.btn.three');

resetBtn.addEventListener('click', function() {
    deleteGrid();
});
btn16.addEventListener('click', function() {
    deleteGrid();
    setGridSize(16);
});
btn64.addEventListener('click', function() {
    deleteGrid();
    setGridSize(64);
});
btn256.addEventListener('click', function() {
    deleteGrid();
    setGridSize(256);
});

function setGridSize(gridSize) {
    console.log("AA");
    
    const pixelDim = (100/Math.sqrt(gridSize));

    for (let i = 1; i <= gridSize; i++) {
        const pixel = document.createElement('div');
        container.appendChild(pixel);
        pixel.setAttribute('class', 'pixel');
        pixel.style.width = pixelDim + "%";
        pixel.style.height = pixelDim + "%";
    }
};

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
};


