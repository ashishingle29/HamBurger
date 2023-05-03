import { useState } from "react";
import "./App.css";
// import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
      {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
          {/* <Footer />  */}
    </div>
  );
}

export default App;
