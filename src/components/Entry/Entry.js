import {
    EntryContainer,
    EntryUpperPart,
    MessageBoard,
    DivisionLine
} from "./styles";

import Login from "../Login/Login"
import Footer from "../Footer/Footer"


const Entry = () => {
    return (
        <EntryContainer>
            <EntryUpperPart>
                <MessageBoard>
                    Blah blah blah, texto texto
                </MessageBoard>

                <DivisionLine>

                </DivisionLine>
                
                <Login/>
            </EntryUpperPart>

            <Footer/>
        </EntryContainer>
    )
}

export default Entry