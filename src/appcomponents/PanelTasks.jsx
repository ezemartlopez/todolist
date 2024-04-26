import UseTasks from "@functions/UseTasks"
import AddTask from "@appcomponents/AddTask";
import TaskList from "@appcomponents/TaskList";

function PanelTasks() {
  const {tasks, addTask, deleteTask, toggleTask} = UseTasks();
  return (
    <section className="w-full h-full">
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
    </section>
  )
}

export default PanelTasks