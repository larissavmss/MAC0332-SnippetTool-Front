import React, { useState } from "react";

import LinkDropdown from "../Common/Dropdown/LinkDropdown";
import { UserContainer, UserButton, UserIcon } from "./styles";

const User = () => {
    const [isOpen, setIsOpen] = useState();
    const handleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <UserContainer>
            <UserButton onClick={handleDropdown}>
                <UserIcon src="./user.png" alt="Ícone" />
                Username
            </UserButton>
            <LinkDropdown 
                isOpen={isOpen}
            />
        </UserContainer>
    );
}

// TODO: Change username and fix icon image

export default User;