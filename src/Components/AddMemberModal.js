import React, {useRef} from "react";
import {ArrowBack} from "@mui/icons-material";


const AddMemberModal = ({onClose, onSubmit, name}) => {

    const inputNameRef = useRef(null);

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <aside className='back-button'>
                    <ArrowBack onClick={onClose}/>
                </aside>

                <div className="modal-header">
                    <h2>Invite User</h2>
                </div>
                <main>
                    <input className='add-shopping-name' type="text" required placeholder="Uzivatel123" ref={inputNameRef}/>
                </main>

                <section className="footer-buttons">
                    <button onClick={onClose} className="close-button">Zavřít</button>
                    <button onClick={() => {
                        if (inputNameRef.current) {
                            onSubmit(inputNameRef.current.value, name);
                        }
                        onClose()

                    }} className="submit-button">Potvrdit</button>
                </section>


            </div>
        </div>
    )
}

export default AddMemberModal