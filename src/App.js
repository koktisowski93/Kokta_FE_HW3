import { useState } from 'react';
import Header from './Components/Header';
import MenuBar from './Components/MenuBar';
import ListOfLists from './Components/ListOfLists';

const App = () => {
    const [view, setView] = useState("owned");

    return (
        <div className="app">
            <Header />
            <ListOfLists view={view} />
            <MenuBar setView={setView} />
        </div>
    );
};

export default App;
