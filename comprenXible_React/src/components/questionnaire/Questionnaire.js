
import React, { useEffect, useState } from 'react';
import './Questionnaire.css';
import Modals from '../modals/Modals.js';
import { useHistory } from 'react-router-dom';

//PENDIENTE:
//Si el usuario pulsa el boton de atras del navegador, para saltar a la pestana anterior, hay que hacer saltar un mensaje que diga que, si abandona la pagina, perdera los resultados de su test.
//Localhost sobre el que guardar la seleccion de respuestas.


function Question() {

    //El hook useHistory te da acceso a la instancia del historial que puedes usar para navegar.
    //Debemos importar el hook useHistory, inicializar su funcion (const history = useHistory()), y en la funcion Next(), utilizar history.push('/testresult') para pushear dicha url al historial y lanzarnos a dicho componente.
    const history = useHistory();

    const [questionListCount, setquestionListCount] = useState(0);

    //Como la progress bar hará 8 movimientos, aumentará un 12.5% por cada uno para llegar al 100%
    const [progressBarStatus, moveProgressBar] = useState(0);

    const [choosedOptionIndex, setchoosedOptionIndex] = useState(0);



    let choosedOption = [];

    let questionList = [<p>has sentido poco interés o placer en hacer cosas?</p>,
    <p>te has sentido decaído/decaída, deprimido/deprimida o sin esperanzas?</p>,
    <p>te has sentido ansioso/a alterado/a?</p>,
    <p>no has podido dejar de preocuparte?</p>,
    <p>te has preocupado excesivamente por diferentes cosas?</p>,
    <p>has tenido dificultad para relajarte?</p>,
    <p>te has sentido tan intranquilo/intranquila que no podías estarte quieto/quieta?</p>,
    <p>te has irritado o enfadado con facilidad?</p>,
    <p>has sentido miedo, como si fuera a suceder algo terrible?</p>];

    useEffect(() => {
        // if (questionListCount !== 0) {
        console.log("Updatear bdbdd");
        // }
    }, [questionListCount])

    function resetForm() {
        var ele = document.getElementsByName("option");
        for (var i = 0; i < ele.length; i++)
            ele[i].checked = false;
    }



    function next(questionListCount) {
        if (questionListCount < 8) {
            //Si ul usuario ha elegido una opcion y da a siguiente, anade esa opcion elegida (A, B, C, o D) al array choosedOption.

            document.querySelectorAll('input[type="radio"]').forEach((elemnt) => {
                if (elemnt.checked) {
                    console.log(choosedOption);
                    choosedOption[choosedOptionIndex] = elemnt.value;
                    console.log(choosedOption);
                }
            })

            // setchoosedOptionIndex(questionList + 1);
            setquestionListCount(questionListCount + 1)
            moveProgressBar(progressBarStatus + 12.5);

            //Resetea el formulario al pulsar en siguiente
            document.querySelector('progress').value = +20;
            resetForm();
        }
        else {
            //Esto me lanza al componente TestResult, cuando pulsa en siguiente y no hay mas preguntas.
            //PENDIENTE, HAY QUE HACER SALTO A BERTA, ANTES DE IR AL FINAL
            history.push('/testresult');
        }
    }

    function back() {
        setquestionListCount(questionListCount - 1);
        moveProgressBar(progressBarStatus - 12.5);
    }

    return (
        <div className="questionSection">
            <div className="wrapper">
                <Modals />
                <div className="questionText">
                    <h5>Durante las últimas 2 semanas, ¿con qué frecuencia... </h5>
                    <h4>{questionList[questionListCount]}</h4>
                    <form action="optionCheck">
                        <input type="radio" id="optionA" name="option" value="A" />
                        <label htmlFor="optionA"> Ningun día.</label><br></br>
                        <input type="radio" id="optionB" name="option" value="B" />
                        <label htmlFor="optionB"> Menos de 7 días.</label><br></br>
                        <input type="radio" id="optionC" name="option" value="C" />
                        <label htmlFor="optionC"> Más de 7 días.</label><br></br>
                        <input type="radio" id="optionD" name="option" value="D" />
                        <label htmlFor="optionD"> Casi todos los días.</label><br></br>
                    </form>
                    <p>Mira que barrita:</p>
                    <progress max="100" value={progressBarStatus}></progress>
                </div>
                <div className="questionButtons">
                    {/* Esto es una condicion ternaria (condición ? expr1 : expr2 ), es un atajo de un If en javascript */}
                    {questionListCount > 0 ? <button className="button button--bgTransparent-white" onClick={() => back()}>Anterior</button> : <span></span>}
                    <button className="button button--bgTransparent-white" onClick={() => next(questionListCount)}>Siguiente</button>
                </div>
            </div>
        </div>
        //guardar dato, cambiar dato, comprobar si esta guardado en el array, si esta guardado pintarlo
    );
}

export default Question;



//PREGUNTAS
// Preguntas: 

// Durante las últimas 2 semanas, ¿con qué frecuencia... 
// has sentido poco interés o placer en hacer cosas?
// te has sentido decaído/decaída, deprimido/deprimida o sin esperanzas?
// te has sentido ansioso/a alterado/a?
// no has podido dejar de preocuparte?
// te has preocupado excesivamente por diferentes cosas?
// has tenido dificultad para relajarte?
// te has sentido tan intranquilo/intranquila que no podías estarte quieto/quieta?
// te has irritado o enfadado con facilidad?
// has sentido miedo, como si fuera a suceder algo terrible?

// Respuestas:

// Ningun día 
// menos de 7 días 
// Mas de 7 dias
// Casi todos los días





//Plantilla de Erlantz

// import React, { useState } from 'react';

// function Counter() {
//     let initialValue = <p>hola mundo</p>;
// 	const [count, setCount] = useState(initialValue);
//     let adios = <p>Adios mundo</p>
// 	return (
// 		<div>
// 			<h2>This is a counter using hooks</h2>
// 			<h1>{count}</h1>
// 			<button onClick={() => setCount( adios )}>Click to Increment</button>
// 		</div>
// 	);
// }

// export default Counter;