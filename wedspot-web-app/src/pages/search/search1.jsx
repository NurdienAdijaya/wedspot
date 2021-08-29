import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeSearchBanner from "../../component/banner/HomeSearchBanner";
import SearchPackageBanner from "../../component/banner/SearchPackageBanner";
import Venue from "../../component/card/Venue";
import NoresultHand from "../../component/noresult/NoresultHand";
import SearchTitle from "../../component/search/SearchTitle";
import TitleBar from "../../component/TitleBar";
import NoresultPhone from "../../component/noresult/NoresultPhone";
import NoresultBell from "../../component/noresult/NoresultBell"

import { getPackagesSearch } from "../../store/action/package";

const HomeSearch = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  // const dispatch = useDispatch();
  // const { resultPackages, isLoading } = useSelector(
  //   (state) => state?.packages?.listPackageSearch
  // );

  // useEffect(() => {
  //   dispatch(getPackagesSearch());
  // }, [dispatch]);

  return (
    <div>
      <HomeSearchBanner />
      <SearchTitle />
      <SearchPackageBanner />
      < NoresultBell title = "coba title" description= "coba description"/>
      < NoresultHand title = "coba title tangan" description= "coba description tangan"/>
      < NoresultPhone title = "coba title phone" description= "coba description phone"/>
      <NoresultBell title="coba title" description="coba description" />
      <NoresultHand
        title="coba title tangan"
        description="coba description tangan"
      />
      <NoresultPhone
        title="coba title phone"
        description="coba description phone"
      />
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Venue" />
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflow: "scroll",
          }}
        >
          {data?.map((data) => (
            <Link
              to={`/package/${data.id}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Venue
                image={data.image_poster}
                title={data.title}
                location={data.location}
                rating={data.rating}
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
        <TitleBar title="Wedding Organizer" />
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflow: "scroll",
          }}
        >
          {data.map((data) => (
            <Link
              to={`/package/${data.id}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Venue
                image={data.image_poster}
                title={data.title}
                location={data.location}
                rating={data.rating}
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
