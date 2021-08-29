import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Homepage from "../pages/Homepage";
import HomeSearch from "../pages/search/search1";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";
import Sidebar from "../pages/profile/sidebar";
import SearchPage from "../pages/search/search2";
import ProfileHeader from "../pages/profile/header";

const Routers = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" &&
      location.pathname !== "/search" &&
      location.pathname !== "/account" &&
      location.pathname !== "/account/notification" && location.pathname !== "/account/quotation" && (
        <Header />
      ) }
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/search/:keyword/:location">
          <HomeSearch />
        </Route>
        <Route path="/search/:keyword">
          <HomeSearch />
        </Route>
        <Route path="/search">
          <HomeSearch />
        </Route>
        <Route exact path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route path="/searchdetail/:id">
          <SearchPage />
        </Route>
        <Route path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route path="/package/:id">
          <PackageDetail />
        </Route>
        <Route path="/account">
          <ProfileHeader/>
          <Sidebar />
        </Route>
        <Route path="*">not found</Route>
      </Switch>
      <Footer />
      {/* {location.pathname !== "/" ? <Footer /> : null} */}
    </>
  );
};

export default Routers;
