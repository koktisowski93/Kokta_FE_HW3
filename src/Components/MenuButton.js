import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuButton.css';

const MenuButton = ({ name, icon: Icon, route }) => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(route)} className="menu-button">
            <Icon />
            <span>{name}</span>
        </button>
    )
}

export default MenuButton;
