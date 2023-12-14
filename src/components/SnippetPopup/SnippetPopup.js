import { useState } from "react";
import "./SnippetPopup.css";
import { associateTagToSnippet, deleteSnippet, disassociateTagToSnippet, saveSnippet } from "../../services/snippet";
import closeIcon from "../../images/close.png";
import tagAdd from "../../images/tagAdd.png"

const SnippetPopup = ({snippetData, setPopup, setSnippetData, userTags}) => {
    const [ tagToAssociate, setTagToAssociate ] = useState(null);

    const handleClosePopup = () =>{
        setPopup(false);
    }

    const colorTag = (colorName) => {
        if (colorName === "RED")     return "red";
        if (colorName === "BLUE")    return "blue";
        if (colorName === "YELLOW")  return "yellow";
        if (colorName === "GREEN")   return "green";
        if (colorName === "ORANGE")  return "orange";
        if (colorName === "PURPLE")  return "purple";
        else                        return "white"
    }

    const handleAssociateTag = () => {
        const associateTag = async (tag) => {
            const tagAssociatedToSnippet = await associateTagToSnippet(snippetData.id, tag.id);
            if(tagAssociatedToSnippet) {
                snippetData.tags.push(tag);
                setTagToAssociate(null);
            } else {
                window.alert("Erro ao associar tag ao snippet");
            }
        }
        if(tagToAssociate){
            associateTag(userTags[tagToAssociate]);
        } else {
            window.alert("Selecione uma tag válida");
        }
    }

    const handleDisassociateTag = async (tagId) => {
        const tagDisassociated = await disassociateTagToSnippet(snippetData.id, tagId);
        if(tagDisassociated) {
            const newTagsList = snippetData.tags.filter(tag => tag.id !== tagId);
            setSnippetData({
                ...snippetData,
                tags: newTagsList
            })
        } else {
            window.alert("Erro ao disassociar tag ao snippet");
        }
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
                            <h3>Data de criação:  <br/>{new Date(snippetData.creationDate).toLocaleDateString()}</h3>

                            <h3 className="tagTitlePop">Tags</h3>
                            <div className="tagContainerPopUp">
                                {snippetData?.tags?.map((tag)=>{
                                    return ( 
                                        <div className="snippetTagPopUp" style={{"border": "1px solid "+ colorTag(tag.color)}} key={tag.id}>{tag.name} <img onClick={() => handleDisassociateTag(tag.id)} className="iconTagClose" src={closeIcon} alt="remove tag"/> </div> 
                                    )
                                })}
                            </div>
                            
                            <div className="tagAddFlex">
                                <select value={tagToAssociate} onChange={(e) => setTagToAssociate(e.target.value)}>
                                    <option value={null} selected>Associar tag</option>
                                    {userTags.map((tag, index) => {
                                        return (
                                            <option disabled={snippetData?.tags?.find(item => item.id === tag.id)} key={index} value={index}>{tag.name}</option>
                                        )
                                    })}
                                </select>
                                <button onClick={handleAssociateTag}><img src={tagAdd} alt="Add tag"/></button>
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