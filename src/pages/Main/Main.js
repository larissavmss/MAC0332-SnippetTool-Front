import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getUserSnippets } from "../../services/snippet";
import './Main.css'
import SnippetPopup from "../../components/SnippetPopup/SnippetPopup";

const Main = () => {
    const [snippets, setSnippets] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);
    const [snippetPopup, setSnippetPopup] = useState(false);
    const [selectedSnippetId, setSelectedSnippetId] = useState(0);

    useEffect(()=>{
        const fetchSnippetsData = async () =>   {
            const response = await getUserSnippets(1);
            setSnippets(response);
        }
        fetchSnippetsData();
    }, [])

    const handleSnippetSelect = (snippetId) => {
        setSnippetPopup(true);
        setSelectedSnippetId(snippetId)
    }

    return (
        <div className="mainPage">
            <Header 
                openMenu={openMenu} 
                setOpenMenu={setOpenMenu}
            />
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                <button className="inputCreator">Criar novo snippet</button>

                <div className="snippetContainer">

                {snippets.map((snippet)=> {
                    return ( <div onClick={() => handleSnippetSelect(snippet.id)} className="snippet" key={snippet.id}>
                        <p className="snippetContent">
                        {snippet.content}
                        </p>
                        <h2 className="snippetTitle">{snippet.name}</h2>
                        <div className="tagContainer">
                            {snippet.tags.map((tag)=>{
                                return ( <div className="snippetTag" key={tag.id}>{tag.name}</div> )
                            })}
                        </div>
                    </div> )
                })}
                {snippetPopup && <SnippetPopup snippetId={selectedSnippetId} setPopup={setSnippetPopup}/>}
                </div>
            </div>
        </div>
    );
}

export default Main;