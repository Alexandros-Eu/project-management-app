import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({children}, ref)
{
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return (
        createPortal(<dialog ref={dialog} className="backdrop:bg-stone-800/90 p-5 rounded-lg shadow-lg">
                {children}
                <div className="text-end">
                    <button onClick={() => dialog.current.close()} className="bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 px-4 py-2 rounded-md">Close</button>
                </div>
        </dialog>,
        document.getElementById("modal-root"))
    )
});

export default Modal;