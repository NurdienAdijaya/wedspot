import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import HomeSearchBanner from "../../component/banner/HomeSearchBanner";
import SearchPackageBanner from "../../component/banner/SearchPackageBanner";
import Venue from "../../component/card/Venue";
import NoresultHand from "../../component/noresult/NoresultHand";
import SearchTitle from "../../component/search/SearchTitle";
import TitleBar from "../../component/TitleBar";
import NoresultPhone from "../../component/noresult/NoresultPhone";
import NoresultBell from "../../component/noresult/NoresultBell";

import { getPackagesSearch } from "../../store/action/package";
import {
  getOrganizerSearch,
  getPackageSearch,
  getVenueSearch,
} from "../../store/action/package";

const HomeSearch = () => {
  const { keyword, location } = useParams();
  console.log("keyword", keyword);
  console.log("location", location);

  const dispatch = useDispatch();
  const { resultPackages, packageLoading } = useSelector(
    (state) => state.packages.listPackageSearch
  );

  const { resultVenues, venueLoading } = useSelector(
    (state) => state.packages.listVenueSearch
  );
  const { resultOrganizers, organizerLoading } = useSelector(
    (state) => state.packages.listOrganizerSearch
  );

  console.log("resultPackages", resultPackages);
  console.log("resultVenues", resultVenues);
  console.log("resultOrganizers", resultOrganizers);

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
      <SearchTitle />
      <SearchPackageBanner />
      <NoresultBell title="coba title" description="coba description" />
      <NoresultHand
        title="coba title tangan"
        description="coba description tangan"
      />
      <NoresultPhone
        title="coba title phone"
        description="coba description phone"
      />
      <NoresultBell title="coba title" description="coba description" />
      <NoresultHand
        title="coba title tangan"
        description="coba description tangan"
      />
      <NoresultPhone
        title="coba title phone"
        description="coba description phone"
      />
      {/* <SearchPackageBanner datas={resultPackages} /> */}
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Venue" link="/searchdetail/venue" />
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "scroll",
          }}
        >
          {resultPackages?.data?.map((data) => (
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
      </div>
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Wedding Organizer" link="/searchdetail/organizer" />
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "scroll",
          }}
        >
          {resultOrganizers?.data?.map((data) => (
            <Link
              to={`/package/${data.vendor_id}`}
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
      </div>
    </div>
  );
};

export default HomeSearch;
