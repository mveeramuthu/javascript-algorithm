'use strict';

function add(x, y, cb) {
    let result = x + y;
    cb(null, result);
}

function cb(err, data) {

    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
}

 add(1000, 900, cb);
 add(1000, 900, cb);
 add(-1000, 900, cb);
 add(1000, -1000, cb);
 add(1000, -900, cb);
 add(-1000, -900, cb);