// Given an array of numbers print the square of those numbers

let arr = [1, 2, 3, 4, 5];

// using map

let res = arr.map((element) => {
  return element ** 2;
});
console.log(res);

// use forEach

arr.forEach((element) => {
  console.log(element ** 2);
});




// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

let arr2 = [1, 2, 3, 4, 5];

let res2 = arr2.map((element) => {
  return element + element;
});
console.log(res2);

// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]

const arr3 = [1, 2, 3, 4, 5];
let res3 = arr3.filter((element) => element % 2 === 1);
console.log(res3);

// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

let arr4 = [2, 3, 4];
let res4 = arr4.reduce((acc, element) => {
  acc = acc * element;
  return acc;
}, 1);

console.log(res4);

//Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let arr5 = [1, 2, 3, 4, 5, 6, 7];
let res5 = arr5.reduce((acc, element) => {
  if (element % 2 === 1) {
    acc = acc + element;
  }
  return acc;
}, 0);
console.log(res5);

//Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

let arr6 = [3, 6];

let res6 = arr6.reduce((acc, element) => {
  if (element % 3 === 0) {
    acc = acc + element ** 3;
  }
  return acc;
}, 0);

console.log(res6);

//Given an array of strings print the length of each string

let fruit = ["apple", "windows", "ubuntu"];
for (let i = 0; i < fruit.length; i++) {
  let sum = 0;
  sum += fruit[i].length;
  console.log(sum);
}

let str = fruit.map((element) => {
  acc = 0;
  acc += element.length;
  return acc;
});
console.log(str);

// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

let input = ["Masai", "School"];

let input1 = input.map((element) => {
  return element[0];
});
console.log(input1);

// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let assign = ["assigment", "problem", "media", "upload"];

let value = assign.filter((element) => {
  if (element[0] === "a" || element[element.length - 1] === "a") {
    return element;
  }
});
console.log(value);

// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8

let pro = ["A", "Good", "Problem"];
let prod = pro.reduce((acc, element) => {
  if (element.length % 2 === 1) {
    acc += element.length;
  }
  return acc;
}, 0);
console.log(prod);

// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]

let n = [2, 4, 5, 3, 6, 8];

let no = n.filter((element, index) => {
  if (index % 2 === 0) {
    return element;
  }
});
console.log(no);
