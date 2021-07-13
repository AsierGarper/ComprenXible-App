
import React, { useEffect, useState } from 'react';
import './Questionnaire.css';
import Modals from '../modals/Modals.js';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Question() {
    const [questionList, setquestionList] = useState([]);
    const [questionListCount, setquestionListCount] = useState(0);
    const [progressBarStatus, moveProgressBar] = useState(0);
    const [choosedOption, setChoosedOption] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios.get('https://localhost:44350/api/questions/')
            .then(function (response) {
                let provisionalQuestionList = [];
                response.data.forEach((data) => {
                    provisionalQuestionList.push(<p>{data.value}</p>)
                });
                setquestionList(provisionalQuestionList);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    useEffect(() => {
        if (choosedOption[questionListCount] !== undefined) {
            document.querySelector('#option' + choosedOption[questionListCount]).checked = true;
        }
    }, [questionListCount, choosedOption])


    function resetForm() {
        var ele = document.getElementsByName("option");
        for (var i = 0; i < ele.length; i++)
            ele[i].checked = false;
    }

    function next() {
        if (questionListCount < 8) {
            document.querySelectorAll('input[type="radio"]').forEach((elemnt) => {
                if (elemnt.checked) {
                    setquestionListCount(questionListCount + 1)
                    updateChoosenArray();
                    moveProgressBar(progressBarStatus + 12.5);
                    resetForm();
                }
            })
        }
        else {
            //Esto me lanza al componente TestResult, cuando pulsa en siguiente y no hay mas preguntas.
            //PENDIENTE, HAY QUE HACER SALTO A BERTA, ANTES DE IR AL FINAL
            history.push('/testresult');
        }
    }

    function back() {
        updateChoosenArray();
        setquestionListCount(questionListCount - 1);
        moveProgressBar(progressBarStatus - 12.5);
        resetForm();
    }

    function updateChoosenArray() {
        document.querySelectorAll('input[type="radio"]').forEach((elemnt) => {
            if (elemnt.checked) {
                let provisionalChoosedOption = choosedOption;
                provisionalChoosedOption[questionListCount] = elemnt.value;
                setChoosedOption(provisionalChoosedOption);
                console.log(choosedOption);
                sessionStorage.setItem("userAsnwersString", choosedOption)
            }
        })
    }



    return (
        <div className="questionSection">
            <div className="wrapper">
                <Modals />
                <div className="questionText">
                    <h5>{questionListCount + 1}. Durante las últimas 2 semanas, ¿con qué frecuencia... </h5>
                    <h4>{questionList[questionListCount]}</h4>
                    <form action="optionCheck">
                        {/* PENDIENTE RECIBIR ESTAS OPCIONES DE AXIOS */}
                        <input type="radio" id="optionA" name="option" value="A" />
                        <label htmlFor="optionA"> Ningun día.</label><br></br>
                        <input type="radio" id="optionB" name="option" value="B" />
                        <label htmlFor="optionB"> Menos de 7 días.</label><br></br>
                        <input type="radio" id="optionC" name="option" value="C" />
                        <label htmlFor="optionC"> Más de 7 días.</label><br></br>
                        <input type="radio" id="optionD" name="option" value="D" />
                        <label htmlFor="optionD"> Casi todos los días.</label><br></br>
                    </form>
                    <progress max="100" value={progressBarStatus}></progress>
                </div>
                <div className="questionButtons">
                    {/* Esto es una condicion ternaria (condición ? expr1 : expr2 ), es un atajo de un If en javascript */}
                    {questionListCount > 0 ? <button className="button button--bgTransparent-white" onClick={() => back()}>Anterior</button> : <span></span>}
                    {questionListCount < 8 ? <button className="button button--bgTransparent-white" onClick={() => next()}>Siguiente</button> : <button className="button button--bgTransparent-white" onClick={() => history.push('/Chatbot')}>Hablar con Berta</button>}
                </div>
            </div>
        </div>
    );
}

export default Question;