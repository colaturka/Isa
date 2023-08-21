document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const amount = parseFloat(document.getElementById('value1').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    convertCurrency(amount, fromCurrency, toCurrency);
});

function convertCurrency(amount, fromCurrency, toCurrency) {
    const API_KEY = '632da9956e4e713fb309f7a0dd0ead1b';
    const API_URL = 'http://data.fixer.io/api/convert';

    const params = new URLSearchParams({
        access_key: API_KEY,
        from: fromCurrency,
        to: toCurrency,
        amount: amount
    });

    const url = `${API_URL}?${params.toString()}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const convertedAmount = data.result;
                document.getElementById('result').textContent =
                    `${amount.toFixed(2)} ${fromCurrency} is ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                document.getElementById('result').textContent =
                    'Currency conversion failed: ' + data.error.info;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'An error occurred.';
        });
}
