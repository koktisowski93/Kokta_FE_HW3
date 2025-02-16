import React, { useRef, useState } from "react";
import { Product } from "../Components/Product";
import { MdModeEdit } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MembersModal } from "../Components/MembersModal";
import {useRole} from "../Components/RoleContext";
import { useSearchParams } from "react-router-dom";
import '../Design/ShoppingListDetail.css'

const ShoppingListDetail = ({updateProductShoppingList, shoppingListProp }) => {
    const { role } = useRole();
    const [searchParams] = useSearchParams();
    const shoppingListName = searchParams.get("shoppingListName") || '';

    console.log(shoppingListName);
    console.log(role)
    console.log('shoppingListProp: ', shoppingListProp);

    const shoppingList = shoppingListProp.find(el => el.name === shoppingListName)

    const {name, products, members} = shoppingList || {};
    const owner = shoppingList?.owner

    const [productState, setProductState] = useState(products);
    const [nameMode, setNameMode] = useState(false);
    const [nameValue, setNameValue] = useState(name);
    const [newProductName, setNewProductName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const nameRef = useRef(name);
    const [checkFilter, setCheckFilter] = useState(false);
    const [membersState, setMembersState] = useState(members);

    if (!shoppingList) {
        return null
    }

    const handleChangeSolve = (id, solved) => {
        setProductState((prev) => {
            const updatedProducts = prev.map((product) => {
                if (product.id === id) {
                    return { ...product, solved };
                }
                return product;
            });
            updateProductShoppingList(role, updatedProducts);
            return updatedProducts;
        });
    };

    const handleChangeRemove = (id) => {
        setProductState((prev) => {
            const updatedProducts = prev.filter((product) => product.id !== id);
            updateProductShoppingList(role, updatedProducts);
            return updatedProducts;
        });
    };

    const handleAddProduct = () => {
        if (newProductName.trim() !== "") {
            const newProduct = {
                id: String(Math.floor(Math.random() * 99) + 1).padStart(2, "0"),
                name: newProductName,
                solved: false,
            };
            setProductState((prev) => {
                const updatedProducts = [...prev, newProduct];
                updateProductShoppingList(role, updatedProducts);
                return updatedProducts;
            });
            setNewProductName("");
        }
    };

    const handleSaveName = () => {
        nameRef.current = nameValue;
        setNameMode(false);
    };

    const handleCancelNameChange = () => {
        setNameValue(nameRef.current);
        setNameMode(false);
    };

    return (
        <section className="shopping-list-detail">
            <div className="list-header">
                {nameMode ? (
                    <div className="name-edit">
                        <input
                            type="text"
                            onChange={(event) => setNameValue(event.target.value)}
                            value={nameValue}
                        />
                        <button onClick={handleSaveName} className="save-button">Uložit</button>
                        <button onClick={handleCancelNameChange} className="cancel-button">Storno</button>
                    </div>
                ) : (
                    <div className="list-title">
                        <h2>{nameValue}</h2>
                        <MdModeEdit onClick={() => setNameMode(true)} className="edit-icon" />
                    </div>
                )}
                <FaUserEdit className="user-edit-icon" onClick={() => setIsModalOpen(true)} />
            </div>


            <div className="add-section">
                <label className="filter-label">
                    <input
                        type="checkbox"
                        className="filter-checkbox"
                        checked={checkFilter}
                        onChange={(event) => setCheckFilter(event.target.checked)}
                    />
                </label>
                <div className="add-product">
                    <AiOutlinePlus className="add-icon" onClick={handleAddProduct} />
                    <input
                        type="text"
                        placeholder="Přidat produkt"
                        value={newProductName}
                        onChange={(event) => setNewProductName(event.target.value)}
                        className="product-input"
                    />
                </div>
            </div>


            <main className="list-container">
                {productState
                    .filter((item) => (checkFilter ? item.solved : true))
                    .map((item) => (
                        <Product
                            key={item.id}
                            name={item.name}
                            solved={item.solved}
                            handleChangeSolve={(solved) => handleChangeSolve(item.id, solved)}
                            handleChangeRemove={() => handleChangeRemove(item.id)}
                        />
                    ))}
            </main>

            {isModalOpen && (
                <MembersModal
                    owner={owner}
                    members={membersState}
                    onClose={() => setIsModalOpen(false)}
                    onRemoveMember={(id) => setMembersState(membersState.filter((member) => member.id !== id))}
                />
            )}
        </section>
    );
};

export default ShoppingListDetail