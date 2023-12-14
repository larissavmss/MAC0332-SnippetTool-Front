import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import './Main.css'
import SnippetsContainer from "../../components/SnippetsContainer/SnippetsContainer";
import { getFolderByName } from "../../services/folder";
import emptySnippet from "../../utils/constants/emptySnippet";
import { getFolderSnippets } from "../../services/snippet";

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [folderId, setFolderId] = useState(null);
    const [snippetData, setSnippetData] = useState(emptySnippet);
    const [ filter, setFilter ] = useState("");

    useEffect(()=>{
        const fetchSnippetsData = async () =>   {
            const folders = await getFolderByName("Default");
            setFolderId(folders[0].id);
        }
        fetchSnippetsData();
    }, [])

    const handleSearch = async (filter) => {
        setFilter(filter);
    }

    return (
        <div className="mainPage">
            <Header 
                openMenu={openMenu} 
                setOpenMenu={setOpenMenu}
                handleSearch={handleSearch}
            />
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                {folderId != null ? <SnippetsContainer filter={filter} id={folderId} snippetData={snippetData} setSnippetData={setSnippetData} getUserSnippets={getFolderSnippets}/> : null}
            </div>
        </div>
    );
}

export default Main;