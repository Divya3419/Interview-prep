const debounce=(fn,delay)=>{
    let timerId;
    return function(...args){
        clearTimeout(timerId);//cancle the last call
        timerId=setTimeout(()=>{
            fn(...args)

        },delay)
}

}

const search=(query)=>{
    console.log(`Result`, query)
}


const debouncedSearch=debounce(search,500);

debouncedSearch("H");
debouncedSearch("Ha")
debouncedSearch("Har")
debouncedSearch("Hard")
debouncedSearch("Hard js question")