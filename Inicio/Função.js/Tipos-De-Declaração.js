console.log(Soma(3, 3));

//Fuction declaration
function Soma(a, b) {
    return a + b;
}

//function expression
const Sub = function(a, b) {
    return a - b;
}

console.log(Sub(4, 3));

// named function expression
const mult = function mult(a, b) {
    return a * b;
}

console.log(mult(5, 5));