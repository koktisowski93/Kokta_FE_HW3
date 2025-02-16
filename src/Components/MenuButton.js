import React from 'react';
import './MenuButton.css';
import { useNavigate } from "react-router-dom";

const MenuButton = ({ name, icon: Icon, onClick, isPicked=false }) => {
    const navigate = useNavigate();
    return (
        <button onClick={ () => {onClick(); navigate('/')}} className="menu-button" style={isPicked ? { backgroundColor: '#a0cda2' } : {}}>
            <Icon />
            <span>{name}</span>
        </button>
    );
};

export default MenuButton;
