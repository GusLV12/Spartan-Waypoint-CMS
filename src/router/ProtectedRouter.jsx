import { Navigate } from "react-router-dom";

// Simulación de un hook o función que verifica si el usuario está autenticado
const useAuth = () => {
  const user = localStorage.getItem("token"); // Puedes cambiar la lógica por tu sistema de autenticación
  return !!user; // Retorna true si el usuario está autenticado
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
