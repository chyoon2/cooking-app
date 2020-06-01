// Business Logic

const celsiusToFarenheit = function(celsius) {
  return (celsius * 9 / 5 + 32);
};

const farenheitToCelsius = function(farenheit) {
  return (farenheit - 32 * 5 / 9);
};
// User Interface Logic

const celsius = parseInt(prompt("Enter a temperature in Celsius"));
const farenheit = parseInt(prompt("Enter a temperature in Farenheit"));
alert(farenheitToCelsius (farenheit));