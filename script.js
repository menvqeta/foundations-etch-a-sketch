const gridSizeSlider = document.querySelector("#grid-size-slider");
const sliderText = document.querySelector(".slider-text");
const sketchPadSquare = document.querySelector(".sketch-pad-square");
const blackButton = document.querySelector("#black-button");
const rgbButton = document.querySelector("#rgb-button");
const eraserButton = document.querySelector("#eraser-button");
const resetButton = document.querySelector("#reset-button");
let currentColor = 'black';

function adjustSlider(lengthOfGridSide) {
    sliderText.textContent = `Grid size: ${lengthOfGridSide}x${lengthOfGridSide}`;
    sketchPadSquare.innerHTML = '';
    const flexBasisValue = `calc(100% / ${lengthOfGridSide})`;
    addSquares(lengthOfGridSide, flexBasisValue);
}

function addSquares(lengthOfGridSide, flexBasisValue) {
    for (let i = 0; i < lengthOfGridSide; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < lengthOfGridSide; j++) {
            var smallBox = document.createElement('div');
            smallBox.setAttribute('class', 'small-box');
            smallBox.style.flexBasis = flexBasisValue;
            (function(currentSmallBox) {
                currentSmallBox.addEventListener('mouseover', function() {
                    colorSquareOnHovering(currentSmallBox);
                });
            })(smallBox);
            row.appendChild(smallBox);
        }
        sketchPadSquare.appendChild(row);
    }
}

function colorSquareOnHovering(smallBox) {  
    smallBox.style.backgroundColor  = currentColor;
}

function changeColor(color) {
    currentColor = color;
}

gridSizeSlider.addEventListener('input', ()=> adjustSlider(gridSizeSlider.value));
blackButton.addEventListener('click', ()=> changeColor('black'));
eraserButton.addEventListener('click', ()=> changeColor('white'));
rgbButton.addEventListener('click', ()=> changeColor(getRandomRbgColor()));

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

function getRandomRbgColor() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}


adjustSlider(2);


