import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #272823;
  border-top: 1px solid #666;
  padding: 10px 50px;
  width: 100%;

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
  justify-content: space-evenly;
  text-align: center;
`;

export const MiddleSquare = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10px;
  padding: 10px;
`;

export const MiddleTop = styled.div`
  displey: flex;
  flex-direction: column;
`

export const Title = styled.div`
  color: white;
  font-weight: bolder;
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
  margin: 4px 0;
  text-decoration: none;
  color: white;
  `;

export const Reference = styled.a`
  padding: 5px 5px 5px 0;
  color: white;
`;

export const Bottom = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  margin: 20px 0 20px 0;
`;

