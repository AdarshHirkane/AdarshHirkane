
import './App.css';
import Navbar from './componets/Navbar';
import Rick from './componets/Rick';
// import Adarsh from './componets/Adarsh';
import TextForm from './componets/TextForm';
import Alert from './componets/Alert';

import React,{useState} from 'react';

// import {Route,Switch,Link, BrowserRouter as Router} from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('dark');

  const [colorChange,setText]=useState('Enable Lightmode');
 
  const [colorR,setColorR]=useState('dark');
  const [alert,setAlert]=useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      ty: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      setColorR('dark');
     
      setText('Enable Darkmode');
      document.body.style.backgroundColor='white';
      
      
      showAlert('light mode has been enabled','success');
      
    }
    else{
      setMode('dark');
      setColorR('light');
     
      setText('Enable Lightmode');
      document.body.style.backgroundColor='black';
      
      
      showAlert('dark mode has been enabled','success');
      
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title='TextUtils' aboutText='about us' home='Information' colorChange={colorChange} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
            <Route path="/rick" element={<Rick mode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} colorR={colorR} heading="Word Counter ,Character Counter " mode={mode} />}>
            </Route> 
           
      </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;
