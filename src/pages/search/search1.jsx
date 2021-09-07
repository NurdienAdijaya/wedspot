/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import HomeSearchBanner from "../../component/banner/HomeSearchBanner";
import SearchPackageBanner from "../../component/banner/SearchPackageBanner";
import QuotationSent from "../../component/buttons/QuotationSent";
import Venue from "../../component/card/Venue";
import NoresultHand from "../../component/noresult/NoresultHand";
import TitleBar from "../../component/TitleBar";
import {
  getOrganizerSearch,
  getPackageSearch,
  getVenueSearch,
} from "../../store/action/package";

const HomeSearch = () => {
  const { keyword, location } = useParams();
  const dispatch = useDispatch();
  const { resultPackages } = useSelector(
    (state) => state.packages.listPackageSearch
  );

  const { resultVenues } = useSelector(
    (state) => state.packages.listVenueSearch
  );
  const { resultOrganizers } = useSelector(
    (state) => state.packages.listOrganizerSearch
  );

  useEffect(() => {
    dispatch(getPackageSearch(1, keyword, location));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getVenueSearch(1, keyword, location));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrganizerSearch(1, keyword, location));
  }, [dispatch]);

  return (
    <div>
      <HomeSearchBanner />
      <div
        style={{
          margin: "2.5rem 9.1%",
        }}
      >
        {keyword ? (
          <p
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Showing all search result for{" "}
            <h5
              style={{
                margin: "0 0.2rem",
              }}
            >
              {" "}
              “{keyword}”{" "}
            </h5>{" "}
            in Wedspot
          </p>
        ) : null}
        <div>
          <Link to="/searchdetail/packages">
            <QuotationSent background="white" content="Packages" />
          </Link>
          <Link to="/searchdetail/venue">
            <QuotationSent background="white" content="Venue" />
          </Link>
          <Link to="/searchdetail/organizer">
            <QuotationSent background="white" content="Wedding Organizer" />
          </Link>
        </div>
      </div>
      {/* <SearchPackageBanner /> */}
      <SearchPackageBanner datas={resultPackages} />
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Venue" link="/searchdetail/venue" />
        {resultVenues ? (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "scroll",
            }}
          >
            {resultVenues?.data?.map((data) => (
              <Link
                to={`/package/${data.package_id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Venue
                  image={data.package_album[0]}
                  title={data.package_name}
                  location={data.package_location}
                  rating={data.package_vendor_id.vendor_rating}
                  width="300px"
                />
              </Link>
            ))}
          </div>
        ) : (
          <NoresultHand
            title="Oops, we couldn’t find anything"
            description="Please try using another keyword to get better results"
          />
        )}
      </div>
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Wedding Organizer" link="/searchdetail/organizer" />
        {resultOrganizers ? (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "scroll",
            }}
          >
            {resultOrganizers?.data?.map((data) => (
              <Link
                to={`/vendor/${data.vendor_id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Venue
                  image={data.vendor_header}
                  title={data.vendor_name}
                  location={data.vendor_location}
                  rating={data.vendor_rating}
                  width="300px"
                />
              </Link>
            ))}
          </div>
        ) : (
          <NoresultHand
            title="Oops, we couldn’t find anything"
            description="Please try using another keyword to get better results"
          />
        )}
      </div>
      ha
    </div>
  );
};

export default HomeSearch;
