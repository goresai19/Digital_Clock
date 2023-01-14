import React, { useState } from "react";
import "./index.css";


//Creating the app fuction
function App(){
    //Declaring a variable having the name currtime which saves the current time using the Date class function
    let currtime= new Date().toLocaleTimeString();
    // Declaring a state time is variable and settime is the fuction we use update the time 
    const [time, settime]= useState(currtime);
  
    /*A fuction newtime which updates the time with the current time when it is called and it uses the settime function to store the value of the current time in the variable currtime */
   const newtime = () => {
       currtime= new Date().toLocaleTimeString();
       settime(currtime);
    };
/* setting the time interval for calling the fucntion newtime to 1000ms means at each second the fuction is called */
   setInterval(newtime,1000);

   //returning the app component which shows the time variable 
    return(
     <>
     <div className="main">
     <p>The Digital clock using the ReactJS</p>
     <div className="time">{time}</div>
     </div>

     </>
);
}

export default App;