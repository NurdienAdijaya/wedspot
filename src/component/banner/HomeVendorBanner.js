import React, { useEffect } from "react";
import Venue from "../card/Venue";
import TitleBar from "../TitleBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { getAllVendor } from "../../store/action/vendor";
import { getOrganizerHome } from "../../store/action/package";

const HomeVendorBanner = () => {
  const dispatch = useDispatch();
  const { vendors, isLoading } = useSelector(
    (state) => state.vendors.allVendorList
  );

  useEffect(() => {
    dispatch(getAllVendor());
  }, [dispatch]);

  // const [data, setData] = useState([]);
  // const getData = () => {
  //   axios
  //     .get("http://localhost:4000/data")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div
      style={{
        marginTop: "10rem",
        marginRight: "10rem",
        marginLeft: "10rem",
        marginBottom: "10rem",
      }}
    >
      <TitleBar
        mb={"2rem"}
        title={"Best Planner for You"}
        description={"Handle all the nitty gritties for your big day"}
        link="searchdetail/organizer"
      />
      {isLoading ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "scroll",
            }}
          >
            {vendors?.data?.map((data, index) => (
              <Link
                key={index}
                to={`/vendor/${data.vendor_id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Venue
                  // image={`https://source.unsplash.com/640x480?wedding?`}
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
      )}
    </div>
  );
};

export default HomeVendorBanner;
