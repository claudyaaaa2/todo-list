const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');
const filterInput = document.getElementById('filter');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  const date = dateInput.value;
  if (!task || !date) return;

  const li = document.createElement('li');
  li.innerHTML = `<span>${task} - ${date}</span><button class="delete">Hapus</button>`;
  todoList.appendChild(li);

  taskInput.value = '';
  dateInput.value = '';
});

todoList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

filterInput.addEventListener('keyup', function(e) {
  const keyword = e.target.value.toLowerCase();
  document.querySelectorAll('#todo-list li').forEach(function(item) {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(keyword) ? '' : 'none';
  });
});
