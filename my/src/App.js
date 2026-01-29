import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textf from './component/Textf'
import About from './component/About';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (massage, type) =>{
    setalert({msg: massage, type})
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode enabled", "success");

    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode enabled", "success");

    }
  }
  

  return (
    <Router>
    <>
    <Navbar title="TextUtils by Uday" About = "About" mode= 'dark' toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <Routes>
      <Route path = "/About" element = {<About mode={mode}/>} />
      <Route path = "/" element = {<Textf showAlert = {showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>
    </Routes>
    </>

    </Router>
  );
}

export default App;
