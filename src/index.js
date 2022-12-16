const {validator} = require('./input-validate');
const {calculator} = require('./calculator');

const {errorMessage, num1, num2, operator} = validator(process.argv);
if (errorMessage !== '') {
    console.log(errorMessage);
    process.exit(0);
}
console.log(calculator(num1, num2, operator));

