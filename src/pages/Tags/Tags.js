import { useEffect, useState } from "react";
import { getTags, createNewTag, editTag, deleteTag } from "../../services/tag";
import Header from "../../components/Header/Header";

const Tags = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState({ name:'', color:null });

    useEffect(() => {
        const fetchTags = async () => {
            const tagsFetched = await getTags();
            setTags(tagsFetched);
        }
        fetchTags();
    }, [])

    const handleNewTag = async () => {
        const tagCreated = await createNewTag(tag);
        if(tagCreated) {
            window.location.reload(false);
        }
    }

    const handleEditTag = async (tagToEdit) => {
        await editTag(tagToEdit);
        window.location.reload(false);
    }

    const handleDeleteTag = async (tagId) => {
        await deleteTag(tagId);
        window.location.reload(false);
    }

    return(
        <div>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
            <h1>Tags</h1>
                {tags.map((tag) => {
                    return(
                        <h1>{tag.name}</h1>
                        )
                    })}
            </div>
        </div>
    )
}

export default Tags;