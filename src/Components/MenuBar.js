import React from 'react';
import MenuButton from './MenuButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import InventoryIcon from '@mui/icons-material/Inventory';
import './MenuBar.css'

const MenuBar = ({ setView }) => { // setView přijímáme jako prop

    return (
        <div className="menu-bar">
            <MenuButton name="Přidat" icon={AddCircleIcon} onClick={() => setView("create")} />
            <MenuButton name="Owned" icon={PersonIcon} onClick={() => setView("owned")} />
            <MenuButton name="Invited" icon={SettingsAccessibilityIcon} onClick={() => setView("invited")} />
            <MenuButton name="Archived" icon={InventoryIcon} onClick={() => setView("archived")} />
        </div>
    );
};

export default MenuBar;
