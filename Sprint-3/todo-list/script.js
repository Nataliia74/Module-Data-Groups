//const { createElement } = require("react");

let dateInput = document.createElement("input");
dateInput.id = "date";
dateInput.type = "date";
dateInput.name = "deadline";

window.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector('input[type = "text"]');
  input.insertAdjacentElement("afterend", dateInput);
});

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
    if (item.completed) {
      itemList.classList.add("done");
    }

    itemList.innerText = item.task;

    let completedButton = document.createElement("button");
    completedButton.innerText = "completed";
    completedButton.addEventListener("click", () => {
      itemList.classList.toggle("done");
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
      list.removeChild(itemList);
    });

    if (item.deadline) {
      const [year, month, day] = item.deadline.split("-");
      const formattedDate = `${day} - ${month} - ${year}`;
      let deadlineSpan = document.createElement("span");
      deadlineSpan.innerText = `    ${formattedDate}`;
      itemList.appendChild(deadlineSpan);
    }

    itemList.appendChild(completedButton);
    itemList.appendChild(deleteButton);
    list.appendChild(itemList);
  }
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.querySelector('input[type = "text"]');

  if (input.value === "") {
    window.alert("Please provide task");
    return;
  }
  let taskTodo = input.value;
  let dateTodo = dateInput.value;

  let item = { task: taskTodo, completed: false, deadline: dateTodo || null };

  todos.push(item);
  populateTodoList([item]);
  input.value = "";
  dateInput.value = "";
}
let addTodoButton = document.querySelector('button[type = "submit"]');
console.log(addTodoButton);
addTodoButton.addEventListener("click", addNewTodo);

let removeTodoButton = document.querySelector("#remove-all-completed");
console.log(removeTodoButton);
let list = document.getElementById("todo-list");
console.log(list);
let itemList = document.getElementsByClassName("item-todo-list");
console.log(itemList);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const itemsArray = Array.from(itemList);
  itemsArray.forEach((item) => {
    if (item.classList.contains("done")) {
      list.removeChild(item);
    }
  });
}

removeTodoButton.addEventListener("click", deleteAllCompletedTodos);
// Write your code here..

// ### Set deadlines for ToDos

// We want users to be able to set, and see, deadlines for their ToDos.

// When creating ToDos we want the user to be able to use a datepicker
// input so they can see when they need to complete the ToDo. The date
// can be added to the ToDo in the list. If there is no date set when the
// ToDo is created then this can be skipped.
