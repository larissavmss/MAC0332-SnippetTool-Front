import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const EntryContainer =  styled.div`
display: flex;
flex-direction: column;
`;

export const EntryUpperPart =  styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-evenly;
padding: 20px;
`;

export const Header = styled.div`
width: 100%; 
display: flex;
justify-content: left;
background-color: ${grey};
border-bottom: 1px solid #666;
`;

export const Logo = styled.img`
  margin: 5px 10px;
  width: 90px;
  height: auto;
`;

export const MessageBoard = styled.div`
  color: white;
  width: 40%;
  font-size: 1.25em;
  text-align: justify;
  border-radius: 10px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoMessage = styled.img`
  width: 250px;
  margin-bottom: 25px;
`;