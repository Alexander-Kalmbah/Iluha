import React, { useState } from "react";
import style from "./SelectOne.module.css";
import "./../../App.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const SelectOne = () => {
  const [valueSelect, setValueSelect] = useState("- Шасси / агрегат -");
  const [active, setActive] = useState(false);
  const selectBody = [
    "B-Высоковольтная АКБ",
    "E-Электродвигатель",
    "F-Автомобиль",
    "GA-Автоматическая коробка передач",
    "GM-Механическая коробка передач",
    "LG-Рулевое управление",
    "M-Двигатель",
    "N-Топливный элемент",
  ];
  return (
    <div className="select">
      <div
        className={style.select__header}
        onClick={() => {
          setActive(!active);
        }}
      >
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

export default SelectOne;
