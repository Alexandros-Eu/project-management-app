// Component that renders the main information about a project
// Project = { title: string, date: string, description: string, tasks: array (does not get rendered here) }
export default function Project({project, onProjectDelete}) // The project with its relevant information in a JSON
{
    return (
        <div className="pt-20 ps-96 pe-60">
            <div className="flex justify-between">
                <h1 className="text-stone-700 text-3xl font-bold">{project.title}</h1>
                <button className="text-stone-700 hover:text-stone-400 font-bold" onClick={(e) => onProjectDelete(e, project)}>Delete</button> { /* onProjectDelete fn removes the project from the projects state (managed in App)*/}
            </div>

            <p className="mt-2 text-stone-600">{project.date}</p>
            <p className="mt-2 text-stone-900">{project.description}</p>
            <hr className="mt-4 border-t-2 border-stone-300"/>
        </div>
    )
}