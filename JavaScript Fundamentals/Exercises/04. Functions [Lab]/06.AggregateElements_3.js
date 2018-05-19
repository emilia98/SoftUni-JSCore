function aggregateElements(array){
    function aggregate(array, startValue, f){
        let value = startValue;

        for(let index = 0; index < array.length; index++){
            value = f(value, array[index]);
        }
        return value;
    }

    console.log(aggregate(array, 0, (a, b) => a + b));
    console.log(aggregate(array, 0, (a, b) => a + 1 / b));
    console.log(aggregate(array, "", (a, b) => a + b));
}

/* Uncomment to test:
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
*/