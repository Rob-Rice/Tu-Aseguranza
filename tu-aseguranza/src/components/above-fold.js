import carInsurance from "../img/carInsurance.png";
import "./above-fold.css";

function AboveFold() {
  return (
    <div className="f__container">
      <div className="f__wrapper">
        <div className="f__text">
          <h1 className="black">Tu Aseguranza</h1>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at
            magni facere impedit aut tempore ex, autem expedita rem. Quas
            ducimus corrupti quam necessitatibus facere.
          </p>
          <a href="" className="q__btn" target="_blank" rel="noopener">
            Get a quote
          </a>
        </div>
        <div className="f__img">
          <img src={carInsurance} alt="Car Insurance" />
        </div>
      </div>
      <a href="#b__fold" className="arrow-down">
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  );
}

export default AboveFold;
