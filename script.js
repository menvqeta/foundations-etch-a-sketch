gridSizeSlider = document.querySelector("#grid-size-slider");
sliderText = document.querySelector(".slider-text");
sketchPadSquare = document.querySelector(".sketch-pad-square");

function adjustSlider() {
    let lengthOfGridSide = gridSizeSlider.value;
    sliderText.textContent = `Grid size: ${lengthOfGridSide}x${lengthOfGridSide}`;
    sketchPadSquare.innerHTML = '';
    const flexBasisValue = `calc(100% / ${lengthOfGridSide})`;
    for(let i=0; i<lengthOfGridSide; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        for(let j=0; j<lengthOfGridSide; j++) {
            var smallBox = document.createElement('div');
            smallBox.setAttribute('class', 'small-box');
            smallBox.style.flexBasis = flexBasisValue;
            console.log(smallBox);
            row.appendChild(smallBox);
        }
        sketchPadSquare.appendChild(row);
    }
}

gridSizeSlider.addEventListener('input', ()=> adjustSlider());
