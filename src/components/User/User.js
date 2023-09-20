import React, { useState } from "react";

import LinkDropdown from "../Common/Dropdown/LinkDropdown";
import { UserContainer, UserButton, UserIcon } from "./styles";
import user from "../../images/logo-usuario.png";

const User = () => {
    const [isOpen, setIsOpen] = useState();
    const handleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <UserContainer>
            <UserButton onClick={handleDropdown}>
                <UserIcon src={user} alt="Ícone Usuário" />
                Username
            </UserButton>
            <LinkDropdown 
                isOpen={isOpen}
            />
        </UserContainer>
    );
}

// TODO: Change username  (Larissa)

export default User;