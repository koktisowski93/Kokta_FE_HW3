
import React from "react";
import {ArrowBack} from "@mui/icons-material";


const ConfirmationModal = ({onClose, onSubmit, question}) => {

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <div className="modal-header">
                    <h2>{question}</h2>
                </div>

                <section className="footer-buttons">
                    <button onClick={onClose} className="close-button">Zavřít</button>
                    <button onClick={() => {
                            onSubmit()
                            onClose()

                    }} className="submit-button">Potvrdit</button>
                </section>


            </div>
        </div>
    )
}

export default ConfirmationModal