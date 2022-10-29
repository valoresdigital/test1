import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
