import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const HeaderContainer = styled.div`
background-color: ${grey};
color: #fff;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const LeftContainer = styled.div`
display:flex;
justify-content: left;
width: 70%;
align-items:center;
`;

export const IconMenu = styled.img`
cursor: pointer;
margin-left:20px;
height: 25px;
`;

export const Logo = styled.img`
margin: 0 40px;
width: 90px;
height: auto;
`;

export const SearchBar = styled.input`
padding: 5px 5px 5px 15px;
background-color: #666;
border-radius: 5px;
border: none;
margin: 0 10px;
width: 60%;
height:24px;
font-size: 1.0em;
color:white;
`;

export const MenuButton = styled.button`
background: none;
border: none;
cursor: pointer;
`;

export const SignIn = styled.div`
padding: 10px;
color: #ddd;
transition: 0.25s;
&:hover {
    transition: 0.25s;
    color: #999;
}

`;

export const SignUp = styled.div`
background-color: #ddd;
padding: 10px;
border-radius: 5px;
color: ${grey};
transition: 0.25s;
&:hover {
    transition: 0.25s;
    background-color: #999;
}
`;

export const FlexButtons = styled.div`
display: flex;
justify-content: space-between;
width: 160px;
`
