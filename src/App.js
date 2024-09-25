import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
  const no_tasks_el = document.querySelector("#no-tasks");


  function updateNoTasksMessage() {
      if (list_el.children.length === 0) {
          no_tasks_el.style.display = "block";
      } else {
          no_tasks_el.style.display = "none";
      }
  }


  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = input.value;
      if (!task) {
          alert("Please fill out the task");
          return;
      }


      const task_el = document.createElement("div");
      task_el.classList.add("task");


      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
      task_el.appendChild(task_content_el);


      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");
      task_content_el.appendChild(task_input_el);


      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');


      const task_complete_el = document.createElement("button");
      task_complete_el.classList.add("complete");
      task_complete_el.innerHTML = "Complete";


      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML = "Edit";


      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML = "DELETE";


      task_actions_el.appendChild(task_complete_el);
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);
      task_el.appendChild(task_actions_el);


      list_el.appendChild(task_el);
      input.value = "";
      updateNoTasksMessage();


      task_complete_el.addEventListener('click', () => {
          task_input_el.classList.toggle("completed");
          if (task_input_el.classList.contains("completed")) {
              task_input_el.setAttribute("readonly", "readonly");
              task_input_el.style.textDecoration = "line-through";
              task_complete_el.disabled = true;
              task_edit_el.disabled = true;
              task_delete_el.disabled = true;
          }
      });


      task_edit_el.addEventListener('click', () => {
          if (task_edit_el.innerText.toLowerCase() === "edit") {
              task_input_el.removeAttribute("readonly");
              task_input_el.focus();
              task_edit_el.innerText = "Save";
              task_complete_el.disabled = true;
              task_delete_el.disabled = true;
          } else {
              task_input_el.setAttribute("readonly", "readonly");
              task_edit_el.innerText = "Edit";
              task_complete_el.disabled = false;
              task_delete_el.disabled = false;
          }
      });


      task_delete_el.addEventListener('click', () => {
          list_el.removeChild(task_el);
          updateNoTasksMessage();
      });
  });


  updateNoTasksMessage();
});



export default App;
