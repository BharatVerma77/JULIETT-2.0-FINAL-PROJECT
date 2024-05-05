$(document).ready(function() {
    const natoAlphabet = {
        'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
        'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
        'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
        'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
        'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee',
        'Z': 'Zulu'
    };

    const civilianAlphabet = {
        'A': 'Apple', 'B': 'Banana', 'C': 'Cherry', 'D': 'Date', 'E': 'Egg',
        'F': 'Fig', 'G': 'Grape', 'H': 'Honeydew', 'I': 'Icing', 'J': 'Juice',
        'K': 'Kiwi', 'L': 'Lemon', 'M': 'Mango', 'N': 'Nectarine', 'O': 'Orange',
        'P': 'Peach', 'Q': 'Quince', 'R': 'Raspberry', 'S': 'Strawberry', 'T': 'Tomato',
        'U': 'Ugli fruit', 'V': 'Vanilla', 'W': 'Watermelon', 'X': 'Xigua', 'Y': 'Yam',
        'Z': 'Zucchini'
    };

    $('#generateBtn').click(function() {
        generateOutput();
    });

    $('#clearBtn').click(function() {
        $('#output').empty();
    });

    $('#resetBtn').click(function() {
        $('#textInput').val('');
        $('#output').empty();
    });

    function generateOutput() {
        const isNato = $('#natoToggle').is(':checked');
        const isCivilian = $('#civilianToggle').is(':checked');
        const isKebob = $('#kebobToggle').is(':checked');
        let input = $('#textInput').val();
        let output = input.toUpperCase().split('').map(letter => {
            if (isNato) return natoAlphabet[letter] || letter;
            else if (isCivilian) return civilianAlphabet[letter] || letter;
            return letter;
        });

        if (isKebob) output = output.join('-').toLowerCase();
        else output = output.join(' ');

        $('#output').html(`<div class="alert alert-primary">${output}</div>`);
    }
});
