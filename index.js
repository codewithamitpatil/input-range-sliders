const sliderInput = document.querySelector('#rangeSlider');
const maxlabel = document.querySelector('#maxValue');


sliderInput.addEventListener('change', (e) => {
    console.log(sliderInput.value)
    let colorAdd = `linear-gradient(90deg,
            #4d4dff ${sliderInput.value}%,
            #ddd 0%)`;
    maxlabel.innerHTML = sliderInput.value;
    sliderInput.style.background = colorAdd;
})