console.log("1. isEven()");
function isEven(num) {
    return num % 2 === 0
}
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("2. facctorial()");
function factorial(num) {
    var result = 1;
    for(var i=num; i>1; i--) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log("3. kebabToSnake");
function kebabToSnake(str) {
    return str.replace(/-/gi, "_");
}
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));