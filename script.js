document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.addEventListener('click', function() {
        taskContent.classList.toggle('checked');
        taskItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}
