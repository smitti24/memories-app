import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => (
  <BrowserRouter>
    <GoogleOAuthProvider clientId="513497053488-89mr6o5ncltdt3cm3rvfs082tj7bark2.apps.googleusercontent.com">
      <div className="max-w-[1280px] m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  </BrowserRouter>
);

export default App;
