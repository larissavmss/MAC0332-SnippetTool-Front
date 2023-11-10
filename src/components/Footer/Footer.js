import React from 'react';

import {
    FooterContainer,
    Top,
    Middle,
    MiddleTop,
    Underline,
    MiddleSquare,
    Title,
    List,
    Content,
    Bottom,
    LogoSnippet
} from "./styles";

import logo from "../../images/logobranca.png";


const Footer = () => {
    return (
        <FooterContainer>
            <Top>
                {/* <LogoSnippet 
                    src={logo}
                    alt="Snippet Logo"
                    style={{width: "6%"}}
                /> */}
            </Top>
            <Middle>
                <MiddleSquare>
                    <MiddleTop>
                        <Title>GitHub Repositories</Title>
                        <Underline></Underline>
                    </MiddleTop>
                    <List>
                        <Content 
                            href="https://github.com/mac0332/MAC0332-SnippetTool-Front">Frontend Repository</Content>
                        <Content href="https://github.com/mac0332/MAC0332-SnippetTool-API">Backend Repository</Content>
                    </List>
                </MiddleSquare>
                <MiddleSquare>
                    <MiddleTop>
                        <Title>Developers</Title>
                        <Underline></Underline>
                    </MiddleTop>
                    <List>
                        <Content >Larissa Medeiros</Content>
                        <Content>Kaique Oliveira</Content>
                        <Content>Cássio Cancio</Content>
                        <Content>Gabriel Arrais</Content>
                        <Content>Nathan Nunes</Content>
                    </List>
                </MiddleSquare>
                <MiddleSquare>
                    <MiddleTop>
                        <Title>Professor</Title>
                        <Underline></Underline>    
                    </MiddleTop>
                    <List>
                        <Content>Paulo Meireles</Content>
                    </List>
                </MiddleSquare>
            </Middle>
            <Bottom>@2023 - Software Engineering Project</Bottom>
        </FooterContainer>
    )
}

export default Footer