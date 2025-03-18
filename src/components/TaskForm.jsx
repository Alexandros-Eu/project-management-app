/*
    * A Task Form Component for creating or deleting tasks of a project
    * onTaskChange fn -> Handler for input changed (Two-Way-Binding)
    * task -> current task state
    * onTaskSubmit fn -> Handler for task form submission
    * taskData -> Array with all existings tasks of the project
    * onTaskDelete fn -> Handler to remove a task from the project
*/
export default function TaskForm({task, onTaskChange, onTaskSubmit, taskData, onTaskDelete})
{
    return (
        <form onSubmit={onTaskSubmit} className="pt-8 ps-96 pe-60">
            <h1 className="text-stone-800 text-3xl font-bold mb-4">Tasks</h1>
            <div>
                <input type="text" className="bg-neutral-200 me-3 rounded" value={task} onChange={onTaskChange} required/>
                <button className="text-zinc-900">Add Task</button>
            </div>

                <div className="grid grid-cols-1 justify-items-start bg-neutral-200 mt-6 w-1/3 min-h-28 p-3 rounded-lg">
                    {taskData.map((task, i) => {
                        i++;
                        return  <div key={i} className="flex justify-between items-center w-full h-10">
                                    <p className="font-semibold mt-3">{task}</p>
                                    <button type="button" onClick={(e) => onTaskDelete(e, task)} name="clear" className="pt-4 hover:text-red-600">Clear</button>
                                </div> 

                    })}
                </div>

        </form>
    )
}