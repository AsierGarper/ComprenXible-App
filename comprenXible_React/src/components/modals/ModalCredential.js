import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import './modals.css'


function ModalCredential(props) {
    const [showModal, setShowModal] = useState(true);
    if (showModal) {
        return (
            <>
                <div className="modalContainer" id="modal">
                    <div className="modalContent">
                        <span className="modalClose" onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimesCircle} /></span>
                        <p>{props.text}</p>
                        <div className="quitTestButton">
                            <Link to={props.url} className="button button--bgSolid-turquoise">{props.urlText}</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <span></span>
        )
    }
}

export default ModalCredential;


