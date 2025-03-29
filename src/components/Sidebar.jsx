import { createPortal } from 'react-dom';

// Sidebar component that displays and manages project navigation
export default function Sidebar({onAddProject, projects, onProjectClick})
{
    // Component is rendered via portal to 'modal-root' for better modal/overlay management
    return createPortal(<aside className="bg-black float-start w-1/6 max-lg:w-1/3 h-screen rounded-lg ps-7 pt-7 pe-7 mt-10">
        <div className="mt-12 max-md:text-center">
            <h1 className="text-white font-bold text-sm lg:text-md xl:text-xl">YOUR PROJECTS</h1>
            { /* onAddProject fn that adds a new Project in the Projects state (managed in App) */ }
            <button onClick={onAddProject} className="bg-stone-700 hover:bg-stone-600 rounded-lg text-stone-400 hover:text-stone-100 md:px-3 md:py-2 mt-8 mb-5 px-2 py-1 text-sm md:text-base text-center">+ Add Project</button>
        </div>

        {projects.map((project, i) => { // Lists all the projects 
            i++;
            // onProjectClick fn that reacts to the button click and takes you to the specific project
            return <a key={i} onClick={() => onProjectClick(project)} className="block ps-3 pt-1 pb-1 text-slate-200 active:bg-zinc-900">{project.title}</a>
        })}
    </aside>,
    document.getElementById("sidebar-root"))
}