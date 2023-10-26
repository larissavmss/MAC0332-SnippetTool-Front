import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getUserSnippets } from "../../services/snippet";
import './Main.css'

const Main = () => {
    const [snippets, setSnippets] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedSnippetId, idSelectedSnippetId] = useState(0);

    useEffect(()=>{
        const fetchSnippetsData = async () =>   {
            const response = await getUserSnippets(1); //TODO: lembrar de trocar 1 para o id do user
            setSnippets(response);
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
                <button className="inputCreator">Criar novo snippet</button>

                <div className="snippetContainer">

                {snippets.map((snippet)=> {
                    return ( <div className="snippet" key={snippet.id}>
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

                </div>
            </div>
        </div>
    );
}

export default Main;