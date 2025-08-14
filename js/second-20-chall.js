// challenges 21

function sumOfNatural(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumOfNatural(10)); 
console.log("-------------------------")

// challenges 22

function sameLastDigit(a, b) {
    return a % 10 === b % 10;
}

console.log(sameLastDigit(27, 57)); 
console.log("-------------------------")

// challenges 23

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

console.log(gcd(48, 18)); 
console.log("-------------------------")

// challenges 24

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6)); 
console.log("-------------------------")


// challenges 26

function factors(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) result.push(i);
    }
    return result;
}

console.log(factors(14));
console.log("-------------------------")


// challenges 27

// function guessNumber() {
//     const target = Math.floor(Math.random() * 100) + 1;
//     let guess;
//     while (guess !== target) {
//         guess = Number(prompt("Guess a number between 1 and 100:"));
//         if (guess > target) {
//             alert("Too high!");
//         } else if (guess < target) {
//             alert("Too low!");
//         } else {
//             alert("Correct!");
//         }
//     }
// }

// guessNumber();
// console.log("-------------------------")


// challenges 28

function shuffleDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push(`${value}${suit}`);
        }
    }

    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

console.log(shuffleDeck());
console.log("-------------------------")


// challenges 29

function fibonacciRec(n) {
    if (n <= 1) return n;
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacciRec(i));
}
console.log("-------------------------")


// challenges 30

function factorialUsingRec(n) {
    if (n <= 1) return 1;
    return n * factorialUsingRec(n - 1);
}

console.log(factorialUsingRec(5)); 
console.log("-------------------------")


// challenges 31

function decimalToBinary(num) {
    return num.toString(2);
}

console.log(decimalToBinary(30)); 
console.log("-------------------------")


// challenges 32

function ASCIIValue(char) {
    return char.charCodeAt(0);
}

console.log(ASCIIValue('A')); 
console.log("-------------------------")


// challenges 33

function isPalindromeAlt(str) {
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeAlt("Racecar")); 
console.log("-------------------------")


// challenges 34

function sortWords(sentence) {
    return sentence.split(' ').sort().join(' ');
}

console.log(sortWords("banana apple cherry")); 
console.log("-------------------------")

// challenges 35

function replaceCharAlt(str, oldChar, newChar) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] === oldChar ? newChar : str[i];
    }
    return result;
}

console.log(replaceCharAlt("banana", "a", "o")); 
console.log("-------------------------")


// challenges 36

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); 
console.log("-------------------------")


// challenges 37

let obj1 = { name: "Alice", age: 25 };

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let obj2 = new Person("Bob", 30);

let proto = { greet() { console.log("Hello!"); } };
let obj3 = Object.create(proto);
obj3.name = "Charlie";

console.log(obj1, obj2, obj3);
console.log("-------------------------")


// challenges 38

function countCharAlt(str, char) {
    let count = 0;
    for (let i=0;i<str.length;i++) {
        if (str[i] === char) count++;
    }
    return count;
}

console.log(countCharAlt("banana", "a")); 
console.log("-------------------------")


// challenges 39

function capitalizeFirstLetter(str) {
    if (!str) return "";
    let arrry=""
    for(let i=0;i<str.length;i++){
        if(i==0){
          let char=str[i].toUpperCase()
          arrry+=char
        }
       else
        arrry+=str[i]
    }
  return arrry
}

console.log(capitalizeFirstLetter("hello")); 
console.log("-------------------------")


// challenges 40

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i=0;i<str.length;i++) 
        if (vowels.includes(str[i])) 
            count++;
    
    return count;
}

console.log(countVowels("Mohammad Ali")); 
