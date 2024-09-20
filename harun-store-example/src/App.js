// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Products from "./pages/Products";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";

import AuthProvider from "./context/AuthProvider";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </AuthProvider>
      {/*//* route yapısını router dosyasına taşıdık */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
