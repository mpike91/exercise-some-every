// Done
function hasOddNumber(arr) {
    return arr.some(function(num){
        return (num % 2 !== 0);
    });
}

// Done
function hasAZero(num) {
    return num.toString().split("").some(function(num) {
        return (num == 0);
    })
}

// Done
function hasOnlyOddNumbers(arr) {
    return arr.every(function(num){
        return num % 2 !== 0;
    })
}

// Done
function hasNoDuplicates(arr) {
    return arr.every(function(num, index, arr){
        return (arr.indexOf(num, index + 1) === -1);
    })
}

// Done
function hasCertainKey(arr, key) {
    return arr.every(function(obj, i, arr){
        return obj[key] !== undefined;
    })
}

// Done
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(obj, i, arr){
        return obj[key] === searchValue;
    })
}
