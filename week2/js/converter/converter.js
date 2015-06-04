var
  exch_rates = { eur:1.26, usd: 1.62, yen: 172.88 },
  currency,
  originalAmountValue,
  convertedCurrency,
  button = document.querySelectorAll(".converter-action")[0],
  currencyChoice = document.querySelectorAll(".converter-currency")[0],
  converterInput = document.querySelectorAll(".converter-input")[0],
  originalAmount = document.querySelectorAll(".original-amount")[0],
  resultAmount = document.querySelectorAll(".result-amount")[0];


function convert () {
  originalAmountValue = converterInput.value;
  currency = currencyChoice.value;

  if(currency === "eur") {
    convertedCurrency = originalAmountValue * exch_rates.eur;
  }
  else if (currency === "usd") {
    convertedCurrency = originalAmountValue * exch_rates.usd;
  }
  else if (currency === "yen") {
    convertedCurrency = originalAmountValue * exch_rates.yen;
  }

  originalAmount.textContent = originalAmountValue;
  resultAmount.textContent = convertedCurrency + " " + currency;

}

button.addEventListener(
  "click",
  convert,
  false
);
