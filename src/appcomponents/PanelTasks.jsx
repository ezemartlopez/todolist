import UseTasks from "@functions/UseTasks"
import AddTask from "@appcomponents/AddTask";
import TaskList from "@appcomponents/TaskList";

function PanelTasks() {
  const {tasks, addTask, deleteTask, toggleTask, allTasks, completedTasks, activeTasks, countTasks, filter, clearCompleted} = UseTasks();
  return (
    <section className="w-full h-full">
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks} countTasks={countTasks} deleteTask={deleteTask} toggleTask={toggleTask} allTasks={allTasks} completedTasks={completedTasks} activeTasks={activeTasks} filter={filter} clearCompleted={clearCompleted}/>
    </section>
  )
}

export default PanelTasks