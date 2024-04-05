import CurrencyAPI from './index.js';

document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const amount = parseFloat(document.getElementById('value1').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const currencyApi = new CurrencyAPI('cur_live_QY6JOVe8TkPSnVRQpC0vQS68znhb5ub6puf775kN');
    
    currencyApi.latest({
        base_currency:fromCurrency;
        currencies:toCurrency;
    }).then(response => {
        let currencies = Object.keys(response.data);
        let resultHTML = '';

            for (let currency of currencies) {
            resultHTML += `<div class="flex items-center justify-between py-2">
                <strong>${currency}:</strong>
                <span>${response.data[currency].value}</span>
            </div>`;
        }
    latestRatesDisplay.innerHTML = resultHTML;
        console.log(response);
    }).catch(error => {
        console.error(error);
    });
});
