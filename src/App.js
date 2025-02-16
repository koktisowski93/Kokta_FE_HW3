import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from './Components/RoleContext';
import Header from './Components/Header';
import MenuBar from './Components/MenuBar';
import {List} from './routes/List';
import React, {useState} from "react";
import ShoppingListDetail from "./routes/ShoppingListDetail";
import {shoppingListMockInitial} from './mockupData/data.js'
import AddShoppingListModal from "./Components/AddShoppingListModal";

const App = () => {
    const [shoppingListMock, setShoppingListMock] = useState(shoppingListMockInitial);
    const [mode, setMode] = useState(1);

    const updateProductShoppingList = (roleProp, updatedProducts) => {
        setShoppingListMock(prev => {
            return prev.map((item) => {
                if (item.owner.name === roleProp) {
                    return {
                        ...item,
                        products: updatedProducts
                    }
                } else return item
            })
        })
    };

    console.log('shoppingListMock: ', shoppingListMock)



    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <RoleProvider>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<List mode={mode} shoppingListProp={shoppingListMock} setShoppingListMock={setShoppingListMock} />} />
                        <Route path="/detail" element={
                            <ShoppingListDetail
                                shoppingListProp={shoppingListMock}
                            updateProductShoppingList={updateProductShoppingList}
                        />
                        } />
                    </Routes>
                    <MenuBar openAddModal={()=>setIsAddModalOpen(true)} setMode={setMode} mode={mode} setShoppingListMock={setShoppingListMock}/>
                    {
                        isAddModalOpen && (
                            <AddShoppingListModal onClose={()=>setIsAddModalOpen(false)} setShoppingListMock={setShoppingListMock}/>
                        )
                    }
                </div>
            </Router>
        </RoleProvider>
    );
};

export default App;
