import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home";
import Cars from "./components//pages/Cars";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
