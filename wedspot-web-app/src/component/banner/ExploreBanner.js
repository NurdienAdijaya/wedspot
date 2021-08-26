import React from "react";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import { Link } from "react-router-dom";

const ExploreBanner = () => {
  return (
    <div style={{ backgroundColor: "#455437", height: "391px", width: "100%" }}>
      <svg
        width="319"
        height="391"
        viewBox="0 0 319 391"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          float: "right",
          zIndex: "-1",
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.8409 395.503C35.2251 316 74.0557 274.182 130.646 241.164C142.041 234.509 153.786 228.549 165.658 222.62L177.688 216.691C187.237 212.087 197.009 207.23 207.066 202.058C214.546 198.211 221.962 194.269 229.346 190.137C233.802 187.646 238.194 185.06 242.523 182.443C277.948 160.903 302.233 136.557 314.741 110.161C327.982 82.1249 328.427 48.2863 315.951 21.8587C297.968 -16.3005 254.65 -34.087 212.986 -20.4317C195.788 -14.7695 180.749 -4.02892 169.891 10.3479C166.317 7.53813 162.088 5.66268 157.592 4.89356C153.096 4.12443 148.477 4.48626 144.16 5.94587C139.842 7.40548 135.963 9.91611 132.879 13.2474C129.795 16.5788 127.604 20.6241 126.509 25.0123C98.9042 19.2759 70.1305 24.5734 46.4483 39.7521C22.7662 54.9309 6.0922 78.7625 0.0548393 106.061C-0.0643852 106.625 0.0120251 107.212 0.272027 107.727C0.532029 108.243 0.960202 108.656 1.48696 108.899C7.63405 111.699 14.0262 113.937 20.5839 115.585C11.7495 132.443 8.15021 151.514 10.2397 170.396C10.3074 170.966 10.5671 171.498 10.9772 171.904C11.3872 172.31 11.9239 172.568 12.4998 172.635C15.9993 173 19.5159 173.179 23.0348 173.171C38.6213 173.203 53.985 169.503 67.8174 162.385C69.4809 168.883 71.7394 175.216 74.565 181.307C74.7686 181.746 75.0966 182.117 75.5091 182.375C75.9217 182.632 76.4009 182.765 76.8884 182.758H77.4292C104.953 176.782 128.985 160.287 144.307 136.857C159.628 113.427 165.002 84.9537 159.26 57.6211C164.088 56.4425 168.494 53.965 171.991 50.4623C176.821 45.6592 179.655 39.2345 179.932 32.4599C180.209 25.6853 177.909 19.0545 173.487 13.8799C183.758 0.0720043 198.089 -10.2497 214.514 -15.6697C253.663 -28.5051 294.371 -11.8222 311.24 24.0032C323.112 49.2324 322.635 81.3681 310.031 108.08C298.382 132.678 276.006 155.384 243.414 175.946C276.07 144.41 294.339 100.732 287.624 64.5907C284.441 47.3402 272.76 32.8965 257.928 27.7875C245.197 23.4355 231.956 26.3999 220.752 36.2393C220.387 36.5654 220.124 36.9894 219.997 37.46C219.869 37.9307 219.882 38.4278 220.033 38.8914C220.185 39.3551 220.469 39.7654 220.85 40.0726C221.232 40.3799 221.696 40.571 222.185 40.6229C240.868 42.452 251.148 54.2467 252.772 75.6599C257.45 137.251 211.936 187.52 162.252 217.858C151.048 224.67 139.24 230.473 127.909 236.969C63.4248 274.592 21.4752 323.411 21.4434 424.391C21.4255 424.98 21.6113 425.558 21.9702 426.028C22.3291 426.498 22.8395 426.833 23.4167 426.977C23.6064 427.008 23.8001 427.008 23.9898 426.977C24.522 426.979 25.0416 426.816 25.4755 426.51C25.9094 426.205 26.2358 425.772 26.4088 425.274C47.6383 362.926 103.624 343.058 164.002 326.691C168.267 325.524 172.691 324.388 177.243 323.221C215.882 313.224 263.943 300.831 281.226 262.072C287.942 246.966 289.247 229.432 285.109 210.006C284.995 209.432 284.684 208.915 284.228 208.543C283.772 208.172 283.201 207.969 282.611 207.969C282.021 207.969 281.449 208.172 280.993 208.543C280.537 208.915 280.226 209.432 280.112 210.006C272.473 245.106 238.131 255.355 194.621 268.316L184.182 271.47C106.202 295.28 49.134 326.249 27.8409 395.503ZM189.019 205.464C229.664 173.928 261.906 128.799 257.864 75.2185C256.209 53.679 246.151 40.5283 228.646 36.4917C232.601 33.7041 237.169 31.8875 241.972 31.1911C246.775 30.4948 251.677 30.9388 256.273 32.4866C269.418 36.9963 279.73 49.9262 282.595 65.4421C290.011 105.43 265.28 155.006 223.999 185.754C213.008 193.374 201.331 199.972 189.115 205.464H189.019ZM281.831 221.548C283.56 234.61 281.736 247.893 276.547 260.022C260.283 296.573 213.527 308.62 175.97 318.333L162.666 321.802C110.658 335.931 58.3005 353.875 31.3419 401.716C50.8527 331.169 107.507 299.979 185.677 276.264L196.085 273.11C235.234 261.504 269.481 251.287 281.926 221.548H281.831ZM131.219 26.0215C132.117 22.1845 134.035 18.6555 136.773 15.8003C139.511 12.945 142.971 10.8677 146.792 9.78379C150.614 8.69985 154.658 8.64874 158.507 9.63577C162.355 10.6228 165.867 12.6121 168.678 15.3972C171.489 18.1823 173.496 21.6618 174.492 25.4749C175.489 29.2879 175.437 33.2956 174.343 37.0822C173.249 40.8688 171.152 44.2964 168.271 47.0096C165.389 49.7228 161.827 51.6227 157.955 52.5122C156.314 46.1079 154.076 39.8684 151.271 33.8741C151.022 33.328 150.581 32.8907 150.03 32.6442C144.006 29.9132 137.741 27.7385 131.315 26.1477L131.219 26.0215ZM66.4805 157.213C50.7001 165.605 32.7922 169.254 14.9503 167.715C13.3967 150.037 17.0803 132.293 25.5493 116.657C32.6105 118.076 39.7967 118.794 47.0016 118.802C53.406 118.805 59.7976 118.235 66.0986 117.099C63.6784 130.421 63.8405 144.078 66.5761 157.34L66.4805 157.213ZM71.4455 115.964C79.3219 114.142 86.9587 111.423 94.2028 107.859C107.454 101.416 119.218 92.3272 128.754 81.1635C138.29 69.9998 145.393 57.0024 149.616 42.9882C154.826 56.4049 157.082 70.7696 156.235 85.1206C155.388 99.4715 151.455 113.477 144.702 126.201C137.948 138.924 128.53 150.071 117.076 158.894C105.622 167.718 92.3979 174.016 78.2887 177.365C69.6966 158.123 67.3391 136.715 71.5411 116.09L71.4455 115.964ZM145.478 38.3839C140.899 55.709 131.75 71.5148 118.969 84.1786C106.188 96.8424 90.236 105.908 72.7506 110.445C77.3599 93.1276 86.5374 77.3376 99.3407 64.696C112.144 52.0543 128.112 43.0164 145.606 38.5099L145.478 38.3839ZM67.1806 111.738C46.3947 115.866 24.829 113.531 5.43364 105.052C8.81402 91.0721 15.1697 77.9691 24.0753 66.6204C32.9808 55.2717 44.231 45.9392 57.0719 39.2476C69.9128 32.5561 84.0481 28.6601 98.5318 27.8204C113.016 26.9807 127.513 29.2167 141.054 34.3787C126.907 38.5665 113.788 45.609 102.521 55.0633C91.2536 64.5176 82.0822 76.1793 75.5833 89.3153C71.9426 96.4875 69.1549 104.054 67.2762 111.864L67.1806 111.738Z"
          fill="#606D53"
        />
      </svg>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "inherit",
          position: "absolute",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem 0",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "31px",
                fontFamily: "Cormorant",
              }}
            >
              Preparing Your Big Day
              <br /> with Various Conveniences & Exclusive Offers
            </h1>
          </div>
          <div
            style={{
              margin: "3rem 0",
              color: "#B5AF8F",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "12rem",
                marginRight: "3rem",
              }}
            >
              <div
                style={{
                  height: "3rem",
                  width: "3rem",
                  backgroundColor: "#B5AF8F",
                  color: "#455437",
                  borderRadius: "2rem",
                  float: "left",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "0 0.5rem",
                }}
              >
                <ContactSupportOutlinedIcon
                  style={{
                    height: "3rem",
                  }}
                />
              </div>
              <h4
                style={{
                  margin: "0",
                  fontSize: "1.15rem",
                }}
              >
                Fast & East
                <br />
                Enquiry
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                width: "18rem",
                marginRight: "3rem",
              }}
            >
              <div
                style={{
                  height: "3rem",
                  width: "3rem",
                  backgroundColor: "#B5AF8F",
                  color: "#455437",
                  borderRadius: "2rem",
                  float: "left",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "0 0.5rem",
                }}
              >
                <LoyaltyOutlinedIcon
                  style={{
                    height: "3rem",
                  }}
                />
              </div>
              <h4
                style={{
                  margin: "0",
                  fontSize: "1.15rem",
                }}
              >
                Exclusive Promo & <br />
                Free Additional Package
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                width: "15rem",
              }}
            >
              <div
                style={{
                  height: "3rem",
                  width: "3rem",
                  backgroundColor: "#B5AF8F",
                  color: "#455437",
                  borderRadius: "2rem",
                  float: "left",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "0 0.5rem",
                }}
              >
                <StoreMallDirectoryIcon
                  style={{
                    height: "3rem",
                  }}
                />
              </div>

              <h4
                style={{
                  margin: "0",
                  fontSize: "1.15rem",
                }}
              >
                Top vendor
                <br />
                recommendations
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "1rem 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center",
            width: "30vw",
          }}
        >
          <Link to="/search">
            <Button
              variant="contained"
              color={green[50]}
              style={{
                color: " #455437",
                width: "13rem",
                height: "3.5rem",
              }}
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreBanner;
