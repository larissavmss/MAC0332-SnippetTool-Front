import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const EntryContainer =  styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${grey};
`;

export const EntryUpperPart =  styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 20px;
`;

export const Header = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
    background-color: black;
`;

export const Logo = styled.img`
  margin: 0 40px;
  width: 90px;
  height: auto;
`;