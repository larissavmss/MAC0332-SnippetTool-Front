import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import './Main.css'
import SnippetsContainer from "../../components/SnippetsContainer/SnippetsContainer";
import { getFolderByName } from "../../services/folder";
import emptySnippet from "../../utils/constants/emptySnippet";

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [folderId, setFolderId] = useState(null);
    const [snippetData, setSnippetData] = useState(emptySnippet);

    useEffect(()=>{
        const fetchSnippetsData = async () =>   {
            const folders = await getFolderByName("Default");
            setFolderId(folders[0].id);
        }
        fetchSnippetsData();
    }, [])

    return (
        <div className="mainPage">
            <Header 
                openMenu={openMenu} 
                setOpenMenu={setOpenMenu}
            />
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                {folderId != null ? <SnippetsContainer folderId={folderId} snippetData={snippetData} setSnippetData={setSnippetData}/> : null}
            </div>
        </div>
    );
}

export default Main;