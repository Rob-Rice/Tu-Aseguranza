import airbag from "../img/airbag.gif";
import home from "../img/home.gif";
import document from "../img/document.gif";
import Fade from "react-reveal/Fade";
import "./below-fold.css";

function BelowFold() {
  return (
    <div id="b__fold" className="b__container">
      <Fade bottom cascade>
        <div className="intro__text">
          <h2 className="black">Lorem Ipsum</h2>
          <p className="gray" id="intro-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at
            magni facere impedit aut tempore ex, autem expedita rem. Quas
            ducimus corrupti quam necessitatibus facere.
          </p>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="three-cards__wrapper">
          <div className="b__card">
            <img src={airbag} alt="Air Bag" loading="lazy" />
            <h3 className="green">Auto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              facilis nemo illum dolores nisi quos.
            </p>
          </div>

          <div className="b__card">
            <img src={home} alt="Home" loading="lazy" />
            <h3 className="green">Casa Mobiles</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              facilis nemo illum dolores nisi quos.
            </p>
          </div>

          <div className="b__card">
            <img src={document} alt="Document" loading="lazy" />
            <h3 className="green">Placas y Títulos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              facilis nemo illum dolores nisi quos.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default BelowFold;
