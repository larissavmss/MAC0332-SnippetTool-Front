import { useEffect, useState } from "react";
import { createNewFolder, deleteFolder, editFolder, getAllFolders } from "../../services/folder";
import Header from "../../components/Header/Header";
import folderIcon from "../../images/folder_vermelho.png";
import folderAdd from "../../images/addFolder.png"
import './Folders.css'
const Folders = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const [folders, setFolders] = useState([]);

    useEffect(() => {
        const fetchFolders = async () => {
            const foldersFetched = await getAllFolders();
            setFolders(foldersFetched);
        }
        fetchFolders();
    }, [])

    const handleNewFolder = async (foldername) => {
        const folderCreated = await createNewFolder(foldername);
        if(folderCreated) {
            window.location.reload(false);
        }
    }

    const handleEditFolder = async (folderToEdit) => {
        await editFolder(folderToEdit);
        window.location.reload(false);
    }

    const handleDeleteFolder = async (folderId) => {
        await deleteFolder(folderId);
        window.location.reload(false);
    }

    return(
        <div>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                
                <div className="titleAndAdd">
                    <h1>Pastas</h1>
                    <div className="flexAdd">
                        <input className="addInputFolder"/>
                        <div className="addButtonFolder"><img src={folderAdd}/></div>
                    </div>
                </div>

                <div className="folderWrap">
                    {folders.map((folder) => {
                        return(
                            <div className="folderContainer">
                                <img src={folderIcon}/>
                                <h3>{folder.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Folders;