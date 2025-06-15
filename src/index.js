document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("new-task-description");
    const task = input.value;

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);
    form.reset();
  });
});