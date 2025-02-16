import React, {useRef} from "react";
import {ArrowBack} from "@mui/icons-material";
import {useRole} from "./RoleContext";

const AddShoppingListModal = ({onClose, setShoppingListMock}) => {
    const { role } = useRole();

    const addShoppingList = (name) => {
        setShoppingListMock(prev => {
            return [
                ...prev,
                {
                    name,
                    id: Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join(''),
                    products: [],
                    members: [],
                    owner: { name: role },
                }
            ]
        })
    }


    const inputNameRef = useRef(null);

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <aside className='back-button'>
                    <ArrowBack onClick={onClose}/>
                </aside>

                <div className="modal-header">
                    <h2>Shopping list name</h2>
                </div>
                <main>
                    <input className='add-shopping-name' type="text" required placeholder="Nákup na oslavu" ref={inputNameRef}/>
                </main>

                <section className="footer-buttons">
                    <button onClick={onClose} className="close-button">Zavřít</button>
                    <button onClick={() => {
                        if (inputNameRef.current) {
                            addShoppingList(inputNameRef.current.value);
                        }
                        onClose()

                    }} className="submit-button">Potvrdit</button>
                </section>


            </div>
        </div>
    )
}

export default AddShoppingListModal