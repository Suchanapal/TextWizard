import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });

  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // };

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div className={`App ${mode}`}>
        <div className="AppGlass">
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route
                path="/"
                element={<TextForm mode={mode} heading="Welcome to TextWizard" />}
              />
            </Routes>
          </div>
                  <TextForm mode={mode} heading="Welcome to TextWizard" />
          <footer className="footer" mode={mode}>
            <Alert alert={alert} />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
