import home from "../img/home.png";
import Fade from "react-reveal/Fade";
import "./imgText.css";

function ImgText() {
  return (
    <div className="p__container">
      <div className="p__wrapper">
        <div className="p__img">
            <Fade bottom>
          <img src={home} alt="Need Home Insurance" loading="lazy" />
          </Fade>
        </div>
        <Fade bottom cascade>

        <div className="p__text-cta">
          <h2 className="white">Casa Mobiles</h2>
          <br/>
          <p className="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at 
          magni facere impedit aut tempore ex, autem expedita rem. Quas ducimus.
          </p>
          <a href="" className="p__btn" target="_blank" rel="noopener">
            Get a quote
          </a>
        </div>
        </Fade>

      </div>
    </div>
  );
}

export default ImgText;
