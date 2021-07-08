import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import './modals.css'


function Modals() {
    const [showModal, setShowModal] = useState(false);
    if (showModal) {
        return (
            <>
                <span className="quitTest" id="modalButton" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faTimesCircle} /></span>
                <div className="modalContainer" id="modal">
                    <div className="modalContent">
                        <span className="modalClose" onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimesCircle} /></span>
                        <p>¿Estás seguro de que quieres salir? Perderás todos tus progresos.</p>
                        <div className="quitTestButton">
                            <Link to="/" className="button button--bgSolid-turquoise">Abandonar test</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <span className="quitTest" id="modalButton" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faTimesCircle} /></span>
        )
    }
}

export default Modals;


