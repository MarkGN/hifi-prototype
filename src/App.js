import './App.css';
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-2">
            Student icon
          </div>
          <div className="col-10">
            {<Dashboard />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
