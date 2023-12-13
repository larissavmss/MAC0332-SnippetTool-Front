import './SnippetsContainer.css';

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/userSlice";

import { getUserSnippets } from "../../services/folder";
import SnippetPopup from "../SnippetPopup/SnippetPopup";
import emptySnippet from '../../utils/constants/emptySnippet';
import { createSnippet, getSnippetById } from '../../services/snippet';
import { getTags } from '../../services/tag';

const SnippetsContainer = ({ folderId, snippetData, setSnippetData }) => {
    const [ userTags, setUserTags ] = useState([]);
    const [ snippets, setSnippets ] = useState([]);
    const [ snippetPopup, setSnippetPopup ] = useState(false);

    const user = useSelector(selectUser);

    useEffect(()=>{
        const fetchSnippetsData = async () =>   {
            const snippetsByFolder = await getUserSnippets(folderId);
            setSnippets(snippetsByFolder);
        }
        fetchSnippetsData();
    }, [snippetPopup])

    useEffect(()=>{
        const fetchUserTags = async () =>   {
            const tags = await getTags();
            setUserTags(tags);
        }
        fetchUserTags();
    },[user.username])

    const colorTag = (colorName) => {
        if (colorName === "RED")     return "red";
        if (colorName === "BLUE")    return "blue";
        if (colorName === "YELLOW")  return "yellow";
        if (colorName === "GREEN")   return "green";
        if (colorName === "ORANGE")  return "orange";
        if (colorName === "PURPLE")  return "purple";
        else                        return "white"
    }

    const handleSnippetSelect = (snippetId) => {
        const fetchSnippetData = async () => {
            const snippet = await getSnippetById(snippetId);
            setSnippetData(snippet);
        }
        fetchSnippetData();
        setSnippetPopup(true);
    }

    const handleCreateSnippet = () => {
        const createEmptySnippet = async () => {
            const snippetToCreate = emptySnippet;
            snippetToCreate.folderId = folderId;
            const snippet = await createSnippet(snippetToCreate);
            setSnippetData(snippet);
        }
        createEmptySnippet();
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
                        {snippet?.tags?.map((tag)=>{
                            return ( <div style={{"border": "1px solid "+ colorTag(tag.color)}} className="snippetTag" key={tag.id}>{tag.name}</div> )
                        })}
                    </div>
                </div> )
            })}
            {snippetPopup && <SnippetPopup snippetData={snippetData} setSnippetData={setSnippetData} setPopup={setSnippetPopup} userTags={userTags}/>}
            </div>
        </div>
    )
}

export default SnippetsContainer;