import { Routes, Route } from "react-router-dom";
import { Home, Login } from "../Views";
import { MainLayout } from "../layouts/MainLayouts";

export const AppRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/login" element={<Home />} />
    </Routes>
  );
};
