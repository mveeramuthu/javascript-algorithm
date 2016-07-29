'use strict';

function add(x, y, cbForAdd) {
    let result = x + y;
    cbForAdd(null, result);
    return result;
}

function cbForAdd(err, data) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
}

function avg(x, y, cbForAvg) {
    let sum = add(x, y, cbForAdd);
    let result = sum / 2;
    cbForAvg(null, result);
}

function cbForAvg(err, data) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
}

avg(5, 3, cbForAvg);
avg(-5, 3.5, cbForAvg);
avg(-7, -4, cbForAvg);