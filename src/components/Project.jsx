export default function Project({project, onProjectDelete})
{
    return (
        <div className="pt-20 ps-96 pe-60">
            <div className="flex justify-between">
                <h1 className="text-stone-700 text-3xl font-bold">{project.title}</h1>
                <button className="text-stone-700 font-bold" onClick={(e) => onProjectDelete(e, project)}>Delete</button>
            </div>

            <p className="mt-2 text-stone-600">{project.date}</p>
            <p className="mt-2 text-stone-900">{project.description}</p>
            <hr className="mt-4 border-t-2 border-stone-300"/>
        </div>
    )
}