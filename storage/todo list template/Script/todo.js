let formDetail=JSON.parse(localStorage.getItem("todoList")) || []

formDetail.map((ele)=>{
    let div=document.createElement("tr")
    div=ele.name

    document.getElementById("body").append(div)
})