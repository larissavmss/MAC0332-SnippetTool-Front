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

export const MessageBoard =  styled.div`

`;

export const DivisionLine =  styled.div`
    background-color: red;
    width: 5px;
    border-radius: 20%;
`;