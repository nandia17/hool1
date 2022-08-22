import "./App.css";
import Builder from "./components/builder/builder";

function App(props) {
  return (
    <div className="App">
      <div className="Menu">
        <Builder />
      </div>
      <div className="Current"></div>
    </div>
  );
}

export default App;
