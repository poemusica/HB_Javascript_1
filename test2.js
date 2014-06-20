function filter(myfn, myarray) {
    var result = [];
    for (var i=0; i < myarray.length; i++) {
        if (myfn(myarray[i])) {
            result.push(myarray[i]);
        }
    }
    return result;
}

function sum(myarray) {
    var mysum = 0;
    for (var i=0; i < myarray.length; i++) {
        mysum = mysum + myarray[i];
    }
    return mysum;
}


function even(n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function fibonacci_set (max) {
    if (max > 1) {
        var fib_list = [1];
        var current_fib = 1;
        
        while (current_fib <= max) {
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length -1] + fib_list[fib_list.length -2];
        }
        return fib_list;
    }
    else {
        return [1, 1];
    }
}
   

console.log(sum(filter(even,fibonacci_set(4000000))));