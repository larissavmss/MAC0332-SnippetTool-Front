import './Folder.css';
import { useParams } from "react-router-dom";
import SnippetsContainer from "../../components/SnippetsContainer/SnippetsContainer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { deleteFolder, editFolder, getFolderById } from '../../services/folder';
import editIcon from "../../images/pen.png";
import confirmIcon from "../../images/confirm.png";
import deleteIcon from "../../images/delete.png";
import emptySnippet from '../../utils/constants/emptySnippet';

const Folder = () => {
    const { folderId } = useParams();
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ folderName, setFolderName ] = useState("");
    const [ allowEditFolder, setAllowEditFolder ] = useState(false);
    const [snippetData, setSnippetData] = useState(emptySnippet);

    useEffect(() => {
        const fetchFolderName = async () => {
            const folderById = await getFolderById(folderId);
            setFolderName(folderById.name);
        }
        fetchFolderName();
    },[])

    const handleEditFolder = async () => {
        const folderEdited = await editFolder(folderName, folderId);
        if(folderEdited) {
            setAllowEditFolder(false);
        }
    }

    const handleDeleteFolder = async () => {
        const folderRemoved = await deleteFolder(folderId);
        if(folderRemoved) {
            window.location.href = '/folders';
        } else {
            window.alert("Falha ao delete pasta " + folderName);
        }
    }
    
    return (
        <div className="mainPage">
            <Header
                openMenu={openMenu} 
                setOpenMenu={setOpenMenu}
            />

            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                <div className="folderInfo">
                    {allowEditFolder ? 
                        <div>
                            <input value={folderName} onChange={(e)=>{setFolderName(e.target.value)}}/>
                            <img src={confirmIcon} alt="confirm" onClick={handleEditFolder}/>
                        </div> :
                        <div>
                            <h1>{folderName}</h1>
                            {folderName === "Default"? null : <img src={editIcon} alt={"edit"} onClick={()=>{setAllowEditFolder(true)}}/>}
                        </div>
                    }
                    {folderName === "Default"? null : <img alt="delete" src={deleteIcon} onClick={handleDeleteFolder}/>}
                </div>
                <SnippetsContainer folderId={folderId} snippetData={snippetData} setSnippetData={setSnippetData}/>
            </div>
        </div>
    )
}

export default Folder;