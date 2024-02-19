/**
 * @param {number} n
 * @return {number[]}
 */



var countBits = function(n) {
    let output = []
    for(let i=0;i<=n;i++){
        console.log("first",i)
        let decimal = i;
        let binary = decimal.toString(2);
        console.log(binary)
        let strArr = binary.split("");
        let sum = strArr.reduce(function(total, num){
        return parseFloat(total) + parseFloat(num);
    });
    console.log("sum:::",sum)
    output.push(sum)

    }
    console.log("output::::::", output)
    return output
   
};


let n = 11
countBits(n);







// Code
// Testcase
// Test Result
// Test Result
// 338. Counting Bits
// Easy
// Topics
// Companies
// Hint
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105
