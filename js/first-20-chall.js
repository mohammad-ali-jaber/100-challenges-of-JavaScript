// challenges 1

console.log('Hello, World')
console.log("-------------------------")

// challenges 2

function add(x,y){
    return x+y;
}

console.log(add(3,4))
console.log("-------------------------")

// challenges 3

function CalculateSquareRoot(num){
    return Math.sqrt(num);
}

console.log(CalculateSquareRoot(9))
console.log("-------------------------")

// challenges 4

function calculatesAreaOfTriangle(base,height){
    return 0.5 * base * height;
}

console.log(calculatesAreaOfTriangle(3.14,3.14))
console.log("-------------------------")

// challenges 5

let a = 5, b = 10;

[a, b] = [b, a];

console.log("a =", a); 
console.log("b =", b); 
console.log("-------------------------")

// challenges 6

function solveQuadratic(a, b, c) {
    if (a === 0) {
        console.log("Not a quadratic equation");
        return;
    }

    let discriminant = b * b - 4 * a * c;
    let twoA = 2 * a;

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / twoA;
        let root2 = (-b - Math.sqrt(discriminant)) / twoA;
        console.log(`Two real roots: ${root1} and ${root2}`);
    } else if (discriminant === 0) {
        let root = -b / twoA;
        console.log(`One real root: ${root}`);
    } else {
        let realPart = (-b / twoA).toFixed(2);
        let imaginaryPart = (Math.sqrt(-discriminant) / twoA).toFixed(2);
        console.log(`Two complex roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`);
    }
}

solveQuadratic(1, -3, 2);  
solveQuadratic(1, 2, 1);   
solveQuadratic(1, 1, 1);   
console.log("-------------------------")

// challenges 7

function kmToMiles(km) {
    return km * 0.621371;
}

console.log(kmToMiles(10));
console.log("-------------------------")


// challenges 8

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); 
console.log("-------------------------")


// challenges 9

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(randomNumber());
console.log("-------------------------")


// challenges 10

function checkNumber(num) {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
}

console.log(checkNumber(-5)); 
console.log("-------------------------")


// challenges 11

function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(oddOrEven(7)); 
console.log("-------------------------")


// challenges 12

function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(largestOfThree(3, 9, 5)); 
console.log("-------------------------")


// challenges 13

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); 
console.log("-------------------------")


// challenges 14

function printPrimes(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) 
            console.log(i);
    }
}

printPrimes(10, 20);
console.log("-------------------------")


// challenges 15

function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5)); 
console.log("-------------------------")


// challenges 16

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable(9);
console.log("-------------------------")


// challenges 17

function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

fibonacci(10);
console.log("-------------------------")


// challenges 18

function isArmstrong(num) {
    let temp = num;
    let digits = 0;

    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }

    temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153)); 
console.log(isArmstrong(123)); 
console.log("-------------------------")


// challenges 19

function armstrongInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) console.log(i);
    }
}

armstrongInRange(100, 500);
console.log("-------------------------")


// challenges 20

function calculator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}

console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '/')); 
console.log("-------------------------")