import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import RoutesMain from "./routes/RoutesMain";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <RoutesMain/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
