import React from "react";
import './personalArea.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function PersonalArea(props) {

    let sessionUserCredentials = sessionStorage.getItem("sessionUserCredentials");
    let convertUser = JSON.parse(sessionUserCredentials);

    let tests = convertUser.tests;
    
    
console.log(tests);
    return (<>
        <div className="PersonalArea">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div className="wrapper wrapper-filled">
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
                            <th>Resultados</th>
                        </tr>
                        {
                               tests.map((test,index) => {
                                    let dateParse = new Date(test.date)
                                    let date = `${dateParse.getDate()}-${dateParse.getMonth()+1}-${dateParse.getFullYear()}`
                                    return(
                                
                                    <tr key={index}>
                                        <td>{date}</td>
                                        <td>{test.score}</td>                            
                                    </tr>
                                    )                  
                                })
                        }
                    </table>
                    {/* <iframe title="map"
                        width="600"
                        height="450"
                        loading="lazy"
                        allowfullscreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD9ecVzHiRU3frlwA9-R-q40p5GlVEXilU&q=current+location">
                    </iframe> */}
                </div>

            </div>
            <Footer />
        </div>
    </>)
}

export default PersonalArea;

{/* <html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Date', 'Score'],
            tests.forEach(test => {
                [{test.date},  {test.score}],              
            });
         
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="chart_div" style="width: 100%; height: 500px;"></div>
  </body>
</html> */}
