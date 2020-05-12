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