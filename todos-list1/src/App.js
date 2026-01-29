import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/textf';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1500);
  };

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode='dark'
        toggleMode={toggleMode}
        aboutText="About"
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode = {mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
