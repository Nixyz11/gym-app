import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Navbar } from "./pages";
import ExDetail from "./components/ExDetail";

function App() {
  const [count, setCount] = useState(0);
  const [exercise, setExercise] = useState([]);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
