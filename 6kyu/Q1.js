// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9,15 The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5  of 1000.

let sum = 0;
for (let i = 1; i < 18; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }

}
console.log(sum);