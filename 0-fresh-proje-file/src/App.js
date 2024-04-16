import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //? JS kodu

  return (
    //! JSX (HTML- JS'nin birleşmiş hali)

    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="" element={ }    />
      <Route path="" element={ }    />
      <Route path="" element={ }    />
      <Route path="" element={ }    /> */}
      </Routes>

      <footer>asdasde</footer>
    </BrowserRouter>
  );
}

export default App;
