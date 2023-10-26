import { useState } from "react";
import {
    LoginContainer,
    LeftContainer,
    RightContainer,
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

    const handleUserNameChange = () => {
        
    }
    const handleUserEmailChange = () => {
        
    }
    const handleUserPasswordChange = () => {
        
    }

    return (
        <div className='container' style={{ paddingTop: "60px" }}>
            <LoginContainer>
                <LeftContainer>
                    <p> 
                        Como essa é uma tela de inicial, acho que esse espaço aqui sera bom
                        para deixar algum comentário introdutório de aprensentação ou coisa assim.
                    </p>
                </LeftContainer>
                <RightContainer>
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
                            <EmailIcon 
                                src={email_icon} 
                                alt="Email Icon"
                                style={{width: "30px"}}
                            />
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
                                style={{width: "30px"}}
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
                </RightContainer>
            </LoginContainer>
        </div>
    )
}

export default Login