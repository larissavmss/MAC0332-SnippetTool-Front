import React from 'react';

import {
    FooterContainer,
    Top,
    Middle,
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
                <LogoSnippet 
                    src={logo}
                    alt="Snippet Logo"
                />
            </Top>
            <Middle>
                <MiddleSquare>
                    <Title>GitHub Repositories</Title>
                    <List>
                        <Content>LinkFront</Content>
                        <Content>LinkBack</Content>
                    </List>
                </MiddleSquare>
                <MiddleSquare>
                    <Title>Developers</Title>
                    <List>
                        <Content>LinkLarissa</Content>
                        <Content>LinkKaique</Content>
                        <Content>LinkCassio</Content>
                        <Content>LinkArrais</Content>
                        <Content>LinkNathan</Content>
                    </List>
                </MiddleSquare>
                <MiddleSquare>
                    <Title>Professor</Title>
                    <List>
                        <Content>LinkProfessor</Content>
                    </List>
                </MiddleSquare>
            </Middle>
            <Bottom>@2023 - Software Engineering Project</Bottom>
        </FooterContainer>
    )
}

export default Footer