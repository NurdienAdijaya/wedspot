import { Switch, Route } from "react-router-dom";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Homepage from "../pages/Homepage";
import HomeSearch from "../pages/search/search1";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";
import Sidebar from "../pages/profile";
import VerticalTabs from "../pages/profile/notification";
import ProfileHeader from "../pages/profile/header";
import SearchPage from "../pages/search/search2";
import SimpleTabs from "../pages/profile/quotation";
import DownloadQuotation from "../component/card/quotation/DownloadQuotationmodal";

const Routers = () => {
  return (
    <>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/search" &&
      window.location.pathname !== "/account" ? (
        <Header />
      ) : null}
      <Switch>
        <Route exact path="/">
          <DownloadQuotation />
          <Homepage />
        </Route>
        <Route path="/search">
          <HomeSearch />
        </Route>
        <Route exact path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route path="/searchdetail">
          <SearchPage />
        </Route>
        <Route path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route path="/package/:id">
          <PackageDetail />
        </Route>
        <Route path="/account">
          <ProfileHeader />
          <Sidebar />
          <VerticalTabs />
        </Route>
        <Route exact path="/*">
          {/* < SimpleTabs/> */}
        </Route>
        <Route path="/*">not found</Route>
      </Switch>
      {window.location.pathname !== "/" ? <Footer /> : null}
    </>
  );
};

export default Routers;
