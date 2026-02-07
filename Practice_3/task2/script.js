'use strict';

// Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add new task
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskText = todoInput.value.trim();
  
  if (taskText !== '') {
    addTask(taskText);
    todoInput.value = '';
    todoInput.focus();
  }
});

// Function to add task
function addTask(text) {
  // Create list item
  const li = document.createElement('li');
  li.className = 'todo-item';
  
  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-checkbox';
  
  // Create text span
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;
  
  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-delete';
  deleteBtn.textContent = 'Delete';
  
  // Add event listener to checkbox
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });
  
  // Add event listener to delete button
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });
  
  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  
  // Add to list
  todoList.appendChild(li);
}
