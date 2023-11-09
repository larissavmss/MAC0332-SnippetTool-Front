import { useEffect, useState } from "react";
import { createNewFolder, deleteFolder, editFolder, getAllFolders } from "../../services/folder";

const Folders = () => {
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
            {folders.map((folder) => {
                return(
                    <h1>{folder.name}</h1>
                )
            })}
        </div>
    )
}

export default Folders;