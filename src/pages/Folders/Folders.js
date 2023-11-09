import { useEffect, useState } from "react";
import { getAllFolders } from "../../services/folder";

const Folders = () => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            const foldesFetched = await getAllFolders;
            setFolders(foldesFetched);
        }
        fetchTags();
    }, [])

    return(
        <h1>Folders</h1>
    )
}

export default Folders;