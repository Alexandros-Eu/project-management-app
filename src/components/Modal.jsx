import { forwardRef } from 'react';

const Modal = forwardRef(function Modal({children}, ref)
{
    return (
        <dialog ref={ref} className="backdrop:bg-stone-800/90 p-5 rounded-lg shadow-lg">
                {children}
                <div className="text-end">
                    <button onClick={() => ref.current.close()} className="bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 px-4 py-2 rounded-md">Close</button>
                </div>
        </dialog>
    )
});

export default Modal;