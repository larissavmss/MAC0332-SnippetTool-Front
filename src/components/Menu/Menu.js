import { Link } from "react-router-dom";
import {
    Background,
    MenuButton
} from "./styles";

import home from "../../images/home_vermelho.png";
import tag from "../../images/tag_vermelho.png";
import folder from "../../images/folder_vermelho.png";

  
  const Menu = () => {
    return (
        <Background>
            <Link to="/" style={{ textDecoration: "none" }}>
            <MenuButton>
                <img src={home} alt="Ícone de home" /> 
                Home
            </MenuButton>
            </Link>

            <Link to="/tags" style={{ textDecoration: "none" }}>
            <MenuButton>
                <img src={tag} alt="Ícone de tag" />
                Tags
            </MenuButton>
            </Link>
            
            <Link to="/folders" style={{ textDecoration: "none" }}>
            <MenuButton>
                <img src={folder} alt="Ícone de pasta" />
                Pastas
            </MenuButton>
            </Link>

        </Background>
    );
}

export default Menu;