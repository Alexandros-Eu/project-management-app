/* 
    * A Form Component for creating new projects
    * onFormChange fn -> Handler for input changes (Two-Way-Binding) 
    * formData -> current form state containing title, description and date
    * onFormSubmit fn -> Handler for form submission
    * isValid -> indicates if all required fields are filled 
*/
export default function Form({onFormChange, formData, onFormSubmit, isValid})
{
    return (
        <form onSubmit={(e) => onFormSubmit(e, formData)} className="flex flex-wrap justify-start pe-[56rem] pt-36">
            <div className="flex justify-end w-full">
                <button className="w-20 h-10 inline me-2 text-stone-800 font-semibold col-end-6" name="cancel">Cancel</button>
                <button className="w-20 h-10 inline bg-stone-800 text-white rounded-lg font-semibold" name="save" disabled={!isValid}>Save</button>
            </div>

            <div className="grid grid-cols-1 ps-12">
                {!isValid && <p className="text-red-600">Please fill out all fields</p>}
                <label className="mt-3 text-stone-700 font-bold" htmlFor="title">TITLE</label>
                <input className="mt-2 p-1 bg-stone-300 h-8 text-stone-700 w-[40rem] rounded-sm border-b-2 border-stone-300 focus:outline-none focus:border-stone-600" type="text" name="title" value={formData.title} onChange={(e) => onFormChange(e, "title")} required/>

                <label className="mt-3 text-stone-700 font-bold" htmlFor="description">DESCRIPTION</label>
                <textarea className="mt-2 p-1 bg-stone-300 text-stone-700 w-[40rem] h-16" name="description" id="description" value={formData.description} onChange={(e) => onFormChange(e, "description")} required></textarea>

                <label className="mt-3 text-stone-700 font-bold" htmlFor="date">DUE DATE</label>
                <input className="mt-2 p-1 bg-stone-300 text-stone-700 w-[40rem] h-7" type="date" name="date" value={formData.date} onChange={(e) => onFormChange(e, "date")} required/>
            </div>
        </form>
    )
}