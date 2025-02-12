import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import MaintenancePage from "../pages/MaintenancePage";

const isUnderMaintenance = false;

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {isUnderMaintenance ? (
                <Route path="*" element={<MaintenancePage />} />
            ) : (
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/maintenance" element={<MaintenancePage />} />
                </>
            )}
        </Routes>
    );
};

export default AppRoutes;
