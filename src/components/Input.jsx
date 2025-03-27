export default function Input({label, isTextArea, data, onInputChange, ...props})
{
    return (
        <>
            <label className="mt-3 text-stone-700 font-bold uppercase" htmlFor={!isTextArea ? label : "date"}>{label}</label>
            {!isTextArea && <input className="mt-2 p-1 bg-stone-300 h-8 text-stone-700 w-[40rem] rounded-sm border-b-2 border-stone-300 focus:outline-none focus:border-stone-600" name={label === "due date" ? "date" : "title"} value={data[label]} onChange={(e) => onInputChange(e, label === "due date" ? "date" : "title")} {...props} required/>}
            {isTextArea && <textarea className="mt-2 p-1 bg-stone-300 text-stone-700 w-[40rem] h-16" name="description" id="description" value={data.description} onChange={(e) => onInputChange(e, label)} required></textarea>}
        </>
    )
}