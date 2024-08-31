import { Routes, Route } from "react-router-dom";
import { Home, Login } from "../Views";
import { MainLayout } from "../layouts/MainLayouts";

export const AppRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
