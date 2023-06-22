var celcius;
var fahrenheit;

// function getValue() {
//   console.log(document.querySelector(".celcius").value);
// }
function CtoF(celcius) {
  celcius = document.querySelector(".celcius").querySelector("input").value;
  fahrenheit = (celcius * 9) / 5 + 32;
  console.log(fahrenheit);
  document.querySelector(".fahrenheit").querySelector("input").value =
    fahrenheit;
  document.querySelector(".rumus").querySelector("p").innerHTML =
    celcius + "C * 9/5 + 32 = " + fahrenheit + "F";
}
function FtoC() {
  fahrenheit = document.querySelector(".fahrenheit").value;
  celcius = ((fahrenheit - 32) * 5) / 9;
}

function reset() {
  document.querySelector(".celcius").querySelector("input").value = "";
  document.querySelector(".fahrenheit").querySelector("input").value = "";
  document.querySelector(".rumus").querySelector("p").innerHTML = "";
}

//debugging
// function btn() {
//   console.log(celcius);
// }
