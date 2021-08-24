import { Switch, Route } from "react-router-dom";
import SignUp from "../component/Quatationform/register";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Homepage from "../pages/Homepage";
import HomeSearch from "../pages/search/search1";
import SearchPage from "../pages/search/search2";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";
import Sidebar from "../pages/profile";
import VerticalTabs from "../pages/profile/notification";
import Request from "../component/Quatationform/Request";
import RecipeReviewCard from "../component/Quatationform/Request";

const Routers = () => {
  return (
    <div>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/search" && window.location.pathname !== "/profile" ? (
        <Header />
      ) : null}
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/search">
          <HomeSearch />
        </Route>
        <Route exact path="/searchdetail">
          <SearchPage />
        </Route>
        <Route exact path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route exact path="/package/:id">
          <PackageDetail />
        </Route>
        <Route exact path="/profile">
          <Sidebar />
          <VerticalTabs/>
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
