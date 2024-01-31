// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only

function order(words) {
    if (!words.trim()) return ''; // Return empty string if input is empty or contains only whitespace

    return words
        .split(' ')
        .sort((a, b) => a.match(/\d/) - b.match(/\d/)) // Sort based on the number in each word
        .join(' ');
}

// Test cases
console.log(order("is2 Thi1s T4est 3a")); // Output: "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // Output: ""
