import React, { useState } from "react";
import ReactDOM from "react-dom";
import MainRoutes from "./mainroute/MainRoutes"; // Your routes configuration
import Sidebar from "./components/Sidebar";

const App = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div>
            <Sidebar
                open={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <button onClick={() => setSidebarOpen(true)}>Open Sidebar</button>

            <MainRoutes />
        </div>
    );
};
export default App;
