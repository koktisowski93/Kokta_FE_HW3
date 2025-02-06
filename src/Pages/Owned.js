import MenuBar from "../Components/MenuBar";
import ListOfLists from "../Components/ListOfLists";

const Owned = () => {
    return (
        <div className="MainPage">

        <header className="Header"> Shopping List App </header>
            <ListOfLists />
            <MenuBar />
        </div>
    );
}

export default Owned;
