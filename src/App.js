import React from "react";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContextProvider from "./components/contexts/UserContextProvider";
function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="*" element={<Home />}></Route>
            <Route exact path="/edit/:id" element={<EditUser />}></Route>
            <Route exact path="/add" element={<AddUser />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
