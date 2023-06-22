var celcius = 0;
var fahrenheit = 0;

function CtoF(celcius) {
  celcius = document.querySelector(".celcius").querySelector("input").value;
  fahrenheit = (celcius * 9) / 5 + 32;
  console.log(fahrenheit);
  document.querySelector(".fahrenheit").querySelector("input").value =
    fahrenheit;
  document.querySelector(".rumus").querySelector("p").innerHTML =
    celcius + "C * 9/5 + 32 = " + fahrenheit + "F";
}

function FtoC(fahrenheit) {
  fahrenheit = document.querySelector(".fahrenheit").value;
  celcius = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit);
  document.querySelector(".celcius").querySelector("input").value = celcius;
  document.querySelector(".rumus").querySelector("p").innerHTML =
    fahrenheit + "F - 32 * 5/9 = " + celcius + "C";
}

function reset() {
  document.querySelector(".celcius").querySelector("input").value = "0";
  document.querySelector(".fahrenheit").querySelector("input").value = "0";
  document.querySelector(".rumus").querySelector("p").innerHTML = "";
}

//debugging

// function btn() {
//   console.log(celcius);
// }

// function getValue() {
//   console.log(document.querySelector(".celcius").value);
// }
