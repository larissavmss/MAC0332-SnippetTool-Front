import User from "../User/User";
import { FlexButtons, HeaderContainer, IconMenu, LeftContainer, Logo, MenuButton, SearchBar, SignIn, SignUp } from "./styles"
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
                <FlexButtons>
                    <Link to="/sign-in" style={{textDecoration: 'none'}}> <SignIn> Sign In </SignIn> </Link>
                    <Link to="/sign-up" style={{textDecoration: 'none'}}> <SignUp> Sign Up </SignUp> </Link>
                </FlexButtons>
                }
            </HeaderContainer>
            {openMenu && (<Menu/>)}
        </div>
    )
}
// TODO: Colocar icone de pesquisa na barra (Cassio)

export default Header;