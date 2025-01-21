let CompleteTodo=JSON.parse(localStorage.getItem("completeTodo")) || []
CompleteTodo.map((ele) => {
  let row = document.createElement("tr");
  let col1 = document.createElement("th");
  col1.innerHTML = ele.name;
  let col2 = document.createElement("th");
  col2.innerHTML = ele.qty;
  let col3 = document.createElement("th");
  col3.innerHTML = ele.priority;
  row.append(col1, col2, col3);
  document.getElementById("body").append(row);
});
