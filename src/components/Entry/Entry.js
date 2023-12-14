import {
    EntryContainer,
    EntryUpperPart,
    Logo,
    Header,
    MessageBoard,
    LogoMessage
} from "./styles";

import Login from "../Login/Login"
import Footer from "../Footer/Footer"
import logo from "../../images/logobranca.png";


const Entry = () => {
    return (
        <EntryContainer>
            <Header>
                <Logo src={logo} alt="Ícone ST" />
            </Header>
            <EntryUpperPart>
                <MessageBoard>
                <LogoMessage src={logo} alt="Ícone ST"/>
                    O Snippet Tool é uma ferramenta criada para ajudar desenvolvedores a armazenar e organizar seus trechos de código de modo a reutilizá-los de forma simples. Armazene seu código e pesquise por tags, diretórios e palavras chaves. Crie sua conta e experimente as facilidades que o sistema pode te oferecer.

                </MessageBoard>
                <Login/>
            </EntryUpperPart>

            <Footer/>
        </EntryContainer>
    )
}

export default Entry