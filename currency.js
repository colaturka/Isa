document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const value1=document.getElementById('value1').value;
    const apiURL= 'http://data.fixer.io/api/convert?access_key=632da9956e4e713fb309f7a0dd0ead1b&param1=${value1}';
    document.getElementById('result').textContent = `Value 1: ${value1}`;
});
