// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
const x = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
const y = {};
x.forEach(item => {
    if (y[item]) {
        y[item] += 1;
    } else { y[item] = 1; }
});
let countOfOddOccurrences = x;
for (const k in y) {
    if (y[k] % 2 !== 0) {
        countOfOddOccurrences = k;
    }
}
console.log(countOfOddOccurrences);