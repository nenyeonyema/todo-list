// const student = {};
// //const studentData = new Object();

// student['name'] = 'Chika';
// student.age = 34;
// student['department'] = 'Computer Engineering';
// console.log('The name of the student is ' + student.name);
// console.log(`The age of the student is ${student.age} \n the department is ${student.department}`);
// console.log(student);

//New line
// Assignment
// In the do list write the edit function which will do two functionalities


window.addEventListener("DOMContentLoaded", (event) => {
  const taskName = document.getElementById("task-name");
  const taskDescription = document.getElementById("task-description");
  const button = document.getElementById("add-todo");
  const listContainer = document.getElementById("lists");

  const taskArray = [
    { nameOfTask: "fetch water", taskDescription: "Fetch it from the well" },
    { nameOfTask: "cook food", taskDescription: "try cook rice" },
    { nameOfTask: "cook meat", taskDescription: "make it spicy" },
  ];

  const addTodo = () => {
    if (taskName.value === "" || taskDescription.value === "") {
      alert("Please fill this form!");
      return;
    }
    const newTask = {
      nameOfTask: taskName.value,
      taskDescription: taskDescription.value,
    };

    taskArray.push(newTask);
    taskName.value = "";
    taskDescription.value = "";
    displayTodo();
  };

  const displayTodo = () => {
    listContainer.innerHTML = '';
    taskArray.forEach((task, index) => {
      const itemDiv = document.createElement("div");
      // <div> </div>
      const li = document.createElement("li");
      // <li> </li>
      const deleteBtn = document.createElement("button");
      // <button></button>
      const editBtn = document.createElement("button");
      // <button></button>

      editBtn.className = "edit";
      // <button class=edit> </button>
      editBtn.textContent = "Edit";
      // <button class=edit>Edit</button>
      deleteBtn.textContent = "Delete";
      // <button class=delete>Delete</button>
      deleteBtn.className = "delete";
      // <button class=delete> </button>
      itemDiv.className = "item";
      // <div class=item> </div>

      li.textContent = task.nameOfTask;
      
      listContainer.appendChild(itemDiv);
      // <ul> <div></div> </ul>
      itemDiv.appendChild(li);
      // <ul> <div> <li> </li> </div> </ul>
      itemDiv.appendChild(editBtn);
      // <ul> <div> <li> <button class="edit">Edit </button> </li> </div> </ul>
      // <ul> <div> <li> <button class="edit">Edit</button> <button class="delete">Delete</button> </li> </div> </ul>
      itemDiv.appendChild(deleteBtn);
      //<ul> <div> <li> <button class="edit">Edit</button> <button class="delete">Delete</button> </li> </div> </ul>

      // Event listener for the edit button
      editBtn.addEventListener('click', function () {
        // edit the array the task from the taskArray
        // taskArray.splice(index, 1);

        // Add the edited task to the taskArray
        // click the edit button to show the new update
        editedTask = {
        nameOfTask: taskName.value,
        taskDescription: taskDescription.value,
        }
        taskArray[index] = editedTask;
        li.textContent = editedTask.nameOfTask;

        // Update the display after editing the task
        displayTodo();
      });

      // Event listener for the delete button
      deleteBtn.addEventListener('click', function () {
        // Remove the task from the taskArray
        taskArray.splice(index, 1);
        // Update the display after deleting the task
        displayTodo();
      });
    });
  };

  button.addEventListener("click", () => {
    addTodo();
  });

  // Initial display of todos
  displayTodo();
});
