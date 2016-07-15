'use strict';

/**
 * Created by veeramuthum on 7/14/16.
 */

function isEven(n) {

    if(n >= 0 && n%2 == 0)
            return true;
    else
            return false;
}

for(var i=0; i<=9; i++) {
    if(isEven(i)) {
        console.log(i + " is an even number");
    } else {
        console.log(i + " is odd number");
    }
}
