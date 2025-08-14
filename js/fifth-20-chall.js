// challenges 81

function arrayIntersection(arr1, arr2) {
    let result = [];
    for (let item of arr1) {
        if (arr2.includes(item) && !result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(arrayIntersection([1, 3, 4, 3, 2, 3], [2, 3, 4]));
console.log("-------------------------")


// challenges 82

function chunkArray(arr, size) {
    let result = [];
    let chunk = [];

    for (let i = 0; i < arr.length; i++) {
        chunk.push(arr[i]);

        if (chunk.length === size || i === arr.length - 1) {
            result.push(chunk);
            chunk = [];
        }
    }

    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log("-------------------------")


// challenges 83

 import { myFunction } from './myFile.js';
 myFunction();
 console.log("-------------------------")


// challenges 84

function getFileExtension(filename) {
    return filename.split('.').pop();
}

console.log(getFileExtension("photo.png")); 
console.log(getFileExtension("App.js")); 
console.log("-------------------------")


// challenges 85

function isUndefinedOrNull(value) {
    return value === null || value === undefined;
}

console.log(isUndefinedOrNull(null)); 
console.log(isUndefinedOrNull(undefined)); 
console.log(isUndefinedOrNull(5)); 
console.log("-------------------------")


// challenges 86

function greet(name = "Mohammad") {
    return `Hello, ${name}!`;
}

console.log(greet());    
console.log(greet("Ali")); 
console.log("-------------------------")


// challenges 87

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log("Union:", union); 

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection); 

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A - B):", difference); 
console.log("-------------------------")


// challenges 88

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(5, 15));
console.log("-------------------------")


// challenges 89

console.log(window.location.href); 
console.log("-------------------------")


// challenges 90

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Examples
console.log(isValidEmail("test@example.com")); 
console.log(isValidEmail("invalid-email"));
console.log("-------------------------")


// challenges 91

function isFunction(variable) {
    return typeof variable === "function";
}

console.log(isFunction(function(name) {return name})); 
console.log(isFunction(123)); 
console.log("-------------------------")


// challenges 92

const PI = 3.14159;
const GRAVITY = 9.8;

console.log("PI:", PI);
console.log("Gravity:", GRAVITY);

// PI = 3; // This will throw an error
console.log("-------------------------")


// challenges 93

function greets(name) {
    console.log("-------------------------")
    console.log(`Hello, ${name}!`);
}

setTimeout(() => greets("Mohammad"), 1000);


// challenges 94

function numberRange(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
}

function charRange(startChar, endChar) {
    let arr = [];
    for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt(0); i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}

console.log(numberRange(5, 10)); 
console.log(charRange('a', 'f')); 
console.log("-------------------------")


// challenges 95

function sum(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return args[0];

    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sum());         
console.log(sum(5));        
console.log(sum(2, 3, 4));  
console.log("-------------------------")


// challenges 96

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());  
console.log(stack.pop());  
console.log("-------------------------")


// challenges 97

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek());   
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log("-------------------------")


// challenges 98

function checkNumberType(num) {
    if (Number.isInteger(num)) return "Integer";
    return "Float";
}

console.log(checkNumberType(5));    
console.log(checkNumberType(5.3));   
console.log("-------------------------")


// challenges 99

function Greet(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
    console.log("-------------------------")
}

Greet(() => console.log("Hello from callback!"));


// challenges 100

const img = document.querySelector('img');
console.log("Width:", img.width);
console.log("Height:", img.height);