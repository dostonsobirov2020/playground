let name = "Doston";
let surname = "Sobirov";


function ufFirst(str) {
    if (!str) return str;

    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ufFirst('hello'));


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1) + '...';
    }

    return str;
}

console.log(truncate('Hello, how you guys doing? Could you guys please subscribe to my channel', 15));
console.log(truncate('Hello, how are you?', 40));


function extractCurrencyValue(value) {
    return Number(value.slice(1));
}

console.log(extractCurrencyValue('$120') === 120);



// Sum numbers from the visitor

// let firstNumber = prompt('Enter first number');
// let secondNumber = prompt('Enter second number');
// alert(+firstNumber + +secondNumber);

// Why 6.35.toFixed(1) == 6.3;

// console.log(1.35.toFixed(1));
// console.log(Math.round(6.35*10)/10);

function myFunction() {
    var a = 1;
    if (a == 1) {
        var b = 2;
    }

    return b;  // returns 2, would give an error if let was used instead of var;
}

var d = myFunction();

console.log(d);