// challenges 61

function displayDateTime() {
    console.log(new Date().toString());
}

displayDateTime();
console.log("-------------------------")


// challenges 62

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023)); 
console.log("-------------------------")


// challenges 63

function formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
}

console.log(formatDate(new Date())); 
console.log("-------------------------")


// challenges 64

function displayCurrentDate() {
    let today = new Date();
    console.log(today.toDateString());
}

displayCurrentDate();
console.log("-------------------------")


// challenges 65

function compareDates(date1, date2) {
    if (date1.getTime() === date2.getTime()) return "Dates are equal";
    return date1 > date2 ? "First date is after second" : "First date is before second";
}

console.log(compareDates(new Date("2025-01-01"), new Date("2024-12-31")));
console.log("-------------------------")


// challenges 66

function countdownAlt(seconds) {
    function tick() {
        console.log(seconds);
        seconds--;
        if (seconds >= 0) {
            setTimeout(tick, 1000);
        } else {
            console.log("Time's up!");
            console.log("-------------------------")
        }
    }
    tick();
}

countdownAlt(5);


// challenges 67

function removeItem(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeItem([1, 2, 3, 4, 2], 2)); 
console.log("-------------------------")


// challenges 68

function containsValue(arr, value) {
    return arr.includes(value);
}

console.log(containsValue([1, 2, 3], 2)); 
console.log(containsValue([1, 2, 3], 5)); 
console.log("-------------------------")


// challenges 69

function insertItem(arr, index, item) {

    if (index >= arr.length) {
        arr.push(item);
        return arr;
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            result.push(item); 
        }
        result.push(arr[i]); 
    }
    return result;
}

console.log(insertItem([1, 2, 4, 5], 4, 3));
console.log(insertItem([1, 2, 4, 5], 2, 3)); 
console.log("-------------------------")


// challenges 70

function appendObject(arr, obj) {
    arr.push(obj);
    return arr;
}

console.log(appendObject([{a:1}], {b:2})); 
console.log("-------------------------")


// challenges 71

function isArray(obj) {
    return Array.isArray(obj);
}

console.log(isArray([1, 2, 3])); 
console.log(isArray({}));    
console.log("-------------------------")


// challenges 72

function emptyArray(arr) {
    arr.length = 0;
}


let numbers = [1, 2, 3];
emptyArray(numbers);
console.log(numbers); 
console.log("-------------------------")


// challenges 73

function addToStart(arr, element) {
    arr.unshift(element);
    return arr;
}

console.log(addToStart([2, 3, 4], 1)); 
console.log("-------------------------")


// challenges 74

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2,5,6,3,7, 3, 4, 4])); 
console.log("-------------------------")


// challenges 75

function mergeAndRemoveDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(mergeAndRemoveDuplicates([1, 2, 3], [3, 4, 5]));
console.log("-------------------------")


// challenges 76

function sortByProperty(arr, prop) {
    return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
}

// Example
let people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 20},
    {name: "Charlie", age: 30}
];
console.log(sortByProperty(people, "age"));
console.log("-------------------------")


// challenges 77

function createMatrix(rows, cols, value = 0) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

console.log(createMatrix(3, 3, 1));
console.log("-------------------------")


// challenges 78

function extractProperty(arr, prop) {
    return arr.map(obj => obj[prop]);
}

let peoples = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];
console.log(extractProperty(peoples, "name")); 
console.log("-------------------------")


// challenges 79

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) 
        return false;
  
  return arr1.every((value, index) => value === arr2[index]);
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); 
console.log(arraysEqual([1, 2, 3], [3, 2, 1])); 
console.log("-------------------------")


// challenges 80

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomItem([10, 20, 30, 40]));
