$(document).ready(function() {
    const natoAlphabet = {
        'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', // Continue for the rest of the alphabet
    };
    const civilianAlphabet = {
        'A': 'Apple', 'B': 'Banana', 'C': 'Cherry', 'D': 'Date', // Define the rest similarly
    };

    $('#generateBtn').click(function() {
        const isNato = $('#natoToggle').is(':checked');
        const isCivilian = $('#civilianToggle').is(':checked');
        const isKebob = $('#kebobToggle').is(':checked');
        let input = $('#textInput').val();
        let output = input.toUpperCase().split('').map(letter => {
            if (isNato) return natoAlphabet[letter] || letter;
            else if (isCivilian) return civilianAlphabet[letter] || letter;
            return letter; // Default to just the letter if no toggle selected
        });
        if (isKebob) output = output.join('-').toLowerCase();
        else output = output.join(' ');
        $('#output').html(`<div class="alert alert-primary">${output}</div>`);
    });

    $('#clearBtn').click(function() {
        $('#output').empty();
    });

    $('#resetBtn').click(function() {
        $('#textInput').val('');
        $('#output').empty();
    });

    function toggleMenu() {
        const nav = $('nav');
        nav.toggleClass('active');
    }
});
