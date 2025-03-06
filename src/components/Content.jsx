import projectIcon from '../assets/no-projects.png';

export default function Content({onSidebarClick})
{
    return (
        <main className="h-screen text-center flex flex-col justify-center">
            <img className="object-contain self-center h-24 w-48" src={projectIcon} alt="Project Icon" />
            <h2 className="text-stone-600 font-bold text-2xl">No Project Selected</h2>
            <p className="text-stone-400 text-lg font-semibold mt-4">Select a project or get started with a new one</p>
            <button className="self-center inline-block w-40 h-10 bg-stone-700 text-stone-400 font-semibold rounded-lg mt-4" onClick={onSidebarClick}>Create new project</button>
        </main>
    )
}