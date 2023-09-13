import { Link } from 'react-router-dom';

import {DropdownMenu, DropdownOption} from "./styles";
import userMenuOptions from '../../../utils/constants/userMenuOptions';

const LinkDropdown = ({isOpen}) => {
    return (
        <>
            {isOpen && (
                <DropdownMenu>
                    {userMenuOptions.map((opt) => 
                        <Link to={opt.path}>
                            <DropdownOption>
                                {opt.placeholder}
                            </DropdownOption>
                        </Link>
                    )}
                </DropdownMenu>
            )}
        </>
    );
}

export default LinkDropdown;