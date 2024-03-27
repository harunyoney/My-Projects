import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { data } from "./helper/data";

function App() {
  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Header data={data} />
      {/* <CardContainer data={data} /> */}
    </div>
  );
}

export default App;
