import { useState } from "react";
import {
    LoginContainer,
    SubmitContainer,
    Header,
    Inputs,
    Input,
    Submit,
    UserIcon,
    EmailIcon,
    PasswordIcon,
    InsideInput,
    Text,
    Underline,
    ForgotPassaword
} from "./styles";

import logo from "../../images/logobranca.png";
import email_icon from "../../images/email_icon.png";
import password_icon from "../../images/password_icon.png";
import usuario_icon from "../../images/logo-usuario.png";

const Login = () => {

    const [action, setAction] = useState("Login")

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    return (
        <div className='container' style={{ paddingTop: "60px" }}>
            <LoginContainer>
                <p> Este é o SnippetTool, a melhor ferramenta online e 
                    gratuita para programadores armazenarem seus snippets.
                    Tá passada? Então vem com a gente!!!
                </p>
                <Header>
                    <Text> Sign Up</Text>
                    <Underline></Underline>
                </Header>
                <Inputs>
                    <Input>
                        <UserIcon 
                            src={usuario_icon} 
                            alt="User Icon"
                        />
                        <InsideInput 
                            type="text"
                            placeholder="Usuário"
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                    </Input>
                    <Input>
                        <EmailIcon src={email_icon} alt=""/>
                        <InsideInput 
                            type="email"
                            placeholder="E-mail"
                            value={userEmail}
                            onChange={handleUserEmailChange}
                        />
                    </Input>
                    <Input>
                        <PasswordIcon 
                            src={password_icon} 
                            alt=""
                        />
                        <InsideInput 
                            type="password"
                            placeholder="Password"
                            value = {userPassword}
                            onChange={handleUserPasswordChange}
                        />
                    </Input>
                </Inputs>
                <ForgotPassaword>Lost Password? <span>Click here</span></ForgotPassaword>
                <SubmitContainer>
                    <Submit>Sign Up</Submit>
                    <Submit>Login</Submit>
                </SubmitContainer>
                Teste
            </LoginContainer>
        </div>
    )
}

export default Login