
// const p1={
// name:"ram",
// occu:"singar"
// }

// const p2={
//     name:"rajesh",
//     occu:"dancer"
// }

// function findPerson(city){
//     console.log(this.occu,`${city}`)
// }


//   let result= findPerson.bind(p1,["delhi"])
//   result()


let age=20
let person ={
    name:"RFaaaj",
    age:30,
    getResult:function(){
        console.log(this.name)
    }
}
let person2={
    age:56,
    name:"Gajak"
}
person.getResult.call(person2)