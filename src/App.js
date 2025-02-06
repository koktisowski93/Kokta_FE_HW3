import './App.css';
import { Routes, Route } from "react-router-dom";
import Owned from "./Pages/Owned";
import Create from "./Pages/Create";
import Invited from "./Pages/Invited";
import Archived from "./Pages/Archived";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Owned />} />
            <Route path="/create" element={<Create />} />
            <Route path="/invited" element={<Invited />} />
            <Route path="/archived" element={<Archived />} />
        </Routes>
    );
}

export default App;
