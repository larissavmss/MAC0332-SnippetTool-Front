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

    const colorTag = (colorName) => {
        if (colorName == "RED")     return "red";
        if (colorName == "BLUE")    return "blue";
        if (colorName == "YELLOW")  return "yellow";
        if (colorName == "GREEN")   return "green";
        if (colorName == "ORANGE")  return "orange";
        if (colorName == "PURPLE")  return "purple";
        else                        return "white"
    }

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
                    <div className="tagContainerPopUp">
                        {snippet.tags.map((tag)=>{
                            return ( <div style={{"border": "1px solid "+ colorTag(tag.color)}} className="snippetTag" key={tag.id}>{tag.name}</div> )
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