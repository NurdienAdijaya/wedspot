import { Switch, Route } from "react-router-dom";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Homepage from "../pages/Homepage";
import HomeSearch from "../pages/search/search1";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";
import Sidebar from "../pages/profile";
import VerticalTabs from "../pages/profile/notification";

const Routers = () => {
  return (
    <>
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
        <Route exact path="/package/:id">
          <PackageDetail />
        </Route>
        <Route exact path="/profile">
          <Sidebar />
          <VerticalTabs />
        </Route>
        <Route exact path="/*">
          not found
        </Route>
      </Switch>
      {window.location.pathname !== "/" ? <Footer /> : null}
    </>
  );
};

export default Routers;
