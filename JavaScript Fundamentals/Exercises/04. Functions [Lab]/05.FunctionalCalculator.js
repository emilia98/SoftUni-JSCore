function calculate(arg1, arg2, arg3) {
    let value1 = Number(arg1);
    let value2 = Number(arg2);
    let operator = arg3;

    if(operator == '+'){
        console.log(sum(value1, value2));
    }
    else if(operator == '-'){
        console.log(subtr(value1, value2));
    }
    else if(operator == '*'){
        console.log(multiply(value1, value2));
    }
    else if(operator == '/'){
        console.log(divide(value1, value2));
    }

    function sum(a, b) {
        return a + b;
    }

    function subtr(a, b){
        return a - b;
    }

    function multiply(a, b){
        return a * b;
    }

    function divide(a, b){
        return a / b;
    }
}

/* Uncomment to test:
calculate(2, 4, '+');
calculate(3, 3, '/');
calculate(18, -1, '*');
calculate(-7, -1.5, '-');
*/
