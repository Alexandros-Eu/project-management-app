import Input from './Input.jsx';
import Modal from './Modal.jsx';
import { useRef } from 'react';

/* 
    * A Form Component for creating new projects
    * onFormChange fn -> Handler for input changes (Two-Way-Binding) 
    * formData -> current form state containing title, description and date
    * onFormSubmit fn -> Handler for form submission
    * isValid -> indicates if all required fields are filled 
*/
export default function Form({onFormChange, formData, onFormSubmit})
{
    const modal = useRef();

    return (
        <form className="flex flex-wrap justify-start pe-5 xl:pe-30 2xl:pe-[56rem] pt-36">
            <div className="flex justify-end w-full mb-3">
                <button className="w-20 h-10 inline me-2 text-stone-800 hover:text-stone-950 font-semibold col-end-6" name="cancel"onClick={(e) => onFormSubmit(e, formData, modal)}>Cancel</button>
                <button className="w-20 h-10 inline bg-stone-800 hover:bg-stone-950 text-white rounded-lg font-semibold" name="save" onClick={(e) => onFormSubmit(e, formData, modal)}>Save</button>
            </div>

            <div className="grid grid-cols-1 ps-12">
                <Modal ref={modal}>
                    <h2 className="mb-3 text-red-600 text-lg font-bold">Invalid Input</h2>
                    <p className="text-stone-600">Please fill out all fields</p>
                    <p className="text-stone-600 mb-4">Make sure you provide a valid value for every input field</p>
                </Modal>
                <Input type="text" label="title" data={formData} onInputChange={onFormChange} />
                <Input label="description" data={formData} onInputChange={onFormChange} isTextArea/>
                <Input type="date" label="due date" data={formData} onInputChange={onFormChange} />
            </div>
        </form>
    )
}