function filterByAge(arg1,arg2,arg3,arg4,arg5){
    let minimalAge = parseFloat(arg1);
    let firstPerson =  { name: arg2, age: parseFloat(arg3)};
    let secondPerson = { name: arg4, age: parseFloat(arg5)};

    if(firstPerson.age >= minimalAge){
        console.log(firstPerson);
    }

    if(secondPerson.age >= minimalAge){
        console.log(secondPerson);
    }
}

/* uncomment to test:
filterByAge(12, 'Ivan', 15, 'Asen', 9);
filterByAge(17, 'Pesho', 25, 'Mariya', 17);
    */