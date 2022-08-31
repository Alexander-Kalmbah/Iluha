import React, { useState } from "react";
import style from "./SelectTwo.module.css";
import "./../../App.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const SelectTwo = () => {
  const [valueSelect, setValueSelect] = useState("- Модельный ряд -");
  const [active, setActive] = useState(false);
  const selectBody = ["Модель 1", "Модель 2", "Модель 3"];
  return (
    <div className="select">
      <div className={style.select__header} onClick={() => setActive(!active)}>
        <span className={style.select__current}>{valueSelect}</span>
        <div className={style.select__icon}>
          {active ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
      </div>
      {active ? (
        <div className={style.select__body}>
          {selectBody.map((item, index) => (
            <div
              key={index}
              value={item}
              className={style.select__item}
              onClick={() => {
                setValueSelect(item);
                setActive(!active);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SelectTwo;
