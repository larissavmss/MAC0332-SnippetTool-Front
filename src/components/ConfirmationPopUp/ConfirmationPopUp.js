import { useEffect, useState } from "react";
import './ConfirmationPopUp.css'

const ConfirmationPopUp = ({popUpMessage, popUpFunction}) => {
    return (
        <div className="backShadow">
            <div className="confirmationPopUp">
                <h3>{popUpMessage}</h3>

                <div className="buttonContainer">
                    <button>Sim</button>
                    <button>Não</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPopUp;