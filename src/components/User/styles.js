import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const UserContainer = styled.div`
position: relative;
display: inline-block;
max-height: 10%;
`;

export const UserButton = styled.button`
padding: 10px 20px;
font-size: 16px;
border: none;
background-color: ${grey};
color: #fff;
cursor: pointer;
width: 100%;
display: flex;
align-items: center;

&:hover {
    background-color: #333;
}
`;

export const UserIcon = styled.img`
margin-right: 10px;
height: 20px;
`;