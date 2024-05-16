import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Task1 from "./components/Task1.jsx";
import Task2 from "./components/Task2.jsx";


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/task1" element={<Task1 />} />
                <Route path="/task2" element={<Task2 />} />
                <Route path="/" element={<Task1 />} />
            </Routes>
        </Router>
    );
}

export default App;
