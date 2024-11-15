// Given an array of numbers print the square of those numbers



let arr=[1,2,3,4,5]

let res=arr.map((element)=>{
    return (element**2)
})
console.log(res)



arr.forEach((element)=>{
    console.log(element**2)
})


// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

let arr2=[1,2,3,4,5]

let res2=arr2.map((element)=>{
    return element+element
})
console.log(res2)

// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]

const arr3 = [1 , 2, 4, 9, 12, 13, 20];
const oddNumbers = arr.filter((num) => num%2 === 1);
console.log(oddNumbers);

