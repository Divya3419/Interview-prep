let myPromise= new Promise(function(Resolve,Reject){
    let state=true
    if(state){
        Resolve("go")
    }
    else{
        Reject("not go")
    }
})

myPromise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
