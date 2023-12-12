import { useEffect, useState } from "react";
import "./SnippetPopup.css";
import { associateTagToSnippet, createSnippet, deleteSnippet, getSnippetById, saveSnippet } from "../../services/snippet";
import { createNewTag } from "../../services/tag";
import closeIcon from "../../images/close.png";
import plusIcon from "../../images/plus.png"
import ConfirmationPopUp from "../ConfirmationPopUp/ConfirmationPopUp";
import emptySnippet from "../../utils/constants/emptySnippet";
import tagAdd from "../../images/tagAdd.png"

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

    const colorTag = (colorName) => {
        if (colorName == "RED")     return "red";
        if (colorName == "BLUE")    return "blue";
        if (colorName == "YELLOW")  return "yellow";
        if (colorName == "GREEN")   return "green";
        if (colorName == "ORANGE")  return "orange";
        if (colorName == "PURPLE")  return "purple";
        else                        return "white"
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
                            <input className="titleInputPopUp" type="text" value={snippetData.name} onChange={(e) => handleObjectInput({ name:'name', value: e.target.value })}/>
                            <h3>Data de criação:  <br/>{new Date(snippetData.creation_date).toLocaleDateString()}</h3>
                            <h3>Data de modificação:  <br/>{new Date(snippetData.last_modification).toLocaleDateString()}</h3>

                            <h3 className="tagTitlePop">Tags</h3>
                            <div className="tagContainerPopUp">
                                {snippetData.tags.map((tag)=>{
                                    return ( 

<div className="snippetTagPopUp" style={{"border": "1px solid "+ colorTag(tag.color)}} key={tag.id}>{tag.name} <img className="iconTagClose" src={closeIcon}/> </div> 

)
                                })}
                            </div>
                            
                            <div className="tagAddFlex">
                                <select>
                                    <option disabled selected>Associar tag</option>
                                </select>
                                <button><img src={tagAdd}/></button>
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