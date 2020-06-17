//Select all the item
const scaleInput = document.querySelector(".main-value");
const mainForm = document.querySelector(".main-form");
const resultText = document.querySelector(".result");
const selectOne = document.getElementById("selectOne");
const selectTwo = document.getElementById("selectTwo");

mainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(scaleInput.value);

  //get the select value
  const selectOneValue = selectOne.value;
  const selectTwoValue = selectTwo.value;

  //call all the function with condition
  if (!value) {
    resultText.innerHTML = `<h4 class="invalid">Please enter a value first</h4>`;
  } else if (selectOneValue == "fahrenheit" && selectTwoValue == "celsius") {
    fahrenheitToCelsius(value);
  } else if (selectOneValue == "fahrenheit" && selectTwoValue == "kelvin") {
    fahrenheitToKelvin(value);
  } else if (selectOneValue == "celsius" && selectTwoValue == "fahrenheit") {
    celsiusToFarenheit(value);
  } else if (selectOneValue == "celsius" && selectTwoValue == "kelvin") {
    celsiusToKelvin(value);
  } else if (selectOneValue == "kelvin" && selectTwoValue == "fahrenheit") {
    kelvinToFahrenheit(value);
  } else if (selectOneValue == "kelvin" && selectTwoValue == "celsius") {
    kelvinToCelsius(value);
  } else if (selectOneValue == selectTwoValue) {
    resultText.innerHTML = `<h4 class="invalid">Please select a valid value</h4>`;
  }
});

//ALL THE CONVERT FUNCTION
//fahrenheit to celsius
function fahrenheitToCelsius(f) {
  const result = Math.floor(((f - 32) * 5) / 9);
  resultText.innerHTML = `<h4 class="valid">${result} degree celsius</h4>`;
}

//fahrenheit to kelvin
function fahrenheitToKelvin(f) {
  const result = Math.floor(((f - 32) * 5) / 9 + 273.15);
  resultText.innerHTML = `<h4 class="valid">${result} degree Kelvin</h4>`;
}

//celsius to farenheit
function celsiusToFarenheit(c) {
  const result = Math.floor((c * 9) / 5 + 32);
  resultText.innerHTML = `<h4 class="valid">${result} degree Fahrenheit</h4>`;
}

//celsius to kelvin
function celsiusToKelvin(c) {
  const result = Math.floor(c + 273.15);
  resultText.innerHTML = `<h4 class="valid">${result} degree Kelvin</h4>`;
}

//kelvin to fahrenheit
function kelvinToFahrenheit(k) {
  const result = Math.floor(((k - 273.15) * 9) / 5 + 32);
  resultText.innerHTML = `<h4 class="valid">${result} degree Fahrenheit</h4>`;
}

//kelvin to celsius
function kelvinToCelsius(k) {
  const result = Math.floor(k - 273.15);
  resultText.innerHTML = `<h4 class="valid">${result} degree Celsius</h4>`;
}
