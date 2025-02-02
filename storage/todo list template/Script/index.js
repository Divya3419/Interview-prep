document.getElementById("form").addEventListener("submit", submitForm);
let arr = JSON.parse(localStorage.getItem("todoList")) || [];
//let arr=[]
function submitForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let qty = document.getElementById("qty").value;
  let priority = document.getElementById("priority").value;
  let obj = { name, qty, priority };
//no duplicate value
  arr.push(obj);
  console.log(arr)
//   let newarr =[]
// for(let i=0;i<arr.length;i++){
//   console.log(arr.length)
//   if(arr[i].name==newarr[newarr.length-1].name){
//     newarr.pop()
//   }
//   else{
//     newarr.push(arr[i])
//   }
// }


// if(newarr.length===0){
//   console.log("empty")
// }
// else{
//   console.log(newarr)
// }

 localStorage.setItem("todoList", JSON.stringify(arr));
 window.location.href="todo.html"
  
}
