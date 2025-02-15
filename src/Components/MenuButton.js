import React from 'react';
import './MenuButton.css';

const MenuButton = ({ name, icon: Icon, onClick }) => {
    return (
        <button onClick={onClick} className="menu-button">
            <Icon />
            <span>{name}</span>
        </button>
    );
};

export default MenuButton;
