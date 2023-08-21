import currencyapi from '@everapi/currencyapi-js';

const client = new currencyapi('YOUR-API-KEY');

document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const amount = parseFloat(document.getElementById('value1').value);

    client.convert({
        value: amount
    }).then(response => {
        if (response.success) {
            const convertedAmount = response.result;
            const fromCurrency = response.query.from;
            const toCurrency = response.query.to;
            document.getElementById('result').textContent =
                `${amount.toFixed(2)} ${fromCurrency} is ${convertedAmount.toFixed(6)} ${toCurrency}`;
        } else {
            document.getElementById('result').textContent =
                'Currency conversion failed: ' + response.error.message;
        }
    }).catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred.';
    });
});
