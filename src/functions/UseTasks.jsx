import { useState, useEffect } from 'react';

function UseTasks() {
  const chargeTasks = () =>{
    const storedListString = localStorage.getItem('taskList');
    const currentList = JSON.parse(storedListString) || [];
    return currentList;
  }

  const [idCount, setIdCount] = useState(0);
  const [taskList, setTaskList] = useState(chargeTasks()); // Estado para la lista de tareas

  const saveTaskListToLocalStorage = () => {
    const stringifiedList = JSON.stringify(taskList);
    console.log(taskList);
    localStorage.setItem('taskList', stringifiedList);
    /*
    const stringifiedList = JSON.stringify(taskList);
    localStorage.setItem('taskList', stringifiedList);
    console.log(taskList.length);
    
    localStorage.removeItem('taskList');
    localStorage.setItem('taskList', JSON.stringify(taskList));
    
    */
  };
  
  const createTask = (text) =>{
    const newTask = {id: idCount, description: text, completed: false};
    setIdCount(idCount + 1);
    return newTask;
  }
  const handleAddTask = (textTask) => {
    const newTask = createTask(textTask);
    setTaskList([...taskList, newTask]); // Agrega la nueva tarea al estado
    saveTaskListToLocalStorage(); // Guarda la lista actualizada en localStorage
  };

  const handleDeleteTask = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
    saveTaskListToLocalStorage(); // Guarda la lista actualizada en localStorage
  };

  const handleToggleTaskCompletion = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // Cambia el estado de completada
      }
      return task;
    });
    setTaskList(updatedTaskList);
    saveTaskListToLocalStorage(); // Guarda la lista actualizada en localStorage
  };

  return {tasks: taskList, addTask: handleAddTask, deleteTask: handleDeleteTask, toggleTask: handleToggleTaskCompletion};
}

export default UseTasks;