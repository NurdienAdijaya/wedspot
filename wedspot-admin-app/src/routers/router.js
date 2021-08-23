import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/test">
          <Sidebar />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
