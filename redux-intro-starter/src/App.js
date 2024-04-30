import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        {/* <Counter /> */}
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
