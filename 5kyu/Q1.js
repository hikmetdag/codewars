// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

function greatestProduct(input) {
    const products = [];
    const x = input.split('');
    x.forEach((elm, i) => {
        if (x.length > 5) { products.push(x.slice(i, i + 5)); } else {
            return console.log('write at least 6 digit number');
        }
    });
    const y=products.map(elm=>elm.reduce((a,b)=>a*b,1))
    const largest = Math.max.apply(0, y);
    return largest
}
const result = greatestProduct("123834539327238239583");
console.log(result);