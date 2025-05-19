function luhnCheck(cardNumber) {
    const digits = cardNumber.split('').map(Number);
    const checksum = digits.pop();
    const reversedDigits = digits.reverse();

    const total = reversedDigits.reduce((acc, digit, index) => {
        if (index % 2 === 0) {
            return acc + digit;
        }
        const doubled = digit * 2;
        return acc + (doubled > 9 ? doubled - 9 : doubled);
    }, 0);

    const calculatedChecksum = (total * 9) % 10;
    return calculatedChecksum === checksum;
}

export default luhnCheck;