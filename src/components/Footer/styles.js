import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a0a0a;
  padding: 20px;

`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LogoSnippet = styled.img`

`

export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5%;
`;

export const MiddleSquare = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  gap: 10px;
  padding: 10px;
`;

export const MiddleTop = styled.div`
  displey: flex;
  flex-direction: column;
`

export const Title = styled.div`
  color: white;
`;

export const Underline = styled.div`
  width: 60px;
  height: 2px;
  background: white;
  border-radius: 9px;
`

export const List = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.a`
  padding: 5px;
  text-decoration: none;
  color: white;
`;

export const Bottom = styled.div`
  color: white;
  display: flex;
  padding: 5px;
`;

