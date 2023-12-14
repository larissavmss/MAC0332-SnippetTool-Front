import styled from "styled-components";
import { darkGrey } from "../../utils/constants/constants";

export const Background = styled.div`
position: fixed;
background: ${darkGrey};
width: 15%;
height: 100vh;
display: flex;
flex-direction: column;
`

export const MenuButton = styled.div`
max-width: 100%;
padding: 20px 20px;
// background-color: gray;
border-bottom: 1px solid gray;
color: #ddd;
font-size: 1em;
transition: 0.25s;
display: flex;
justify-content: left;
align-items: center;

&:hover {
    transition: 0.25s;
    background-color: #444;
}

& img{
    width:20px;
    margin-right: 20px;
}
`