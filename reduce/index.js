//let arr=[1,2,3,4,5]

function findSum(arr){
    let  sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
        
    }
    return sum
}
//console.log(findSum(arr))







let arr=[1,2,3,4,5]
let output=arr.reduce((acc,element)=>{
acc=acc+element
return acc
},0)

console.log(output)