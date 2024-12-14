import React from 'react';
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // State for light/dark mode
  const[alert , setAlert] = useState(null);  // state for alert

  // Function to alert
  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // Function to toggle mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; // Dark mode background
      document.body.style.color = "white"; // Dark mode text
      showAlert("Dark mode has been Enabled" , "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // Light mode background
      document.body.style.color = "black"; // Light mode text
      showAlert("Light mode has been Enabled" , "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Textform showAlert = {showAlert} heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
