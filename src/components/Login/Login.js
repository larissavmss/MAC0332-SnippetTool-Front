import { useState } from "react";
import {
    LoginContainer,
    SubmitContainer,
    Header,
    Inputs,
    Input,
    SubmitSelected,
    SubmitUnselected,
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
import {
    login,
    selectUser
} from '../../features/auth/userSlice'
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [action, setAction] = useState("Login")
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const user = useSelector(selectUser);
    console.log(user);
    const dispatch = useDispatch();

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
        if (action === "Login") {
            setAction("SignUp");
        } else {
            // Check if account already exists and, if not, create new account
            // Then, tell the home page to change the screen
        }
    }
    const handleClickLogin = (event) =>{
        if (action === "SignUp") {
            setAction("Login");
        } else {
            dispatch(login({username: userEmail, token: "random"}))
            window.location.href = '/';
        }
    }

    return (
        <LoginContainer>
            <Header>
                <Text> {action}</Text>
                <Underline></Underline>
            </Header>
            <Inputs>
                {action === 'SignUp' && (
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
                )}
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
            
            {action === 'SignUp' && (
                <SubmitContainer>
                    <SubmitSelected onClick={handleClickSignUp}>
                        Sign Up
                    </SubmitSelected>
                    <SubmitUnselected onClick={handleClickLogin}>
                        Login
                    </SubmitUnselected>
                </SubmitContainer>
            )}
            {action === 'Login' && (
                <SubmitContainer>
                    <SubmitUnselected onClick={handleClickSignUp}>
                        Sign Up
                    </SubmitUnselected>
                    <SubmitSelected onClick={handleClickLogin}>
                        Login
                    </SubmitSelected>
                </SubmitContainer>
            )}
        </LoginContainer>
    )
}

export default Login