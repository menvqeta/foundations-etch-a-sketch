const gridSizeSlider = document.querySelector("#grid-size-slider");
const sliderText = document.querySelector(".slider-text");
const sketchPadSquare = document.querySelector(".sketch-pad-square");
const blackButton = document.querySelector("#black-button");
const rgbButton = document.querySelector("#rgb-button");
const eraserButton = document.querySelector("#eraser-button");
const resetButton = document.querySelector("#reset-button");
const footerText = document.querySelector(".footer-text");
let lastClickedButton = 'black';

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
            addEventListenerToBox(smallBox);
            row.appendChild(smallBox);
        }
        sketchPadSquare.appendChild(row);
    }
}

function addEventListenerToBox(smallBox) {
    (function (currentSmallBox) {
        currentSmallBox.addEventListener('mouseover', function () {
            colorSquareOnHovering(currentSmallBox);
        });
    })(smallBox);
}

function colorSquareOnHovering(smallBox) {  
    if(lastClickedButton === 'black') {
        smallBox.style.backgroundColor = 'black';
    }
    else if(lastClickedButton === 'eraser') {
        smallBox.style.backgroundColor = 'white';
    }
    else if(lastClickedButton === 'random') {
        smallBox.style.backgroundColor = getRandomRbgColor();
    }
}

function changeLastClickedButton(color) {
    lastClickedButton = color;
}

function resetAllBoxes() {
    let smallBoxes = document.querySelectorAll(".small-box");
    for(let i=0; i<smallBoxes.length; i++) {
        let smallBox = smallBoxes[i];
        smallBox.style.backgroundColor = 'white';
    }
}

function randomBetween(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomRbgColor() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

function addEventListeners() {
    gridSizeSlider.addEventListener('input', () => adjustSlider(gridSizeSlider.value));
    blackButton.addEventListener('click', () => changeLastClickedButton('black'));
    eraserButton.addEventListener('click', () => changeLastClickedButton('eraser'));
    rgbButton.addEventListener('click', () => changeLastClickedButton('random'));
    resetButton.addEventListener('click', () => resetAllBoxes());
}

function updateFooterText() {
    let currentYear =  new Date().getFullYear();
    footerText.textContent = `Copyright © ${currentYear} menvqeta`;
}

addEventListeners();


adjustSlider(2);

updateFooterText();




