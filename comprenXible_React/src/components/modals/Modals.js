import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import './modals.css'


function Modals(props) {
    const [showModal, setShowModal] = useState(false);
    if (showModal) {
        return (
            <>
                <span className="quitTest" id="modalButton" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faTimesCircle} /></span>
                <div className="modalContainer" id="modal">
                    <div className="modalContent">
                        {props.close === true ? <span className="modalClose" onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimesCircle} /></span> : <span></span>}
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
            <span className="quitTest" id="modalButton" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faTimesCircle} /></span>
        )
    }
}

export default Modals;


