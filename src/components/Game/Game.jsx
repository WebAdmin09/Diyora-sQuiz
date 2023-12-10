import { Fragment } from "react";
import bear2 from "../../assets/bear2.jpg";
import grad from "../../assets/grad.jpg";
import PropTypes from "prop-types";
import style from "./Game.module.css";
const Game = ({ correct, options }) => {
  return (
    <Fragment>
      <div className="container">
        <div className={style["game"]}>
          <div>
            <p className={style["congrat"]}>
              Tabriklayman Siz {options.length} ta Savoldan {correct} tasini
              to`g`ri topdingiz!
            </p>
            <img className={style["grad"]} src={grad} alt="grad" />
          </div>
          <div className={style["game__result"]}>
            <div>
              <img className={style["bear2"]} src={bear2} alt="bear2" />
              <button className={style["reloadbtn"]}>
                <a className={style["link"]} href="/">
                  Takrorlash
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Game.propTypes = {
  options: PropTypes.array,
  length: PropTypes.number,
  correct: PropTypes.number.isRequired,
};

export default Game;
