import { useEffect, useState } from "react";
import { getTags, createNewTag, editTag, deleteTag } from "../../services/tag";
import Header from "../../components/Header/Header";
import "./Tags.css"
import tagAdd from "../../images/tagAdd.png"
import redTagIcon from "../../images/tag_vermelho.png"
import blueTagIcon from "../../images/tag_azul.png"
import yellowTagIcon from "../../images/tag_amarelo.png"
import greenTagIcon from "../../images/tag_verde.png"
import orangeTagIcon from "../../images/tag_laranja.png"
import purpleTagIcon from "../../images/tag_roxo.png"
import whiteTagIcon from "../../images/tag_branco.png"
import { Link } from "react-router-dom";

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
        if(tag.color != null){
            const tagCreated = await createNewTag(tag);
            if(tagCreated) {
                window.location.reload(false);
            }
        } else {
            window.alert("Selecione uma cor");
        }
    }

    const selectColor = (colorName) =>{
        if (colorName == "RED") return redTagIcon;
        if (colorName == "BLUE") return blueTagIcon;
        if (colorName == "YELLOW") return yellowTagIcon;
        if (colorName == "GREEN") return greenTagIcon;
        if (colorName == "ORANGE") return orangeTagIcon;
        if (colorName == "PURPLE") return purpleTagIcon;
        else return whiteTagIcon
    }

    const handleChangeColor = (color) => {
        setTag({
            ...tag,
            color: color
        })
    }

    return(
        <div>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <div className={`content ${openMenu ? 'content-menu-aberto' : ''}`}>
                
                <div className="titleAndAdd">
                    <h1>Tags</h1>
                    <div className="flexAdd">
                        <input placeholder="Nome da tag" className="addInputTag" value={tag.name} onChange={(e) => setTag({...tag, name: e.target.value})}/>
                        <select className="addSelectTag" onChange={(e) => handleChangeColor(e.target.value)}>
                            <option value={null} >Escolha cor</option>
                            <option value="RED">Vermelho</option>
                            <option value="BLUE">Azul</option>
                            <option value="YELLOW">Amarelo</option>
                            <option value="GREEN">Verde</option>
                            <option value="ORANGE">Laranja</option>
                            <option value="PURPLE">Roxo</option>
                        </select>
                        <div className="addButtonTag" onClick={handleNewTag}><img src={tagAdd}/></div>
                    </div>
                </div>

                <div className="tagWrap">
                    {tags.map((tag) => {
                        return(
                            <Link className="tagContainer" to={`/tag/${tag.id}`} style={{ textDecoration: "none" }}>
                                <img alt={"Tag with color" + tag.color} src={selectColor(tag.color)}/>
                                <h3>{tag.name}</h3>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Tags;