document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    // Here we will test how extra fields interact with our code
    const extraFields = document.getElementById('extra-fields');
    extraFields.innerHTML = '<p>Extra Fields:</p><ul><li>Field 1: Test</li><li>Field 2: Example</li><li>Field 3: New Test</li><li>Field 4: Another Example</li></ul>';
});
