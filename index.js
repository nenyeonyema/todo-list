// const student = {};
// //const studentData = new Object();

// student['name'] = 'Chika';
// student.age = 34;
// student['department'] = 'Computer Engineering';
// console.log('The name of the student is ' + student.name);
// console.log(`The age of the student is ${student.age} \n the department is ${student.department}`);
// console.log(student);

//New line
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
      console.log(taskArray.length);
      taskName.value = "";
      taskDescription.value = "";
      return
    }
  
    const displayTodo = () => {
      listContainer.innerHTML = ''
      for (let index = 0; index < taskArray.length; index++) {
        const itemDiv = document.createElement("div");
        // <div> </div>
        const li = document.createElement("li");
        // <li> </li>
        itemDiv.setAttribute("class", "item");
        // <div class=item> </div>
        li.setAttribute("class", "todo-item");
        // <li class="todo-item">  </li>
        const deleteBtn = document.createElement("button");
        // <button></button>
        const editBtn = document.createElement("button");
        // <button></button>

        editBtn.className = "edit";
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "delete";
        deleteBtn.className = "delete";
        itemDiv.className = "item";

        li.textContent = taskArray[index].nameOfTask;
        // <ul> <div></div> </ul>
        listContainer.appendChild(itemDiv);
        // <ul> <div> <li> </li> </div> </ul>
        itemDiv.appendChild(li);
        // <ul> <div> <li> <button class="edit">Edit </button> </li> </div> </ul>
        itemDiv.appendChild(editBtn);
        // <ul> <div> <li> <button class="edit">Edit</button> <button class="delete">Delete</button> </li> </div> </ul>
        itemDiv.appendChild(deleteBtn);
        // <ul> <div> <li> <button class="edit">Edit</button> <button class="delete">Delete</button> </li> </div> </ul>
        
      }
    }

    const editTodos = document.getElementsByClassName('edit');
    const deleteTodos = document.getElementsByClassName('delete');
    console.log(editTodos)
    console.log(deleteTodos)
    for (let i = 0; i < editTodos.length; i++) {
      editTodos[i].addEventListener('click', function () {
        if (taskName.value === "" && taskDescription.value === "") {
          alert("List items empty")
        }
        li.textContent = taskArray[i].nameOfTask;
      });
    }

    // for (let i = 0; i < deleteTodos.length; i++) {
    //   deleteTodos[i].addEventListener('click', () => {
    //     deleteTodo[i].parentNode.remove();
    //   });
    // }

    // Example: Remove all list items with class 'delete'
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(button => {
      button.addEventListener('click', function () {
          this.parentNode.remove(); // Remove the parent node when 'delete' button is clicked
      });
  });

    button.addEventListener("click", () => {
      addTodo()
      displayTodo()
    });
});  

// Assignment
// In the do list write the edit function which will do two functionalities