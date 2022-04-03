import Historia from "./components/Historia";
import data from "./components/data.json";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Historia data={data} />
    </div>
  );
}

export default App;
