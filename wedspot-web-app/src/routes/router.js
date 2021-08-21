import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/search/search2";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";

const Routers = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route exact path="/vendor/package/:id">
          <PackageDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default Routers;
