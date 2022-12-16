const validator = (arguments) => {
    let errorMessage = '';

    if (arguments.length !== 5) {
        errorMessage = 'Error, Please enter two numbers and an operator';
    }

    const num1 = Number(arguments[2]);
    const num2 = Number(arguments[3]);
    if (isNaN(num1) || isNaN(num2)) {
        errorMessage = 'please enter a number';
    }

    const operator = arguments[4];
    if (num2 === 0 && operator === '/') {
        errorMessage = 'error, divide by zero is undefined';
    }

    const operatorList = ['+', '-', 'x', '/'];
    if (!operatorList.includes(operator)) {
        errorMessage = `please enter an operator from this list: ${operatorList.join(',')}`;
    }

    return {
        errorMessage,
        num1, num2, operator
    };
}

module.exports = {
    validator
};