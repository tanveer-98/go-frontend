import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";
import Auth from "./components/Auth/Auth";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
