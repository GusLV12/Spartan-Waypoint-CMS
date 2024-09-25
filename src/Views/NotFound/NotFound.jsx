import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const NotFound = () => {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("token")) {
        setRedirect(<Navigate to="/home" />);
      } else {
        setRedirect(<Navigate to="/login" />);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (redirect) return redirect;

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};
