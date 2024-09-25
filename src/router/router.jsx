import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, NotFound } from "../Views";
import { MainLayout } from "../layouts/MainLayouts";
import ProtectedRoute, { TokenValid } from "./ProtectedRouter";

export const AppRoute = () => {
  const isAuthenticated = TokenValid();
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
      />

      {/* Si el usuario está autenticado, redirige al /home */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
      />

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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
