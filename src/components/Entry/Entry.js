import {
    EntryContainer,
    EntryUpperPart,
    Logo,
    Header,
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
                {/* <MessageBoard>
                    Blah blah blah, texto texto
                </MessageBoard>

                <DivisionLine>

                </DivisionLine> */}
                <Login/>
            </EntryUpperPart>

            <Footer/>
        </EntryContainer>
    )
}

export default Entry