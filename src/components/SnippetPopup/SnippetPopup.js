import { useEffect, useState } from "react";
import "./SnippetPopup.css";
import { getSnippetById } from "../../services/snippet";
import { createNewTag } from "../../services/tag";

const SnippetPopup = ({snippetId, setPopup}) => {
    const [snippetData, setSnippetData] = useState(null);
    const [tagCreateOption, setTagCreateOption] = useState(false);
    const [tagToCreate, setTagToCreate] = useState({ name: "" });

    useEffect(() => {
        const fetchSnippetData = async () => {
            const snippet = await getSnippetById(snippetId);
            setSnippetData(snippet);
        }
        fetchSnippetData();
    })

    const handleClosePopup = () =>{
        setPopup(false);
    }

    const handleTagCreate = (tag) => {
        const createTag = async () => {
            const snippetCreated = await createNewTag(tag);
            if(snippetCreated != null){
                setTagCreateOption(false);
                snippetData.tags.push(snippetCreated);
            }
            setTagToCreate({ name: "" });
        }
        createTag();
    }

    return (
        <div className="backShadow">
            <div className="popupSnippet">
            {(snippetData != null)?(
                <div className="snippetDisplay">

                </div>
            ) : (
                <div className="snippetErrorDisplay">

                </div>
            )}

            </div>
        </div>
    )
}

export default SnippetPopup;