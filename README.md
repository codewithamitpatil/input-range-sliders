# input-handlers

# Screen Shot

![Screenshot (117)](https://user-images.githubusercontent.com/62344675/153719902-71ed9563-866d-4fe1-bd09-ef78b815d1f8.png)


# 1st

```
# html

    <div class="container example1st  p-5">
        <div class="slider">
            <input id="rangeSlider" class="rangeSlider" type="range" min="0" max="100" value="50" step="10" />
            <label class="label-left">0</label>
            <label id="maxValue" class="label-right">100</label>
        </div>
    </div>

# css


.example1st {
    display: flex;
    justify-content: center;
}

.slider {
    position: relative;
    width: 400px;
}



.rangeSlider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    outline: none;

    background: #ddd;
    background: linear-gradient(90deg,
            #4d4dff 50%,
            #ddd 0%);
    border-radius: 5px;
}

.rangeSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: #4d4dff;
    border-radius: 50%;
}

.rangeSlider::-webkit-slider-thumb:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.label-left {
    color: #47525ddb;
    font-size: 22px;
}

.label-right {
    color: #47525ddb;
    float: right;
    font-size: 22px;
}

# javascript

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



```

# 2nd

```
# Html

    <div class="container secondExample p-5">
        <div class="slider1">
            <input id="rangeSlider" class="rangeSlider1" type="range" min="0" max="100" value="50" step="10" />
            <label class="label-left1">0</label>
            <label id="maxValue" class="label-right1">100</label>
        </div>
        <div class="slider1">
            <input id="rangeSlider" class="rangeSlider2" type="range" min="0" max="100" value="50" step="10" />
            <label class="label-left1">0</label>
            <label id="maxValue" class="label-right1">100</label>
        </div>
    </div>

# css

.slider1 {
    position: relative;
    width: 400px;
    /* background: whitesmoke; */
}

.secondExample {
    background: black;
    display: flex;
    justify-content: space-around;
}

.rangeSlider1 {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    outline: none;

    background: #ddd;
    border-radius: 5px;
}

.rangeSlider1::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: #4d4dff;
    border-radius: 50%;
    border: 5px solid white;
}

.rangeSlider1::-webkit-slider-thumb:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}



.rangeSlider2 {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    outline: none;

    background: #ddd;
    border-radius: 5px;
}

.rangeSlider2::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: #4d4dff;
    border-radius: 10%;
    border: 5px solid white;
}

.rangeSlider2::-webkit-slider-thumb:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}



.label-left1 {
    color: #47525ddb;
    color: white;
    font-size: 22px;
}

.label-right1 {
    color: #47525ddb;
    color: white;
    float: right;
    font-size: 22px;
}

# js

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

```
# 3rd

```
# Html

 <div class="container thirdExample">
        <div class="range">
            <div class="sliderValue3">
                <span id="sliderValueText">100</span>
            </div>
            <div class="field">
                <div class="value left">
                    0</div>
                <input class="Input3" id="inputSlider3" type="range" min="10" max="200" value="100" steps="1">
                <div class="value right">
                    200</div>
            </div>
        </div>
    </div>



# css

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.thirdExample {
    display: grid;
    height: 100%;
    text-align: center;
    place-items: center;
    background: #664AFF;
    padding: 50px;
    padding-left: 0px;
}

.range {
    height: 80px;
    width: 380px;
    background: #fff;
    border-radius: 10px;
    padding: 0 65px 0 45px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
}

.sliderValue3 {
    position: relative;
    width: 100%;
}

.sliderValue3 span {
    position: absolute;
    height: 45px;
    width: 45px;
    transform: translateX(-70%) scale(0);
    font-weight: 500;
    top: -40px;
    line-height: 55px;
    z-index: 2;
    color: #fff;
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out;
}

.sliderValue3 span.show {
    transform: translateX(-70%) scale(1);
}

.sliderValue3 span:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: #664AFF;
    border: 3px solid #fff;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-bottom-left-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
}

.field {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
}

.field .value {
    position: absolute;
    font-size: 18px;
    color: #664AFF;
    font-weight: 600;
}

.field .value.left {
    left: -22px;
}

.field .value.right {
    right: -43px;
}

.Input3 {
    -webkit-appearance: none;
    width: 100%;
    height: 3px;
    background: #ddd;
    border-radius: 5px;
    outline: none;
    border: none;
    z-index: 2222;
}

.Input3::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    background: #664AFF;
    border: 1px solid #664AFF;
    cursor: pointer;
}

.Input3::-moz-range-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    background: #664AFF;
    border: 1px solid #664AFF;
    cursor: pointer;
}

.Input3::-moz-range-progress {
    background: #664AFF; //this progress background is only shown on Firefox
}

# javascript

   const slideValue = document.querySelector("#sliderValueText");
   const inputSlider = document.querySelector("#inputSlider3");
  // slideValue.classList.add("show");
   inputSlider.oninput = (() => {
       let value = inputSlider.value;

       slideValue.textContent = value;
       slideValue.style.left = (value / 2) + "%";
       slideValue.classList.add("show");
   });
   inputSlider.onblur = (() => {
       slideValue.classList.remove("show");
   });
```
