export default function Sidebar({onAddProject, projects, onProjectClick})
{
    return <aside className="bg-black float-start w-1/6 h-screen rounded-lg ps-7 pt-7 pe-7 mt-10">
        <div className="mt-12">
            <h1 className="text-white font-bold text-xl">YOUR PROJECTS</h1>
            <button onClick={onAddProject} className="bg-stone-700 rounded-lg text-stone-400 px-3 py-2 mt-8 mb-5 text-start">+ Add Project</button>
        </div>

        {projects.map((project, i) => {
            i++;
            return <a key={i} onClick={() => onProjectClick(project)} className="block ps-3 pt-1 pb-1 text-slate-200 active:bg-zinc-900">{project.title}</a>
        })}
    </aside>
}