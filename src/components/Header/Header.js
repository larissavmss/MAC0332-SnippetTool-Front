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

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchText, setSearchText] = useState("");

  const userIsLogged = false;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Perform the search action with the searchText
    console.log("Performing search with text: " + searchText);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      // Perform the search action with the searchText
      console.log("Performing search with text: " + searchText);
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
              onClick={handleSearch}
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
              <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <SignIn> Sign In </SignIn>
              </Link>
              <Link to="/sign-up" style={{ textDecoration: "none" }}>
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
