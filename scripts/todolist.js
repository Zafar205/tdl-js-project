
document.addEventListener('DOMContentLoaded', function() {
    let tasks = JSON.parse(localStorage.getItem('permanenttask')) || [];

    updateTasksDisplay();

    function addTask() {
        const textToAdd = document.querySelector(".js-input").value;
        const dateToAdd = document.querySelector(".js-date").value;

        tasks.push({ text: textToAdd, date: dateToAdd });

        updateTasksDisplay();
    }

    function updateTasksDisplay() {
        let tasksToDisplay = '';
        for (let i = 0; i < tasks.length; i++) {
            tasksToDisplay += `
                <div class="task">
                    <div>${tasks[i].text}</div>
                    <div>${tasks[i].date}</div>
                    <div><button onclick="deleteTask(${i})">Delete</button></div>
                </div><br>`;
        }
        document.querySelector('.js-tasks').innerHTML = tasksToDisplay;

        localStorage.setItem('permanenttask', JSON.stringify(tasks));
    }

    window.deleteTask = function(index) {
        tasks.splice(index, 1);
        updateTasksDisplay();
    }

    document.querySelector('.js-add').addEventListener('click', addTask);
});
