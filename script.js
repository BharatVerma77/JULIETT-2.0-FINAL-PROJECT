$(document).ready(function() {
    const natoAlphabet = {
        'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', // Continue with the rest
    };

    $('#generateBtn').click(function() {
        let input = $('#textInput').val();
        let output = input.toUpperCase().split('').map(letter => natoAlphabet[letter] || letter).join(' ');
        $('#output').text(output);
    });
});
