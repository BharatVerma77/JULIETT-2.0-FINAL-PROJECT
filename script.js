$(document).ready(function() {
    const natoAlphabet = {
        'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', // Complete the alphabet
    };
    const civilianAlphabet = {
        'A': 'Apple', 'B': 'Banana', 'C': 'Cherry', 'D': 'Date', // Define the rest similarly
    };

    // Function to update output dynamically
    $('#textInput').on('input', function() {
        updateOutput();
    });

    $('#generateBtn').click(function() {
        updateOutput();
    });

    function updateOutput() {
        const isNato = $('#natoToggle').is(':checked');
        const isCivilian = $('#civilianToggle').is(':checked');
        const isKebob = $('#kebobToggle').is(':checked');
        let input = $('#textInput').val().toUpperCase();
        let output = input.split('').map(letter => {
            if (isNato) return natoAlphabet[letter] || letter;
            else if (isCivilian) return civilianAlphabet[letter] || letter;
            return letter; // Default to just the letter if no toggle selected
        });
        if (isKebob) output = output.join('-').toLowerCase();
        else output = output.join(' ');
        $('#output').html(`<div class="alert alert-primary" style="opacity: 0; transition: opacity 0.3s ease-in-out;">${output}</div>`);
        $('#output div').css('opacity', 1);
    }

    $('#clearBtn').click(function() {
        $('#output').empty();
        $('#textInput').val('');
    });

    $('#resetBtn').click(function() {
        $('#textInput').val('');
        updateOutput();
    });

    function toggleMenu() {
        const nav = $('nav');
        nav.toggleClass('active');
    }
});
