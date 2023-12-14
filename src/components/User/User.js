import React, { useState } from "react";

import LinkDropdown from "../Common/Dropdown/LinkDropdown";
import { UserContainer, UserButton, UserIcon } from "./styles";
import userIcon from "../../images/logo-usuario.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/userSlice";

const User = () => {
    const [isOpen, setIsOpen] = useState();

    const user = useSelector(selectUser);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <UserContainer>
            <UserButton onClick={handleDropdown}>
                <UserIcon src={userIcon} alt="Ícone Usuário" />
                {user.username}
            </UserButton>
            <LinkDropdown 
                isOpen={isOpen}
            />
        </UserContainer>
    );
}

export default User;