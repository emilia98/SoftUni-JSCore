function aggregateElements(array){
    let result = operateWithElements(array);
    printResult(result);

    function operateWithElements(array){
        let sum = 0;
        let inversedSum = 0;
        let concat = "";

        for(let index = 0; index < array.length; index++){
            sum += array[index];
            inversedSum += (1 /array[index]);
            concat += array[index];
        }
        let result = [sum, inversedSum, concat];
        return result;
    }

    function printResult(result) {
        for(let element of result){
            console.log(element);
        }
    }
}

/* Uncomment to test:
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
*/
