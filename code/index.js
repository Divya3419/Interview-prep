// let a=NaN
// let b=NaN
// console.log(a!=b)
// console.log(a!==b)




// let a="20";

// console.log(a+1)
// console.log(++a)
// console.log(a++)





// let n = 1
// let sum = ++n + n++
// console.log(sum)






// console.log("2"+1)
// console.log("2"-1)

// console.log(4 + +"4")
// console.log(8 + "8")


// let obj={a:"JavaScript"}
// let {a,a:b}=obj
// console.log(a,b)



// function showResult(marks){
//     let result=marks ?? "Absent"
//     console.log(result)
// }

// showResult(23)
// showResult(0)
// showResult(56)
// showResult()


// let arr=[1,2,3,4,5]
// arr.pop()
// console.log(arr)

// let arr=[1,2,3,4,5]
// arr.shift()
// console.log(arr)


//console.log(typeof([]))

// immedately invoke funtion expresion

// (function (){
//     console.log("hii")
// })()


// let obj={
//     name:"rahul",
//     no:"5555656555",
//     occu:"software developer"
// }
// delete obj.no
// //console.log(obj)





// console.log(2*3+true-3)
// console.log(2*3+false-3)



let n1=[1,2,3]
let n2=[4,5,6]
console.log(...n1,...n2)


function value(...n){
    return n
}

console.log(value(n1,n2))

// let arr=[1,2,3]
// console.log(arr[2])
// console.log(arr["2"])
// console.log(arr["02"])


const person = {
    firstName: "John",
    age: 50
  };
  
  // Freeze Object
  Object.freeze(person)
  
  // This will throw an error
  person.age = 51

  console.log(person)