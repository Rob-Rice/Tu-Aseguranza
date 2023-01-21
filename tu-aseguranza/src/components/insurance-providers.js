import progressive from "../img/progressive.png";
import omnInsGroup from "../img/omnInsGroup.png";
import nationalGeneral from "../img/nationalGeneral.png";
import dairyLand from "../img/dairyLand.png";
import assuranceAmerica from "../img/assuranceAmerica.png";

// import Fade from "react-reveal/Fade";
import "./insurance-providers.css";

function Providers() {
  return (
    <div className="providers">
      <div className="providers-wrapper">
        <div className="providers-title">
          <h2 className="black">Insurance</h2>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={progressive} alt="Progressive Logo" />
            </div>
            <div className="slide">
              <img src={omnInsGroup} alt="Omni Insurance Group Logo" />
            </div>
            <div className="slide">
              <img src={nationalGeneral} alt="National General Logo" />
            </div>
            <div className="slide">
              <img src={dairyLand} alt="Dairy Land Logo" />
            </div>
            <div className="slide">
              <img src={assuranceAmerica} alt="Assurance America Logo" />
            </div>
            <div className="slide">
              <img src={progressive} alt="Progressive Logo" />
            </div>
            <div className="slide">
              <img src={omnInsGroup} alt="Omni Insurance Group Logo" />
            </div>
            <div className="slide">
              <img src={nationalGeneral} alt="National General Logo" />
            </div>
            <div className="slide">
              <img src={dairyLand} alt="Dairy Land Logo" />
            </div>
            <div className="slide">
              <img src={assuranceAmerica} alt="Assurance America Logo" />
            </div>
            <div className="slide">
              <img src={progressive} alt="Progressive Logo" />
            </div>
            <div className="slide">
              <img src={omnInsGroup} alt="Omni Insurance Group Logo" />
            </div>
            <div className="slide">
              <img src={nationalGeneral} alt="National General Logo" />
            </div>
            <div className="slide">
              <img src={dairyLand} alt="Dairy Land Logo" />
            </div>
            <div className="slide">
              <img src={assuranceAmerica} alt="Assurance America Logo" />
            </div>
            <div className="slide">
              <img src={progressive} alt="Progressive Logo" />
            </div>
            <div className="slide">
              <img src={omnInsGroup} alt="Omni Insurance Group Logo" />
            </div>
            <div className="slide">
              <img src={nationalGeneral} alt="National General Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Providers;
