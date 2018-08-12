function aggregateElements(array){
    let sum = sumElements(array);
    let sumInversed = sumInversedElements(array);
    let concat = concatenateElements(array);

    console.log(sum);
    console.log(sumInversed);
    console.log(concat);

    function sumElements(array){
        let counter = array.length;
        let sum = 0;

        for(let index = 0; index < counter; index++){
            sum += array[index];
        }
        return sum;
    }

    function sumInversedElements(array){
        let counter = array.length;
        let sumInversed = 0;

        for(let index = 0; index < counter; index++){
            sumInversed += (1 / array[index]);
        }
        return sumInversed;
    }

    function concatenateElements(array){
        let counter = array.length;
        let result = "";

        for(let index = 0; index < counter; index++){
            result += array[index];
        }
        return result;
    }
}

/* Uncomment to test:
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
*/