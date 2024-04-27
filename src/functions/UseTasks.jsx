import { useState, useEffect } from 'react';

function createNewId(lista) {
  // Si la lista está vacía, devolver 1
  if (lista.length === 0) { return 1; }
  // Encontrar el ID máximo en la lista
  let idMaximo = lista.reduce((max, item) => Math.max(max, item.id), 0);
  // Devolver el ID máximo + 1
  return idMaximo + 1;
}

function UseTasks() {
  const chargeTasks = () =>{
    const storedListString = localStorage.getItem('taskList');
    const currentList = JSON.parse(storedListString) || [];
    return currentList;
  }

  const [taskList, setTaskList] = useState(chargeTasks()); // Estado para la lista de tareas
  const [taskListView, setTaskListView] = useState(taskList);
  const [countTasks, setCountTasks] = useState(taskList.length);
  const [filter, setFilter] = useState('all');

  const allTasks = () =>{  setTaskListView(taskList);  setFilter('all');  }
  const completedTasks = () =>{  setTaskListView(taskList.filter(task => task.completed));  setFilter('completed'); }
  const activeTasks = () =>{  setTaskListView(taskList.filter(task => !task.completed));  setFilter('active');}
  
  const createTask = (text) =>{
    let newId = createNewId(taskList);
    const newTask = {id: newId, description: text, completed: false};
    return newTask;
  }
  const handleAddTask = (textTask) => {
    const newTask = createTask(textTask);
    setTaskList([...taskList, newTask]); // Agrega la nueva tarea al estado
    //saveTaskListToLocalStorage(); // Guarda la lista actualizada en localStorage
  };

  const handleDeleteTask = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
    //saveTaskListToLocalStorage(); // Guarda la lista actualizada en localStorage
  };

  const handleToggleTaskCompletion = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // Cambia el estado de completada
      }
      return task;
    });
    setTaskList(updatedTaskList);
    //saveTaskListToLocalStorage(); // Guarda la lista actualizada en localStorage
  };
  const clearCompleted = () =>{
    setTaskList(taskList.filter(task => !task.completed));
  }
  useEffect(() => {
    if(filter==='all'){allTasks();}
    if(filter==='active'){activeTasks();}
    if(filter==='completed'){completedTasks();}
    //en cada cambio de taskList guardo los cambios
    localStorage.setItem('taskList', JSON.stringify(taskList));
    setCountTasks(taskList.length);
  }, [taskList])
  

  return {tasks: taskListView, addTask: handleAddTask, deleteTask: handleDeleteTask, toggleTask: handleToggleTaskCompletion, allTasks, completedTasks, activeTasks, clearCompleted , countTasks, filter};
}

export default UseTasks;