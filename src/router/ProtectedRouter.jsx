import { Navigate } from "react-router-dom";

// Simulación de un hook o función que verifica si el usuario está autenticado
const useAuth = () => {
  const user = localStorage.getItem("token");
  return !!user;
};

// Componente que protege la ruta
const ProtectedRouter = ({ children }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRouter;
