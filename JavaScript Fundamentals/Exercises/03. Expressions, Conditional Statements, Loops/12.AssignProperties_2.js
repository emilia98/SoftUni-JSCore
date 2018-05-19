function assignProperties(array){
    "use strict";
    let [prop1, value1, prop2, value2, prop3, value3] = array;
    let object = {};
    object[prop1] = value1;
    object[prop2] = value2;
    object[prop3] = value3;

    console.log(object);
}

/* Uncomment to test:
 assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
 assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);
 */