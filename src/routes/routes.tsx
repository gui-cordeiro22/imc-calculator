// Dependencies
import { FunctionComponent, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { RouteValidator } from "./route-validator";

// Pages

export const ApplicationRoutes: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home</div>} />

                <Route path="/teste" element={<div>Teste</div>} />

                <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
            </Routes>
        </BrowserRouter>
    );
};
