import './Header.css';
import { useRole } from "../Components/RoleContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { role, setRole } = useRole();
    const navigate = useNavigate();

    return (
        <header className="header">
            <h1 className="header-title" onClick = { () => { navigate(`/`) }}>Shopping List App</h1>
            <div className="role-container">
                <label htmlFor="role-select">Role:</label>
                <select id="role-select" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Uzivatel1">Uzivatel1</option>
                    <option value="Uzivatel2">Uzivatel2</option>
                    <option value="Uzivatel3">Uzivatel3</option>
                    <option value="Uzivatel7">Uzivatel7</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
