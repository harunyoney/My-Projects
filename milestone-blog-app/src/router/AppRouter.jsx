import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
