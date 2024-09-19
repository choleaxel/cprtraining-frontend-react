import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMedication from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState, createContext } from "react";

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="whole-page">
          <header>
            <h1 className="page-title">Training Tidbits </h1>
          </header>
          <nav>
            <NavBar />
          </nav>
          <body>
            <h2 className="title-learn">Learning in little bites</h2>
            <Routes>
              <Route
                path="/Form"
                element={!user ? <Login /> : <AddMedication />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </body>
        </div>
        <footer> Training Tidbits © Coding with Chole 2024 </footer>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
