import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import "../main.css";

const HomePage: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Routes>
                <Route path="/addemployee" element={<AddEmployee />} />
            </Routes>
        </div>
    );
};

const AddEmployee: React.FC = () => {
    return <div>Add Employee Page</div>;
};

export default HomePage;
