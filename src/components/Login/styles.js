import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const LoginContainer = styled.div`
    background-color: ${grey};
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 5%;
    width: 25%;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    margin-top: 30px;
`
export const Text = styled.div`
    color: red;
    font-size: 48px;
    font-weight: 700;
`
export const Underline = styled.div`
    width: 61px;
    height: 6px;
    background: red;
    border-radius: 9px;
`
export const Inputs = styled.div`
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`
export const Input = styled.div`
    display:flex;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 80px;
    background: #eaeaea;
    border-radius: 6px;
`
export const UserIcon = styled.img`
    margin: 0px 30px;
`
export const EmailIcon = styled.img`
    margin: 0px 30px;
`
export const PasswordIcon = styled.img`
    margin: 0px 30px;
`
export const InsideInput = styled.input`
    height: 50px;
    width: 200%;
    background: transparent;
    border: none;
    outline: none;
    color: #797979;
    font-size: 19px;
`
export const ForgotPassaword = styled.div`
    margin-top:27px;
    color: #797979;
    font-size: 18px;
`
export const SubmitContainer = styled.div`
    display: flex;
    width: 90%;
    gap: 30px;
    margin: 60px auto;
`
export const SubmitSelected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 59px;
    color: #fff;
    background: red;
    border-radius: 50px;
    font-size: 19px;
    font-weight: 700;
    cursor: pointer;
`
export const SubmitUnselected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 59px;
    color: #fff;
    background: grey;
    border-radius: 50px;
    font-size: 19px;
    font-weight: 700;
    cursor: pointer;
`