import { useState } from "react";
import Header from "../../components/Header/Header";
import './Main.css'
import SnippetsContainer from "../../components/SnippetsContainer/SnippetsContainer";

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="mainPage">
            <Header 
                openMenu={openMenu} 
                setOpenMenu={setOpenMenu}
            />
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                <SnippetsContainer folderId={1} />
            </div>
        </div>
    );
}

export default Main;