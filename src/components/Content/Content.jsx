import React from "react";
import style from "./Content.module.css";
import SelectOne from "../SelectOne/SelectOne";
import SelectTwo from "../SelectTwo/SelectTwo";
import Element from "../Element/Element";
import "./../../App.css";
import SelectThree from "../SelectThree/SelectThree";
import navStore from "./../../store/navStore";
import { observer } from "mobx-react-lite";

const Content = observer((props) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        {navStore.page === "index" ? (
          <div className={style.row}>
            <div className={style.card}>
              <p className={style.text}>Легковые автомобили</p>
              <div className="card__content">
                <img
                  className="card__img"
                  src="../../../images/GLC300-COUPE-AVP-DR.png"
                  alt=""
                />
                <SelectOne />
                <SelectTwo />
                <SelectThree />
              </div>
            </div>
            <div className={style.card}>
              <p className={style.text}>Внедорожный а/м</p>
              <div className="card__content">
                <img
                  className="card__img"
                  src="../../../images/g-class.png"
                  alt=""
                />
                <SelectOne />
                <SelectTwo />
                <SelectThree />
              </div>
            </div>
            <div className={style.card}>
              <p className={style.text}>Малотоннажные автомобили</p>
              <div className="card__content">
                <img
                  className="card__img"
                  src="../../../images/micro-bus.png"
                  alt=""
                />
                <SelectOne />
                <SelectTwo />
                <SelectThree />
              </div>
            </div>
            <div className={style.card}>
              <p className={style.text}>Smart</p>
              <div className="card__content">
                <img
                  className="card__img"
                  src="../../../images/smart.png"
                  alt=""
                />
                <SelectOne />
                <SelectTwo />
                <SelectThree />
              </div>
            </div>
          </div>
        ) : null}
        {navStore.page === "element" ? (
          <Element
            elementData={props.elementData}
            inputValue={props.inputValue}
            setInputValue={props.setInputValue}
          />
        ) : null}
      </div>
    </div>
  );
});

export default Content;
