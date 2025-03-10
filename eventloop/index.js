

setTimeout(()=>{
    console.log("1")
})

console.log("2")

Promise.resolve().then(()=>{
    console.log("3")
})


