import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login } from "../Views";
import { MainLayout } from "../layouts/MainLayouts";
import ProtectedRoute from "./ProtectedRouter";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
