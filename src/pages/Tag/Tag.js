import './Tag.css';
import { useParams } from "react-router-dom";
import SnippetsContainer from "../../components/SnippetsContainer/SnippetsContainer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import editIcon from "../../images/pen.png";
import confirmIcon from "../../images/confirm.png";
import emptySnippet from '../../utils/constants/emptySnippet';
import { deleteTag, editTag, getTag } from '../../services/tag';
import { getTagSnippets } from '../../services/snippet';

const Tag = () => {
    const { tagId } = useParams();
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ tag, setTag ] = useState({name:"", color: null});
    const [ allowEditTag, setAllowEditTag ] = useState(false);
    const [ snippetData, setSnippetData ] = useState(emptySnippet);
    const [ filter, setFilter ] = useState("");

    useEffect(() => {
        const fetchTagName = async () => {
            const tagById = await getTag(tagId);
            if(tagById){
                setTag(tagById);
            } else {
                window.alert("Falha ao pegar dados da Tag");
            }
        }
        fetchTagName();
    },[])

    const handleSearch = async (filter) => {
        setFilter(filter);
    }

    const handleEditTag = async () => {
        const tagEdited = await editTag(tag);
        if(tagEdited) {
            setAllowEditTag(false);
            window.location.href = '/tag/'+tagId;
        }
    }

    const handleDeleteTag = async () => {
        const tagRemoved = await deleteTag(tagId);
        if(tagRemoved){
            window.location.href = '/tags';
        }else {
            window.alert("Falha ao deletar tag " + tag.name);
        }
    }

    return (
        <div className="mainPage">
            <Header
                openMenu={openMenu} 
                setOpenMenu={setOpenMenu}
                handleSearch={handleSearch}
            />

            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                <div className="tagInfo">
                    {allowEditTag ? 
                        <div className='flexTagInfo'>
                            <input value={tag.name} onChange={(e)=>{setTag({...tag, name:e.target.value})}}/>
                            <img src={confirmIcon} alt="confirm" onClick={handleEditTag}/>
                        </div> :
                        <div className='flexTagInfo'>
                            <h1>{tag.name}</h1>
                             <img src={editIcon} alt={"edit"} onClick={()=>{setAllowEditTag(true)}}/>
                        </div>
                    }
                    <button onClick={handleDeleteTag}>Apagar Tag</button>
                </div>
                <SnippetsContainer filter={filter} id={tagId} getUserSnippets={getTagSnippets} snippetData={snippetData} setSnippetData={setSnippetData} tagPage={true}/>
            </div>
        </div>
    )
}

export default Tag;