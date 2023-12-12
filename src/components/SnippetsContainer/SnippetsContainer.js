import './SnippetsContainer.css';
import { useEffect, useState } from "react";
import { getUserSnippets } from "../../services/snippet";
import SnippetPopup from "../SnippetPopup/SnippetPopup";

const SnippetsContainer = ({ folderId }) => {
    const [snippets, setSnippets] = useState([]);
    const [snippetPopup, setSnippetPopup] = useState(false);
    const [selectedSnippetId, setSelectedSnippetId] = useState(0);

    useEffect(()=>{
        const fetchSnippetsData = async () =>   {
            const snippetsByFolder = await getUserSnippets(folderId);
            setSnippets(snippetsByFolder);
        }
        fetchSnippetsData();
    }, [])

    const handleSnippetSelect = (snippetId) => {
        setSnippetPopup(true);
        setSelectedSnippetId(snippetId)
    }

    const handleCreateSnippet = () => {
        setSelectedSnippetId(0);
        setSnippetPopup(true);
    }
    
    return (
        <div>
            <button className="inputCreator" onClick={handleCreateSnippet}>Criar novo snippet</button>

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
    )
}

export default SnippetsContainer;