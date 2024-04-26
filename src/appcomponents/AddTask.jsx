
function AddTask({addTask}) {

  const submitTask = (event) =>{
    event.preventDefault(); // Prevent default form submission
    const inputValue = event.target.elements.taskInput.value;
    event.target.elements.taskInput.value = "";//clear input
    addTask(inputValue);
  }
  return (
    <form onSubmit={submitTask} className="h-[4.3rem] w-full px-5 bg-white dark:bg-slate-800 rounded-lg flex justify-start items-center gap-2">
        <div className="size-8 rounded-full cursor-pointer hover:bg-slate-500 border border-slate-500 flex justify-center items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-2 stroke-slate-500 group-hover:stroke-white dark:stroke-white">
                <path d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
        <input type="text" name="taskInput" className="outline-none px-1 bg-inherit text-base font-semibold font-josefin text-slate-400" placeholder="Create a new todo" />
    </form>
  )
}

export default AddTask;