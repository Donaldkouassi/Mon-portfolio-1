document.addEventListener('DOMContentLoaded', function() {

    const taskForm = document.getElementById('new-task-form');
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        
        event.preventDefault(); 
        
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Veuillez entrer une tâche !');
            return;
        }
        
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        const taskTextElement = document.createElement('span');
        taskTextElement.innerText = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Supprimer';
        deleteButton.classList.add('delete-btn');
        
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);
        
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
    });
    
    taskList.addEventListener('click', function(event) {
        
        if (event.target.classList.contains('delete-btn')) {
            
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        
        } else if (event.target.tagName === 'SPAN') {
            
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle('completed');
        }
    });

});