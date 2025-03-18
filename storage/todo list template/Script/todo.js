let formDetail = JSON.parse(localStorage.getItem("todoList")) || [];

let CompleteTodo=JSON.parse(localStorage.getItem("completeTodo")) || [];
formDetail.map((ele) => {
  let row = document.createElement("tr");
  let col1 = document.createElement("th");
  col1.innerHTML = ele.name;
  let col2 = document.createElement("th");
  col2.innerHTML = ele.qty;
  let col3 = document.createElement("th");
  col3.innerHTML = ele.priority;
  let col4 = document.createElement("th");
  let btn = document.createElement("button");
  btn.innerHTML = "Mark Complete";
  btn.setAttribute("class","btn")
  btn.addEventListener("click",function(){
    marklComplete(ele)

    // not duplicate value
})
  col4.append(btn);
  row.append(col1, col2, col3, col4);
  document.getElementById("body").append(row);
});

function marklComplete(ele){
    CompleteTodo.push(ele)
    console.log(CompleteTodo)
    localStorage.setItem("completeTodo",JSON.stringify(CompleteTodo))

}