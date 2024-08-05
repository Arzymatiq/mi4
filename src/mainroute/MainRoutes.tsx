import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import EmployeeAddForm from "../components/EmployeeAddForm";

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<EmployeeAddForm />} />
    </Routes>
);

export default MainRoutes;
