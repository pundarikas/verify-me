import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Verification } from "./components/verification";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Success } from "./components/success";

function App() {
  return (
    <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route index element={<Verification />} />
            <Route path="/success" element={<Success />} />
            <Route path='*' element={<Navigate to='/' />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
