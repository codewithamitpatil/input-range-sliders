   const slideValue = document.querySelector("#sliderValueText");
   const inputSlider = document.querySelector("#inputSlider3");
   slideValue.classList.add("show");
   inputSlider.oninput = (() => {
       let value = inputSlider.value;

       slideValue.textContent = value;
       slideValue.style.left = (value / 2) + "%";
       slideValue.classList.add("show");
   });
   inputSlider.onblur = (() => {
       slideValue.classList.remove("show");
   });