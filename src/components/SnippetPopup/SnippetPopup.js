import { useEffect, useState } from "react";
import "./SnippetPopup.css";
import { associateTagToSnippet, createSnippet, deleteSnippet, getSnippetById, saveSnippet } from "../../services/snippet";
import { createNewTag } from "../../services/tag";
import closeIcon from "../../images/close.png";
import plusIcon from "../../images/plus.png"
import ConfirmationPopUp from "../ConfirmationPopUp/ConfirmationPopUp";
import emptySnippet from "../../utils/constants/emptySnippet";

const SnippetPopup = ({snippetId, setPopup}) => {
    const [snippetData, setSnippetData] = useState(emptySnippet);
    const [tagCreateOption, setTagCreateOption] = useState(false);
    const [tagToCreate, setTagToCreate] = useState({ name: "", color: "red" });

    useEffect(() => {
        let snippet = null;
        const fetchSnippetData = async () => {
            snippet = await getSnippetById(snippetId);
            setSnippetData(snippet);
        }
        const createEmptySnippet = async () => {
            snippet = await createSnippet(snippetId);
            setSnippetData(snippet);
        }
        
        if(snippetId !== 0) {
            fetchSnippetData();
        } else {
            createEmptySnippet();
        }
    }, [snippetId])

    const handleClosePopup = () =>{
        setPopup(false);
    }

    const handleTagCreate = (tag) => {
        const createTag = async () => {
            const tagCreated = await createNewTag(tag);
            if(tagCreated != null){
                setTagCreateOption(false);
                snippetData.tags.push(tagCreated);
                setTagToCreate({ name: "", color: "red" });
                const tagAssociatedToSnippet = await associateTagToSnippet(snippetData.id, tagCreated.id);
                if(tagAssociatedToSnippet) {

                } else {
                    window.alert("Erro ao associar tag ao snippet");
                    // deletar snippet ou mudar endpoint
                }
            } else {
                window.alert("Erro ao criar Tag");
            }
        }
        createTag();
    }

    const handleSaveSnippet = async () => {
        let snippetSaved = false;
        snippetSaved = await saveSnippet(snippetData);

        if(snippetSaved){
            setPopup(false);
        } else {
            window.alert("Erro ao salvar snippet");
        }
    }

    const handleDeleteSnippet = async () => {
        const snippetDeleted = await deleteSnippet(snippetData.id);
        if(snippetDeleted){
            window.location.reload();
        } else {
            window.alert("Erro ao deletar snippet");
        }
    }

    const handleObjectInput = ({name, value}) => {
        setSnippetData({
            ...snippetData, 
            [name]:value
        });
    }

    return (
        <div className="backShadow" onClick={(event) => {if (event.target === event.currentTarget) {handleClosePopup()}}}>
            <div className="popupSnippet">
            <button className="closeIcon" onClick={handleClosePopup}>
                <img src={closeIcon} alt={"close icon"}/>
            </button>
            {(snippetData != null)?(
                <div className="snippetDisplay">
                    

                    <div className="leftPopUp">
                        <textarea type="text" value={snippetData.content} onChange={(e) => handleObjectInput({ name:'content', value: e.target.value })}/>
                    </div>
                    <div className="rightPopUp">
                        <div>
                            <textarea type="text" value={snippetData.name} onChange={(e) => handleObjectInput({ name:'name', value: e.target.value })}/>
                            <h3>Data de criação:  <br/>{new Date(snippetData.creation_date).toLocaleDateString()}</h3>
                            <h3>Data de modificação:  <br/>{new Date(snippetData.last_modification).toLocaleDateString()}</h3>

                            <div className="tagContainerPopUp">
                                {snippetData.tags.map((tag)=>{
                                    return ( <div className="snippetTag" key={tag.id}>{tag.name}</div> )
                                })}
                                {tagCreateOption ? <input className="snippetTagInput"/> : <div className="additionButton" onClick={()=>setTagCreateOption(true)}><img src={plusIcon}/></div>}
                            </div>
                        </div>
                        <div className="columnFlexPopUP">
                            <button onClick={handleDeleteSnippet}>Deletar</button>
                            <button onClick={handleSaveSnippet}>Salvar</button>
                        </div>
                    </div>


                </div>
            ) : (
                <div className="snippetErrorDisplay">
                    <h2>Erro ao carregar o snippet</h2>
                </div>
            )}

            </div>

            {/* <ConfirmationPopUp popUpMessage={"Tem certeza que deseja excluir?"}/> */}
        </div>
    )
}

export default SnippetPopup;