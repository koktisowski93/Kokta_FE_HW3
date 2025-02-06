import React from 'react';
import MenuButton from './MenuButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import InventoryIcon from '@mui/icons-material/Inventory';

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <MenuButton name="Přidat" icon={AddCircleIcon} route="/create" />
            <MenuButton name="Owned" icon={PersonIcon} route="/" />
            <MenuButton name="Invited" icon={SettingsAccessibilityIcon} route="/invited" />
            <MenuButton name="Invited" icon={InventoryIcon} route="/archived" />
        </div>
    );
};

export default MenuBar;
