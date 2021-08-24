import { Switch, Route } from "react-router-dom";
import Header from "../component/header/header";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/search/search2";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";
import Sidebar from "../pages/profile";
import VerticalTabs from "../pages/profile/notification";

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
        <Route exact path="/vendor">
          <DetailPage />
        </Route>
        <Route exact path="/package">
          <PackageDetail />
        </Route>
        <Route exact path="/profile">
          <Sidebar />
          <VerticalTabs/>
        </Route>
        <Route exact path="/*">
          <Header />
        </Route>
      </Switch>
    </div>
  );
};

export default Routers;
