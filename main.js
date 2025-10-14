document.getElementById('test-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputField = document.getElementById('input-field').value;
    const extraField = document.getElementById('extra-field').value;
    let resultMessage;

    try {
        // Simulating processing input
        if (inputField === '') {
            throw new Error('Input Field is required.');
        }
        // Handling extra field without validation
        resultMessage = 'Form submitted! Input: ' + inputField + ', Extra: ' + extraField;
    } catch (error) {
        resultMessage = 'Error: ' + error.message;
    }
    document.getElementById('result').innerText = resultMessage;
});