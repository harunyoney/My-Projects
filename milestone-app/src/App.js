import { Provider } from "react-redux";
import "./App.css";
import { Login } from "@mui/icons-material";
import SignInSide from "./components/auth/Login";

function App() {
  return (
    <div>
      <Login />
      <SignInSide />
    </div>
  );
}

export default App;
