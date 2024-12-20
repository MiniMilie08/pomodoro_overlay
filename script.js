// Sélection des éléments du DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const resetButton = document.getElementById('resetButton');

// Fonction pour ajouter une nouvelle tâche
function addTask(taskText) {
    if (taskText.trim() === "") return;

    // Créer un nouvel élément de tâche
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    
    // Créer une case à cocher pour la tâche
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    
    // Créer un élément pour le texte de la tâche
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);

    // Ajouter un événement pour marquer la tâche comme terminée
    checkbox.onclick = () => {
        taskItem.classList.toggle('done');
    };

    // Ajouter la nouvelle tâche à la liste
    taskList.appendChild(taskItem);

    // Réinitialiser l'input
    taskInput.value = '';
}

// Événement pour ajouter la tâche en appuyant sur "Enter"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(taskInput.value);
    }
});

// Fonction pour réinitialiser toutes les tâches
resetButton.addEventListener('click', function() {
    taskList.innerHTML = ''; // Vide la liste des tâches
});
