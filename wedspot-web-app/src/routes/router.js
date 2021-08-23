import { Switch, Route } from "react-router-dom";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Homepage from "../pages/Homepage";
import HomeSearch from "../pages/search/search1";
import SearchPage from "../pages/search/search2";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";

const Routers = () => {
  return (
    <div>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/search" ? (
        <Header />
      ) : null}
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/search">
          <HomeSearch />
        </Route>
        <Route exact path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route exact path="/vendor/package/:id">
          <PackageDetail />
        </Route>

        <Route exact path="/*">
          <HomeSearch />
        </Route>
      </Switch>
      {window.location.pathname !== "/" ? <Footer /> : null}
    </div>
  );
};

export default Routers;
