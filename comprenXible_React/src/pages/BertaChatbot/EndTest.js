import './Chatbot.css';
import React from 'react';
// import {useHistory} from 'react-router-dom';
import {
    Link
} from "react-router-dom";


function EndTestWidget(){
    // const history = useHistory();
    
    return (
        // <button className="widget" onclick={()=>history.push("src/components/testResult/TestResult.js")}>Finalizar Test</button>
        <div className="widgetDiv">
            <Link className="widget" to="/TestResult"><b>Finalizar test</b></Link>
        </div>
    )
}

export default EndTestWidget;