import "./App.css";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} exact />
      </Routes>
    </div>
  );
}

export default App;
