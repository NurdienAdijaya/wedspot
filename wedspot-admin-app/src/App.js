import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Routers from "./routers/router";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
