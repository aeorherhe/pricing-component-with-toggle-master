// select html documents

const checkbox = document.querySelector("#checkbox");
const prices = document.querySelectorAll(".price");
let annualPriceSelected = false;
const monthlyPrices = [19.99, 24.99, 39.99];
const annualPrices = [199.99, 249.99, 399.99];

// load prices dynamically when document is loaded
window.addEventListener("DOMContentLoaded", () => {
  updatePrice(prices, monthlyPrices);
});

// listen for chechbox change event
checkbox.addEventListener("change", () => {
  if (annualPriceSelected) {
    annualPriceSelected = false;
    updatePrice(prices, monthlyPrices);
  } else {
    annualPriceSelected = true;
    updatePrice(prices, annualPrices);
  }
});

// function to update price
function updatePrice(priceUpdate, price) {
  priceUpdate.forEach(function (priceAmount) {
    const priceTiers = priceAmount.parentElement.parentElement.classList;
    if (priceTiers.contains("basic")) {
      priceAmount.textContent = price[0];
    }
    if (priceTiers.contains("professional")) {
      priceAmount.textContent = price[1];
    }
    if (priceTiers.contains("master")) {
      priceAmount.textContent = price[2];
    }
  });
}
