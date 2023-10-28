

document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const amount = parseFloat(document.getElementById('value1').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const currencyApi = new CurrencyAPI('cur_live_QY6JOVe8TkPSnVRQpC0vQS68znhb5ub6puf775kN');
    
    currencyApi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    });
});
