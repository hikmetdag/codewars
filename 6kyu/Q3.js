// Starting with the number "1", "1" is positioned at the top of the triangle. As this is the 1st row, it can only support a single number.
// The 2nd row can support the next 2 numbers: "2" and "3"
// Likewise, the 3rd row, can only support the next 3 numbers: "4", "5", "6"
// And so on; this pattern continues.
//     1
//    2 3
//   4 5 6
//  7 8 9 10
// ...
// Given N, return the sum of all numbers on the Nth Row:

// 1 <= N <= 10,000

function sumOfNthRow(N) {
    if (N < 1 || N > 10000) {
      return "N is out of valid range (1 <= N <= 10,000)";
    }
  
    // Calculate the starting number of the Nth row
    let startNumber = ((N - 1) * N) / 2 + 1;
  
    // Calculate the sum of the Nth row
    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += startNumber + i;
    }
  
    return sum;
  }

  //sumOfNthRow(2000)
  console.log(sumOfNthRow(2000));