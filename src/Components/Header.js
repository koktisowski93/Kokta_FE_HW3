import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <header className="header">
            <h1>Shopping List App</h1>
            <ShoppingCartIcon className="icon" />
        </header>
    );
};

export default Header;
