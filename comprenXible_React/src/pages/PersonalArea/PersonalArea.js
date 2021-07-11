import React, { useEffect, useState } from "react";
// import {
//     Link
// } from "react-router-dom";
import './personalArea.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import axios from 'axios';

function PersonalArea() {

    // const [questionList, setquestionList] = useState([]);

    useEffect(() => {
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAJj6Uf5qPhtO62rz12qcz_JPW_E0fq7vU')
            .then(function (response) {
                console.log(response);
                // let provisionalQuestionList = [];
                // response.data.forEach((data) => {
                //     provisionalQuestionList.push(<p>{data.value}</p>)
                // });
                // setquestionList(provisionalQuestionList);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    return (<>
        <div className="PersonalArea">
            <Navbar />
            <div className="wrapper">
                <div className="textContainer">
                    <h4>Modifica tus datos:</h4>
                    <hr></hr>

                    <form action="modifyUserData" className="userDataForm">
                        <label htmlFor="userName">Nombre:</label><br></br>
                        <input type="text" id="optionA" name="userForm" /><br></br>
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="mail" id="optionB" name="userForm" /><br></br>
                        <label htmlFor="userSex">Sexo:</label><br></br>
                        <input type="radio" id="userSex" name="userForm" />
                        <label htmlFor="H">Hombre</label><br></br>
                        <input type="radio" id="userSex" name="userForm" />
                        <label htmlFor="M">Mujer</label><br></br>
                        <input type="radio" id="userSex" name="userForm" />
                        <label htmlFor="O">Otro</label><br></br>
                        <button type="submit" className="button button--bgTransparent-white">Guardar cambios</button>
                    </form>

                    <br></br>
                    <h4>Análisis realizados:</h4>
                    <hr></hr>
                    <table id="testRecords">
                        <tr>
                            <th>Fecha</th>
                            <th>Indicadores</th>
                            <th>Conclusión</th>
                            <th>Resultados</th>
                        </tr>
                        <tr>
                            <td>20/04/2020</td>
                            <td>12/15</td>
                            <td>Necesita atención médica.</td>
                            <button className="button button--bgTransparent-white">Enviar resultados</button>
                        </tr>
                        <tr>
                            <td>20/05/2021</td>
                            <td>3/15</td>
                            <td>No necesita atención médica.</td>
                            <button className="button button--bgTransparent-white">Enviar resultados</button>
                        </tr>
                    </table>

                </div>

            </div>
            <Footer />
        </div>
    </>)
}

export default PersonalArea;