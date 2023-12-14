import { useEffect, useState } from "react";
import { createNewFolder, getAllFolders } from "../../services/folder";
import Header from "../../components/Header/Header";
import folderIcon from "../../images/folder_vermelho.png";
import folderAdd from "../../images/addFolder.png"
import './Folders.css'
import { Link } from "react-router-dom";
const Folders = () => {
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ folderName, setFolderName ] = useState("");
    const [ folders, setFolders ] = useState([]);

    useEffect(() => {
        const fetchFolders = async () => {
            const foldersFetched = await getAllFolders();
            setFolders(foldersFetched);
        }
        fetchFolders();
    }, [])

    const handleNewFolder = async () => {
        const folderCreated = await createNewFolder(folderName);
        if(folderCreated) {
            window.location.reload(false);
        }
    }

    const handleSearch = async (filter) => {
        const foldersFetched = await getAllFolders(filter);
        setFolders(foldersFetched);
    }

    return(
        <div>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} handleSearch={handleSearch}/>
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                
                <div className="titleAndAdd">
                    <h1>Pastas</h1>
                    <div className="flexAdd">
                        <input placeholder="Nome da pasta" className="addInputFolder" value={folderName} onChange={(e)=>{setFolderName(e.target.value)}}/>
                        <div className="addButtonFolder" onClick={handleNewFolder}><img src={folderAdd} alt="Add"/></div>
                    </div>
                </div>

                <div className="folderWrap">
                    {folders.map((folder) => {
                        return(
                            <Link className="folderContainer" to={`/folder/${folder.id}`} style={{ textDecoration: "none" }}>
                                <img src={folderIcon} alt="Pasta"/>
                                <h3>{folder.name}</h3>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Folders;