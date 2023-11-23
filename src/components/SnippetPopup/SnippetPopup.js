import { useEffect, useState } from "react";
import "./SnippetPopup.css";
import { getSnippetById } from "../../services/snippet";
import { createNewTag } from "../../services/tag";
import closeIcon from "../../images/close.png";
import plusIcon from "../../images/plus.png"
import ConfirmationPopUp from "../ConfirmationPopUp/ConfirmationPopUp";

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
        <div className="backShadow" onClick={(event) => {if (event.target === event.currentTarget) {handleClosePopup()}}}>
            <div className="popupSnippet">
            <button className="closeIcon" onClick={handleClosePopup}>
                <img src={closeIcon} alt={"close icon"}/>
            </button>
            {(snippetData != null)?(
                <div className="snippetDisplay">
                    

                    <div className="leftPopUp">
                        <textarea type="text" value={snippetData.content}/>
                    </div>
                    <div className="rightPopUp">
                        <div>
                            <h2>{snippetData.name}</h2>
                            <h3>Data de criação:  <br/>{new Date(snippetData.creation_date).toLocaleDateString()} {new Date(snippetData.creation_date).toLocaleTimeString()}</h3>
                            <h3>Data de modificação:  <br/>{new Date(snippetData.last_modification).toLocaleDateString()} {new Date(snippetData.last_modification).toLocaleTimeString()}</h3>

                            <div className="tagContainerPopUp">
                                {snippetData.tags.map((tag)=>{
                                    return ( <div className="snippetTag" key={tag.id}>{tag.name}</div> )
                                })}
                                <div className="additionButton"><img src={plusIcon}/></div>
                            </div>
                        </div>
                        <div className="columnFlexPopUP">
                            <button>Deletar</button>
                            <button>Salvar</button>
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