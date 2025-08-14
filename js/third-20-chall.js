// challenges 41

let person = { name: "Alice", age: 25, city: "London" };
delete person.city;

console.log(person); 
console.log("-------------------------")


// challenges 42

function startsAndEndsWith(str, start, end) {
    for (let i = 0; i < start.length; i++) {
        if (str[i] !== start[i]) return false;
    }

    for (let i = 0; i < end.length; i++) {
        if (str[str.length - end.length + i] !== end[i]) return false;
    }

    return true;
}

console.log(startsAndEndsWith("javascript", "java", "ipt")); 
console.log("-------------------------")


// challenges 43

function keyExists(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(keyExists({ name: "Alice", age: 25 }, "age")); 
console.log(keyExists({ name: "Alice", age: 25 }, "city"));
console.log("-------------------------")


// challenges 44

let original = { name: "Alice", age: 25 };

let clone1 = { ...original };

let clone2 = Object.assign({}, original);

let clone3 = JSON.parse(JSON.stringify(original));

console.log(clone1, clone2, clone3);
console.log("-------------------------")


// challenges 45

let persons = { name: "Alice", age: 25, city: "London" };

for (let key in persons) {
    console.log(key + ": " + persons[key]);
}
console.log("-------------------------")


// challenges 46

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
console.log("-------------------------")


// challenges 47

function countKeys(obj) {
    return Object.keys(obj).length;
}

console.log(countKeys({ a: 1, b: 2, c: 3,d:5,t:7 })); 
console.log("-------------------------")


// challenges 48

function addKeyValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

console.log(addKeyValue({ a: 1 }, "b", 2)); 
console.log("-------------------------")


// challenges 49

function replaceAllOccurrences(str, search, replacement) {
    return str.split(search).join(replacement);
}

console.log(replaceAllOccurrences("I like cats. Cats are cats.", "cats", "dogs"));
console.log("-------------------------")


// challenges 50

let multiline = `This is line one.
This is line two.
This is line three.`;

console.log(multiline);
console.log("-------------------------")


// challenges 51

function formatCurrencyAlt(amount, currency = "USD") {
    let symbol;
    switch (currency) {
        case "USD": symbol = "$"; break;
        case "EUR": symbol = "€"; break;
        default: symbol = currency + " "; 
    }

    let formatted = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return symbol + formatted;
}

console.log(formatCurrencyAlt(1234.56, "USD")); 
console.log(formatCurrencyAlt(1234.56, "EUR")); 
console.log("-------------------------")


// challenges 52

function randomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

console.log(randomString(10));
console.log("-------------------------")


// challenges 53

function startsWith(str, prefix) {
 for (let i = 0; i < prefix.length; i++) {
        if (str[i] !== prefix[i]) return false;
    }
return true;
}
console.log(startsWith("JavaScript", "Java")); 
console.log(startsWith("JavaScript", "Jaeva")); 
console.log("-------------------------")


// challenges 54

function trimString(str) {
    return str.trim();
}

console.log(trimString("   hello world   "));
console.log("-------------------------")


// challenges 55

function objectToString(obj) {
    return JSON.stringify(obj);
}

console.log(objectToString({ name: "Alice", age: 25 }));
console.log("-------------------------")


// challenges 56

function containsSubstring(str, substring) {
    return str.includes(substring);
}

console.log(containsSubstring("I love JavaScript", "love")); 
console.log(containsSubstring("I love JavaScript", "momo"));
console.log("-------------------------")


// challenges 57 

function compareStrings(str1, str2) {
    return str1 === str2;
}

console.log(compareStrings("hello", "hello")); 
console.log(compareStrings("hello", "world")); 
console.log("-------------------------")


// challenges 58

function encodeBase64(str) {
    return btoa(str);
}

console.log(encodeBase64("hello"));
console.log("-------------------------")


// challenges 59

function replaceCharAll(str, oldChar, newChar) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] === oldChar ? newChar : str[i];
    }
    return result;
}

console.log(replaceCharAll("banana", "a", "o")); 
console.log("-------------------------")


// challenges 60

function replaceLineBreaks(str) {
    return str.replace(/\n/g, "<br>");
}

console.log(replaceLineBreaks("Line one\nLine two\nLine three"));
