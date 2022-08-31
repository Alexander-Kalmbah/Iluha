import React, { useState } from "react";
import style from "./SelectThree.module.css";
import "./../../App.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const SelectThree = () => {
  const [valueSelect, setValueSelect] = useState("- Модификация -");
  const [active, setActive] = useState(false);
  const selectBody = ["Модификация 1", "Модификация 2", "Модификация 3"];
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

export default SelectThree;
