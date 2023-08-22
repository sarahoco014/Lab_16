const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

// this is the same as:
// const multiply = (a, b) => number1 * number2;

const divide = function(a, b) {
    return a / b;
};

const modulus = function(a, b) {
    return a % b;
};

const even = function(a) {
    if(a % 2 === 0) {
        return true;
    }
};

const odd = function(b) {
    if(b % 2 !== 0) {
        return true;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
