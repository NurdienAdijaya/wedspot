import React, { useEffect } from "react";
import Venue from "../card/Venue";
import TitleBar from "../TitleBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizerHome } from "../../store/action/package";
import { CircularProgress } from "@material-ui/core";

const HomeVendorBanner = () => {
  const dispatch = useDispatch();
  const { packages, isLoading } = useSelector(
    (state) => state.packages.listOrganizerExample
  );

  useEffect(() => {
    dispatch(getOrganizerHome());
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
              overflow: "scroll",
            }}
          >
            {packages?.data?.map((data, index) => (
              <Link
                key={index}
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
                  rating={data.package_rating}
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
