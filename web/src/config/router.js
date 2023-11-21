import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Accounts from "../pages/Accounts";
import Cards from "../pages/Cards";
import Transactions from "../pages/Transactions";
import NotFound from "../pages/NotFound";
import Layout from "../layout/index";

function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<ForgotPassword />} path="/forgot-password" />

      <Route element={<Layout />}>
        <Route element={<Dashboard />} path="/" index />
        <Route element={<Accounts />} path="/accounts" />
        <Route element={<Cards />} path="/cards" />
        <Route element={<Transactions />} path="/transactions" />
        
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default Router;
