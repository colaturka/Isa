document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const amount = parseFloat(document.getElementById('value1').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    convertCurrency(amount, fromCurrency, toCurrency);
});

function convertCurrency(amount, fromCurrency, toCurrency) {
    const API_KEY = 'cur_live_QY6JOVe8TkPSnVRQpC0vQS68znhb5ub6puf775kN';
    const API_URL = `https://api.currencyapi.com/v3/convert?value=12 \`; // Replace with the actual API endpoint URL

    const url = `${API_URL}?value=${amount}&base_currency=${fromCurrency}&currencies=${toCurrency}&apiKey=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const convertedAmount = data.result;
                document.getElementById('result').textContent =
                    `${amount.toFixed(2)} ${fromCurrency} is ${convertedAmount.toFixed(6)} ${toCurrency}`;
            } else {
                document.getElementById('result').textContent =
                    'Currency conversion failed: ' + data.error.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'An error occurred.';
        });
}
