// This file is the entry point of the application. It initializes the credit card validator and handles user input or API requests.

import  CreditCardValidator  from './validator.js';

const validator = new CreditCardValidator();

// Example usage: Validate a card number and get its type
const cardNumber = '4111111111111111'; // Sample card number for testing

if (validator.validate(cardNumber)) {
    console.log(`${cardNumber} is a valid card.`);
    console.log(`Card Type: ${validator.getCardType(cardNumber)}`);
} else {
    console.log(`${cardNumber} is not a valid card.`);
}