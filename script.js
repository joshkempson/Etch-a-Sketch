const container = document.querySelector('.container');


const resetBtn = document.querySelector('#resetBtn');
const btn1 = document.querySelector('.btn.one');
const btn2 = document.querySelector('.btn.two');
const btn3 = document.querySelector('.btn.three');

resetBtn.addEventListener('click', function() {
    deleteGrid();
});
btn1.addEventListener('click', function() {
    deleteGrid();
    setGridSize(256);
});
btn2.addEventListener('click', function() {
    deleteGrid();
    setGridSize(1024);
});
btn3.addEventListener('click', function() {
    deleteGrid();
    setGridSize(4096);
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
        pixel.addEventListener('mouseover', changePixelColour)
    }
};

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
};

function clearGrid() {
    
}

function changePixelColour(e) {
    e.target.style.backgroundColor = '#000000'
};