function calculateCompoundInterest(array){
    "use strict";
    let [principalSum, interestRate, compoundingPeriod, timespan] = array;

    let interestPercentage = interestRate / 100;
    let periodsInYear = 12 / compoundingPeriod;

    let totalSum = principalSum * Math.pow( (1 + (interestPercentage / periodsInYear)), periodsInYear * timespan);

    console.log(totalSum);
}
/* Uncomment to test:
calculateCompoundInterest([1500, 4.3, 3, 6]);
calculateCompoundInterest([100000, 5, 12, 25]);
    */