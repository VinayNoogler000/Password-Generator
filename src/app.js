window.addEventListener("DOMContentLoaded", () => {
    // Select the Required HTML-DOM Elements:
    const passDisplayEl = document.getElementById("password");
    const passLengthInpEl = document.getElementById("p-length");
    const passLengthDisplayEl = document.getElementById("password-length");
    const passOptionsEls = { 
        uppercaseCheckbox: document.getElementById("uppercase-radio"), 
        numbersCheckbox: document.getElementById("numbers-radio"),
        symbolsCheckbox: document.getElementById("symbols-radio"), 
    };
    const genPassBtnEl = document.getElementById("gen-pass-btn");

    // Define Constants [Generated using Claude 3.7 Sonnet for time efficiency]:
    const LOWERCASE_ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split('');
    const UPPERCASE_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const NUMERICAL_CHARACTERS = '0123456789'.split('');
    const SYMBOL_CHARACTERS = '!@#$%^&*()_+-=?.'.split('');

    // Auxillary function to get a random lowercase alphabet, ranging a-z:
    const getRandomLowercaseAlphabet = () => {
        let i = Math.floor(Math.random() * LOWERCASE_ALPHABETS.length);
        return LOWERCASE_ALPHABETS[i];
    }

    // Auxillary function to get a random uppercase alphabet, ranging A-Z:
    const getRandomUppercaseAlphabet = () => {
        let i = Math.floor(Math.random() * UPPERCASE_ALPHABETS.length);
        return UPPERCASE_ALPHABETS[i];
    }

    // Auxillary function to get a random numerical character, ranging 0-9:
    const getRandomNumChar = () => {
        let i = Math.floor(Math.random() * NUMERICAL_CHARACTERS.length);
        return NUMERICAL_CHARACTERS[i];
    }

    // Auxillary function to get a random symbol:
    const getRandomSymbol = () => {
        let i = Math.floor(Math.random() * SYMBOL_CHARACTERS.length);
        return SYMBOL_CHARACTERS[i];
    }

    // Function to generate password:
    const generatePassword = () => {
        // Define variables:
        let passwordLength = passLengthInpEl.value;
        let includeUppercaseChars = passOptionsEls.uppercaseCheckbox.checked;
        let includeNums = passOptionsEls.numbersCheckbox.checked;
        let includeSymbols = passOptionsEls.symbolsCheckbox.checked;

        // Create an array to store random characters, then join them to form a password of user-desired length:  
        const password = [];
    
        // Loop to "password.length" times to add random lowercase, uppercase, numerical and symbolic characters to "password[]"
        for (let i = 0; i < passwordLength; i++) {
            password.push( getRandomLowercaseAlphabet() );
        }

        // Display password on the webpage:
        passDisplayEl.value = password.join('');
    }

    // Initialize Password length:
    passLengthInpEl.value =  passLengthDisplayEl.textContent = 9;

    // Display password length on webpage, when user changes it, by using range-input element:
    passLengthInpEl.addEventListener("input", () => {
        passLengthDisplayEl.textContent = passLengthInpEl.value;
    });

    // Generate Password on clicking "genPassBtnEl":
    genPassBtnEl.addEventListener("click", () => {
        generatePassword();
    });
});

