import React from 'react';

import {
    FooterContainer,
    Top,
    Middle,
    MiddleTop,
    MiddleSquare,
    Title,
    List,
    Content,
    Bottom,
    Reference,
} from "./styles";

import logo from "../../images/logobranca.png";


const Footer = () => {
    return (
        <FooterContainer>
            <Middle>
                <MiddleSquare>
                    <MiddleTop>
                        <Title>Repositórios do GitHub</Title>
                    </MiddleTop>
                    <List>
                        <Reference href="https://github.com/mac0332/MAC0332-SnippetTool-Front">Frontend</Reference>
                        <Reference href="https://github.com/mac0332/MAC0332-SnippetTool-API">Backend</Reference>
                    </List>
                </MiddleSquare>
                <MiddleSquare>
                    <MiddleTop>
                        <Title>Desenvolvedores</Title>
                    </MiddleTop>
                    <List>
                        <Content>Cássio Cancio, Gabriel Arrais,</Content>
                        <Content>Kaique Oliveira, Larissa Medeiros,</Content>
                        <Content>Nathan Nunes</Content>
                    </List>
                </MiddleSquare>
                <MiddleSquare>
                    <MiddleTop>
                        <Title>Professor</Title>
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