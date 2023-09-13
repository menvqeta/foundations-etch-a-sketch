const gridSizeSlider = document.querySelector("#grid-size-slider");
const sliderText = document.querySelector(".slider-text");
const sketchPadSquare = document.querySelector(".sketch-pad-square");
const blackButton = document.querySelector("#black-button");

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
            smallBox.addEventListener('mouseover', ()=> colorSquareOnHovering(smallBox));
            row.appendChild(smallBox);
        }
        sketchPadSquare.appendChild(row);
    }
}

function colorSquareOnHovering(smallBox) {  
    smallBox.style.backgroundColor  = 'red';
    console.log(smallBox);
}

gridSizeSlider.addEventListener('input', ()=> adjustSlider(gridSizeSlider.value));


