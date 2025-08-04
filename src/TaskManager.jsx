import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskManager() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addRandomTask = () => {
    const possibleTasks = [
      "Сделать домашнее задание",
      "Прочитать книгу",
      "Сходить в спортзал",
    ];
    const randomIndex = Math.floor(Math.random() * possibleTasks.length);
    const newTask = possibleTasks[randomIndex];
    setTasks([...tasks, newTask]);
  };

  const deleteLastTask = () => {
    const newTasks = [...tasks];
    newTasks.pop();
    setTasks(newTasks);
  };
  return (
    <div className="user-profile">
      <h2>Список задач</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
      <div className="controls">
        <button onClick={addRandomTask}>Добавить задачу</button>
        <button onClick={deleteLastTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
}

export default TaskManager;
