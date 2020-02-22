function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    var first = arr[0];
    var isUniform = true;
    arr.forEach(function(val) {
        if(val !== first) {
            isUniform = false;
        }
    });
    return isUniform;
}

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(val) {
        sum += val;
    });
    return sum;
}

function max(arr) {
    var maxNum = arr[0];
    arr.forEach(function(val) {
        if(maxNum < val) {
            maxNum = val;
        }
    });
    return maxNum;
}