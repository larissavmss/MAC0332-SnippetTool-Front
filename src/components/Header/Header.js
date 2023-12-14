import User from "../User/User";
import {
  FlexButtons,
  HeaderContainer,
  IconMenu,
  InsideSearchBar,
  LeftContainer,
  Logo,
  MenuButton,
  RightContainer,
  SearchBar,
  SignIn,
  SignUp,
  LupinhaIcon, // Import LupinhaIcon
} from "./styles";
import menu from "../../images/menu.png";
import logo from "../../images/logobranca.png";
import lupinha from "../../images/lupinha_3.png"; // Import the lupinha image
import { useState } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from '../../features/auth/userSlice'; 

const Header = ({ openMenu, setOpenMenu, handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const user = useSelector(selectUser);

  const userIsLogged = user.isAuthenticated;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchText);
    }
  };

  return (
    <div style={{ paddingTop: "60px" }}>
      <HeaderContainer>
        <LeftContainer>
          <MenuButton onClick={toggleMenu}>
            <IconMenu src={menu} alt="Menu" />
          </MenuButton>
          <Logo src={logo} alt="Ícone ST" />
          <SearchBar>
            <LupinhaIcon
              src={lupinha}
              alt="Search"
              onClick={() => handleSearch(searchText)}
            />
            <InsideSearchBar
              type="text"
              placeholder="Pesquisar"
              value={searchText}
              onChange={handleSearchChange}
              onKeyPress={handleEnterKeyPress}
            />
          </SearchBar>
        </LeftContainer>
        <RightContainer>
          {userIsLogged ? (
            <User />
            ) : (
              <FlexButtons>
              <Link to="/entry" style={{ textDecoration: "none" }}>
                <SignIn> Sign In </SignIn>
              </Link>
              <Link to="/entry" style={{ textDecoration: "none" }}>
                <SignUp> Sign Up </SignUp>
              </Link>
            </FlexButtons>
          )}
        </RightContainer>
      </HeaderContainer>
      {openMenu && <Menu />}
    </div>
  );
};

export default Header;
