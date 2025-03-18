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

    // Create a tracker variable which can be used to allow (or not allow) user to copy password:
    let canCopyPass = false;  

    // Auxillary function to get a random lowercase alphabet, ranging a-z:
    const getRandomLowercaseAlphabet = () => getRandomChar(LOWERCASE_ALPHABETS);

    // Auxillary function to get a random uppercase alphabet, ranging A-Z:
    const getRandomUppercaseAlphabet = () => getRandomChar(UPPERCASE_ALPHABETS);

    // Auxillary function to get a random numerical character, ranging 0-9:
    const getRandomNumChar = () => getRandomChar(NUMERICAL_CHARACTERS);

    // Auxillary function to get a random symbol:
    const getRandomSymbol = () => getRandomChar(SYMBOL_CHARACTERS);

    // Auxillary function to generate a random positive integer, upto a given num:
    const getRandomPositveInteger = (maxNum) => {
        return Math.floor(Math.random() * maxNum) + 1;
    }

    // Auxillary function to get a random character from any array consisting of specific type of characters
    const getRandomChar = (charArray) => {
        const randomCharIndex = getRandomPositveInteger(charArray.length) - 1;
        const randomChar = charArray[randomCharIndex];
        return randomChar;
    }

    // Function to generate password:
    const generatePassword = () => {
        // Define variables:
        let passwordLength = passLengthInpEl.value;
        let includeUppercaseChars = passOptionsEls.uppercaseCheckbox.checked;
        let includeNums = passOptionsEls.numbersCheckbox.checked;
        let includeSymbols = passOptionsEls.symbolsCheckbox.checked;

        // Create an array of available character generator functions
        const charGenerators = [
            getRandomLowercaseAlphabet, // Always include lowercase
        ];
        
        // Add optional character types based on user selection
        if (includeUppercaseChars) charGenerators.push(getRandomUppercaseAlphabet);
        if (includeNums) charGenerators.push(getRandomNumChar);
        if (includeSymbols) charGenerators.push(getRandomSymbol);

        // Create an array to store random characters, then join them to form a password of user-desired length:  
        const password = [];
    
        // Loop to "password.length" times to add random lowercase, uppercase, numerical and symbolic characters to "password[]"
        for (let i = 0; i < passwordLength; i++) {
            let randomGeneratorIndex = getRandomPositveInteger(charGenerators.length) - 1;
            const randomCharGenerator = charGenerators[randomGeneratorIndex];
            password.push(randomCharGenerator());
        }

        // Display password on the webpage:
        passDisplayEl.value = password.join('');
    }

    // Function to copy the password to clipboard:
    const copyPasswordToClipboard = async () => {
        let password = passDisplayEl.value;

        if(!password || !canCopyPass) return;

        try {
            await navigator.clipboard.writeText(password);
            alert("Password Copied to Clipboard!");
        }
        catch(err) {
            console.log(err);
            alert("Failed to Copy Password. Please, try again later!");
        }
    }

    // Set the Password length to a default value:
    passLengthInpEl.value =  passLengthDisplayEl.textContent = 10;

    // Display password length on webpage, when user changes it, by using range-input element:
    passLengthInpEl.addEventListener("input", () => passLengthDisplayEl.textContent = passLengthInpEl.value);

    // Generate Password on clicking "genPassBtnEl":
    genPassBtnEl.addEventListener("click", () => {
        generatePassword();
        
        // Allow user to copy the password:
        canCopyPass = true;
    });

    // Copy the password the Clipboard on clicking "passDisplayEl":
    passDisplayEl.addEventListener("click", copyPasswordToClipboard);
});

