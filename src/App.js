import React from 'react';
import './App.css';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import Banks from "./components/Banks/Banks";
import MortageCalculator from "./components/MortageCalculator/MortageCalculator";
import {Container} from "react-bootstrap";
import BanksContainer from "./components/Banks/BanksContainer";
import MortageCalculatorContainer from "./components/MortageCalculator/MortageCalculatorContainer";

const App = () => (
    <BrowserRouter>

    <div className="App">
        <Container>


        <Header/>
        <Routes>

            <Route exact path="/"
                   element={<ServiceInfo />}/>
            <Route path="banks" element={<BanksContainer />}/>
            <Route path="mortageCalculator" element={<MortageCalculatorContainer />}/>
        </Routes>
        </Container>
    </div>
    </BrowserRouter>
);

export default App;