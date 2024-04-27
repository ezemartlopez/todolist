
import TaskItem from '@components/TaskItem';

function TaskList({tasks, countTasks, deleteTask, toggleTask, allTasks, completedTasks, activeTasks, filter, clearCompleted}) {
  
  return (
    <div className="flex flex-col gap-4">
      <ol className="pt-6 shadow-lg rounded-b-lg">
          {tasks.map((task, index) => (<TaskItem key={index} task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>))}
          <li className="h-[51px] w-full px-5 first:rounded-t-lg first:border-t-0 last:rounded-b-lg bg-white dark:bg-slate-800 border-t-[2px] border-slate-300 dark:border-slate-600 flex justify-between items-center">
              <button className='text-sm text-slate-500 font-semibold font-josefin'>{countTasks + " items left"}</button>
              <button onClick={clearCompleted} className='text-sm text-slate-500 font-semibold font-josefin'>Clear Completed</button>
          </li>
      </ol>
      <div className="h-[51px] w-full shadow-lg px-10 bg-white dark:bg-slate-800 rounded-lg flex justify-between items-center">
              <button onClick={allTasks} className={`font-josefin font-semibold text-sm ${filter==='all'?'text-blue-500':'text-slate-500'} `}>All</button>
              <button onClick={activeTasks} className={`font-josefin font-semibold text-sm ${filter==='active'?'text-blue-500':'text-slate-500'}`}>Active</button>
              <button onClick={completedTasks} className={`font-josefin font-semibold text-sm ${filter==='completed'?'text-blue-500':'text-slate-500'}`}>Completed</button>
      </div>
    </div>
  )
}

export default TaskList;