function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  console.log(list);

  //let unorderedList = document.createElement("ul");
  //unorderedList.setAttribute("id", "todo-list");
  //document.body.appendChild(unorderedList);
  // document.getElementById("todo-list");
  // console.log(unorderedList);

  for (let item of todos) {
    let itemList = document.createElement("li");
    itemList.classList.add("item-todo-list");

    itemList.innerHTML = `${item.task} - ${item.completed ? "true" : "false"}`;

    list.appendChild(itemList);

    let completedButton = document.createElement("button");
    completedButton.classList.add("completed-button");
    completedButton.innerText = "completed";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "delete";

    itemList.appendChild(completedButton);
    itemList.appendChild(deleteButton);
  }

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.querySelector('input[type = "text"]');
  console.log(input.value);
  if (input.value === "") {
    window.alert("Please provide task");
    return;
  }
  let taskTodo = input.value;

  let item = { task: taskTodo, completed: false };

  todos.push(item);
  populateTodoList([item]);
  input.value = "";
}
let addTodoButton = document.querySelector('button[type = "submit"]');
console.log(addTodoButton);
addTodoButton.addEventListener("click", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
