document.getElementById("form").addEventListener("submit", submitForm);
let arr = JSON.parse(localStorage.getItem("todoList")) || [];

function submitForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let qty = document.getElementById("qty").value;
  let priority = document.getElementById("priority").value;
  let obj = { name, qty, priority };

  arr.push(obj);
  localStorage.setItem("todoList", JSON.stringify(arr));
  
}
