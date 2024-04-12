//fetching variables from html
var cost = document.getElementById("cost");
var price = document.getElementById("price");
var calc = document.getElementById("calc");
var total = document.getElementById("total");
//adding functionality to multiply the variables
calc.addEventListener("click", function () {
  total.innerText = parseFloat(cost.value) * parseFloat(price.value);
});
