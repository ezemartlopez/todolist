
function TaskItem({task, toggleTask, deleteTask}) {
  return (
    <li className="h-[63px] w-full px-5 first:rounded-t-lg first:border-t-0 last:rounded-b-lg bg-white dark:bg-slate-800 border-t-[2px] border-slate-300 dark:border-slate-600 flex justify-start items-center gap-2">
        <div onClick={() => toggleTask(task.id)} className={`size-6 rounded-full cursor-pointer border border-slate-500 flex justify-center items-center ${task.completed?'check-item':''}`}>
          {task.completed? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  className="size-4 stroke-2 stroke-white">
            <path  d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          ): null}
            
        </div>
        <span className={`flex-grow px-1 pt-1 bg-inherit text-base font-semibold font-josefin text-slate-400 truncate ${task.completed? 'line-through':''}`}>{task.description}</span>
        
        <div onClick={() => deleteTask(task.id)} className="size-6 flex justify-center items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-2 stroke-slate-500 dark:stroke-white">
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
    </li>
  );
}

export default TaskItem;