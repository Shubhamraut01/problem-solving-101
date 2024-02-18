// let decimal = 2;
// let binary = decimal.toString(2);
// console.log(binary); 

let decimal = 11;
let binary = "";
console.log("decimal", decimal)
while (decimal > 0) {
    let rem = decimal % 2;
    decimal = Math.floor(decimal / 2);
    binary = rem + binary;

}

console.log("binary", binary)