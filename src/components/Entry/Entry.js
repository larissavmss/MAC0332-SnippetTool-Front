import {
    EntryContainer
} from "./styles";

import Login from "../Login/Login"


const Entry = () => {
    return (
        <EntryContainer>
            <EntryUpperPart>
                <MessageBoard>

                </MessageBoard>

                <DivisionLine>

                </DivisionLine>
                
                <Login/>
            </EntryUpperPart>

            <EntryFooter>
                
            </EntryFooter>
        </EntryContainer>
    )
}