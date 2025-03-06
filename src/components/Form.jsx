export default function Form({onFormChange, formData})
{
    return (
        <form action="" className="flex flex-wrap justify-start pe-72 pt-36">
            <div className="flex justify-end w-full">
                <button className="w-20 h-10 inline me-2 text-stone-800 font-semibold col-end-6">Cancel</button>
                <button className="w-20 h-10 inline bg-stone-800 text-white rounded-lg font-semibold">Save</button>
            </div>

            <div className="grid grid-cols-1 ps-12">
                <label className="mt-3 text-stone-700 font-bold" htmlFor="title">TITLE</label>
                <input className="mt-2 bg-stone-300 h-8 text-stone-700" type="text" name="title" value={formData.title} onChange={(e) => onFormChange(e, "title")}/>

                <label className="mt-3 text-stone-700 font-bold" htmlFor="description">DESCRIPTION</label>
                <textarea className="mt-2 bg-stone-300 text-stone-700" name="description" id="description" value={formData.description} onChange={(e) => onFormChange(e, "description")}></textarea>

                <label className="mt-3 text-stone-700 font-bold" htmlFor="date">DUE DATE</label>
                <input className="mt-2 bg-stone-300 text-stone-700" type="date" name="date" value={formData.date} onChange={(e) => onFormChange(e, "date")}/>
            </div>
        </form>
    )
}