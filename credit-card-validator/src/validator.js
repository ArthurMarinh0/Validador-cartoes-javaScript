class CreditCardValidator {
    validate(cardNumber) {
        const cardType = this.getCardType(cardNumber);
        return cardType !== null && this.luhnCheck(cardNumber);
    }

    getCardType(cardNumber) {
        const regexes = {
            Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            MasterCard: /^5[1-5][0-9]{14}$/,
            AmericanExpress: /^3[47][0-9]{13}$/,
            Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            EnRoute: /^(2014|2149)[0-9]{11}$/,
            JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
            Voyager: /^8699[6-7][0-9]{10}$/,
            Hipercard: /^(606282\d{10}|\d{16})$/,
            Aura: /^50(77|84)[0-9]{12}$/,
        };

        for (const [type, regex] of Object.entries(regexes)) {
            if (regex.test(cardNumber)) {
                return type;
            }
        }
        return null;
    }

    luhnCheck(cardNumber) {
        let sum = 0;
        let alternate = false;
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let n = parseInt(cardNumber.charAt(i), 10);
            if (alternate) {
                n *= 2;
                if (n > 9) {
                    n -= 9;
                }
            }
            sum += n;
            alternate = !alternate;
        }
        return sum % 10 === 0;
    }
}

export default CreditCardValidator;