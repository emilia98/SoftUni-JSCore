function calculate(arg1, arg2, arg3){
    let a = Number(arg1);
    let b = Number(arg2);
    let operator = arg3;

    let calculation = function(a, b, operation){ return operation(a, b); };
    let sum = function(a, b){ return (a + b); };
    let subtract = function(a, b){ return (a - b); };
    let multiply = function(a, b){ return (a * b); };
    let divide = function(a, b){ return (a / b); };

    switch(operator){
        case '+': {
            return calculation(a, b, sum);
        }
        case '-': {
            return calculation(a, b, subtract);
        }
        case '*': {
            return calculation(a, b, multiply);
        }
        case '/': {
            return calculation(a, b, divide);
        }
    }

    return calculation;
}

/* Uncomment to test:
console.log(calculate(2, 4, '+'));
console.log(calculate(3, 3, '/'));
console.log(calculate(18, -1, '*'));
console.log(calculate(-7, -1.5, '-'));
*/
