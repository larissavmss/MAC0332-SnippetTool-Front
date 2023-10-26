
import {
    LoginContainer,
} from "./styles"

import logo from "../../images/logobranca.png";
import email_icon from "../../images/email_icon.png";
import password_icon from "../../images/password_icon.png";
import usuario_icon from "../../images/logo-usuario.png";

const Login = () => {
    return (
        <div className='container' style={{ paddingTop: "60px" }}>
            <LoginContainer>
                <p> Este é o SnippetTool, a melhor ferramenta online e 
                    gratuita para programadores armazenarem seus snippets.
                    Tá passada? Então vem com a gente!!!
                </p>
                <Header>
                    <div className="text"> Sign Up</div>
                    <div className="underline"></div>
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
                <div className="forgot-password">Lost Password? <span>Click here</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login</div>
                </div>
                Teste
            </LoginContainer>
        </div>
    )
}

export default Login