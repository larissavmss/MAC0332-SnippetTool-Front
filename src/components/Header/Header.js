import User from "../User/User";
import { HeaderContainer, IconMenu, LeftContainer, Logo, MenuButton, SearchBar } from "./styles"
import menu from "../../images/menu.png"
import logo from "../../images/logobranca.png"
import { useState } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const userIsLogged = false; // TODO: pegar variavel global quando fizer autenticacao (Larissa)

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    console.log(openMenu);
    return (
        <div>
            <HeaderContainer>
                <LeftContainer>
                    <MenuButton onClick={toggleMenu}>
                        <IconMenu src={menu} alt="Menu"/>
                    </MenuButton>
                    <Logo src={logo} alt="Ícone ST"/>
                    <SearchBar type="text" placeholder="Pesquisar"/>
                </LeftContainer>
                {userIsLogged? <User/> : 
                <div>
                    <Link to="/sign-in">Sign In</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
                }
            </HeaderContainer>
            {openMenu && (<Menu/>)}
        </div>
    )
}
// TODO: Colocar icone de pesquisa na barra e estilizar sign in e sign up (Cassio)
export default Header;