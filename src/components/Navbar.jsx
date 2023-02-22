import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) =>
    route === location.pathname ? true : false;

  return (
    <div className="btm-nav bg-white">
      <button
        className={pathMatchRoute("/") ? "active" : null}
        onClick={() => navigate("/")}
      >
        <ExploreIcon
          className={
            pathMatchRoute("/") ? "active navActiveItem" : "navInactiveItem"
          }
        />
        <span style={{ color: pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f" }}>
          Explore
        </span>
      </button>
      <button
        className={pathMatchRoute("/offers") ? "active" : null}
        onClick={() => navigate("/offers")}
      >
        <OfferIcon
          className={
            pathMatchRoute("/offers")
              ? "active navActiveItem"
              : "navInactiveItem"
          }
        />
        <span
          style={{ color: pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f" }}
        >
          Offers
        </span>
      </button>
      <button
        className={pathMatchRoute("/profile") ? "active" : null}
        onClick={() => navigate("/profile")}
      >
        <PersonOutlineIcon
          className={
            pathMatchRoute("/profile")
              ? "active navActiveItem"
              : "navInactiveItem"
          }
        />
        <span
          style={{ color: pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f" }}
        >
          Profile
        </span>
      </button>
    </div>
  );
}

export default Navbar;
