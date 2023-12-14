import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const LoginContainer = styled.div`
    background-color: #272823;
    border: 1px solid #666;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    border-radius: 10px;
    width: 40%;
    height: 500px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
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
    display: flex;
    height: 250px;
    width: 100%;
    flex-direction: column;
`
export const Input = styled.div`
    display:flex;
    align-items: center;
    margin: 10px auto;
    width: 100%;
    height: 60px;
    border: 2px solid #555;
    border-radius: 5px;
`
export const UserIcon = styled.img`
    margin: 0px 15px;
    width: 20px;
`
export const EmailIcon = styled.img`
    margin: 0px 15px;
    width: 20px;
`
export const PasswordIcon = styled.img`
    margin: 0px 15px;
    width: 20px;
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
    width: 100%;
    gap: 5%;
    margin: 30px auto;
`
export const SubmitSelected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 59px;
    color: #fff;
    background: red;
    border-radius: 5px;
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
    border-radius: 5px;
    font-size: 19px;
    font-weight: 700;
    cursor: pointer;
`
