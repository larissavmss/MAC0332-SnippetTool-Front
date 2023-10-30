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
import usuario_icon from "../../images/black_user_icon.png";

const Login = () => {

    const [action, setAction] = useState("Login")

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    }
    const handleUserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    }
    const handleClickSignUp = (event) =>{
        setAction("SignUp")
    }
    const handleClickLogin = (event) =>{
        setAction("Login")
    }
    return (
        <div className='container'>
            <LoginContainer>
                <Header>
                    <Text> {action}</Text>
                    <Underline></Underline>
                </Header>
                <Inputs>
                    <Input>
                        <UserIcon 
                            src={usuario_icon} 
                            alt="User Icon"
                            style={{width: "30px"}}
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
                    <Submit onClick={handleClickSignUp}>
                        Sign Up
                    </Submit>
                    <Submit onClick={handleClickLogin}>
                        Login
                    </Submit>
                </SubmitContainer>  
            </LoginContainer>
        </div>
    )
}

export default Login