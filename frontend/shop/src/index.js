import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ShoppingList from "./components/ShoppingList";
import Shopping from "./components/Shopping";
import ShoppingAdd from "./components/ShoppingAdd";
import PythonAPI from "./components/pythonAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shops" element={<ShoppingList />} />
          <Route path="/shop/:id" element={<Shopping />} />
          <Route path="/shop/add" element={<ShoppingAdd />} />
          <Route path="/shop/edit/:id" element={<ShoppingAdd />} />
          <Route path="/pAPI" element={<PythonAPI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
