
import TaskItem from '@components/TaskItem';

function TaskList({tasks, deleteTask, toggleTask}) {
  
  return (
    <div className="flex flex-col gap-4">
      <ol className="pt-6 shadow-lg rounded-b-lg">
          {tasks.map((task, index) => (<TaskItem key={index} task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>))}
          <li className="h-[51px] w-full px-5 first:rounded-t-lg first:border-t-0 last:rounded-b-lg bg-white dark:bg-slate-800 border-t-[2px] border-slate-300 dark:border-slate-600 flex justify-between items-center">
              <button className='text-sm text-slate-500 font-semibold font-josefin'>{tasks.length + " items left"}</button>
              <button className='text-sm text-slate-500 font-semibold font-josefin'>Clear Completed</button>
          </li>
      </ol>
      <div className="h-[51px] w-full shadow-lg px-10 bg-white dark:bg-slate-800 rounded-lg flex justify-between items-center">
              <button className='font-josefin text-sm text-slate-500 font-semibold'>All</button>
              <button className='font-josefin text-sm text-slate-500 font-semibold'>Active</button>
              <button className='font-josefin text-sm text-slate-500 font-semibold'>Completed</button>
      </div>
    </div>
  )
}

export default TaskList;