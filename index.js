

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      const taskInput = event.target.elements["new-task-description"];
      const taskDescription = taskInput.value;
  
      if (taskDescription) {
        const newTask = document.createElement("li");
        newTask.textContent = taskDescription;
        taskList.appendChild(newTask);
        taskInput.value = ""; // Clear the input field after adding the task
      }
    });
  });