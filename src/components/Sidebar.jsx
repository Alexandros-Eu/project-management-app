export default function Sidebar({onSidebarClick, projects})
{
    return <aside className="bg-black float-start w-1/6 h-screen rounded-lg ps-7 pt-7 pe-7">
        <h1 className="text-white font-bold text-lg">YOUR PROJECTS</h1>
        <button onClick={onSidebarClick} className="bg-stone-700 rounded-lg text-stone-400 px-3 py-2 mt-5 mb-5 text-start">+ Add Project</button>
        {projects.map((project, i) => {
            i++;
            return <a key={i} className="block ps-3 pt-1 pb-1 text-slate-200 active:bg-zinc-900">{project.title}</a>
        })}
    </aside>
}