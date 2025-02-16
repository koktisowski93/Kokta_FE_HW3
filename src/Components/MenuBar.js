import React from 'react';
import MenuButton from './MenuButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import InventoryIcon from '@mui/icons-material/Inventory';
import '../Design/MenuBar.css'

const MenuBar = ({ openAddModal, setMode, mode }) => {

    return (
        <div className="menu-bar">
            <MenuButton name="Přidat" icon={AddCircleIcon} onClick={openAddModal} />
            <MenuButton name="Owned" icon={PersonIcon} onClick={() => setMode(1)} isPicked={mode === 1} />
            <MenuButton name="Invited" icon={SettingsAccessibilityIcon} onClick={() => setMode(2)}  isPicked={mode === 2} />
            <MenuButton name="Archived" icon={InventoryIcon} onClick={() => setMode(3)} isPicked={mode === 3}  />
        </div>
    );
};

export default MenuBar;
