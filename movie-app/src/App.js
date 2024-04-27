import React from "react";
import Register from "./pages/Register";
import {BrowserRouter, } from "react-router-dom"
const App = () => {
  return (
  <BrowserRouter>
    <div>
      <Register />
    </div>
    <BrowserRouter/>
  )
}

export default App
