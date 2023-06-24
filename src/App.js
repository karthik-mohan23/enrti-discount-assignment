import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Offer1 from "./components/Offer1";
import Offer2 from "./components/Offer2";
import Offer3 from "./components/Offer3";
import ErrorPage from "./components/ErrorPage";
function App() {
  // setting state variable globally
  const [number, setNumber] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main number={number} setNumber={setNumber} />} />
        <Route path="/off1" element={<Offer1 number={number} />} />
        <Route path="/cou2" element={<Offer2 number={number} />} />
        <Route path="/dis3" element={<Offer3 number={number} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
