import React from "react";
import style from "./Header.module.css";
import navStore from "../../store/navStore";
import { observer } from "mobx-react-lite";

const Header = observer((props) => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style.row}>
          <div className={style.header__element}>
            <input
              className={style.input__search}
              placeholder="Модификация или FIN"
              type="text"
            />
          </div>
          <div className={style.header__element}>
            <p className={style.text}>← Выберите одну или обе опции →</p>
          </div>
          <div className={`${style.row__search}`}>
            <div className={style.blok__input}>
              <input
                placeholder="Номер детали или поисковой запрос"
                className={style.input__search}
                type="text"
                onChange={(event) => {
                  props.setInputValue(event.target.value);
                }}
              />
            </div>
            <div className={style.blok__btn}>
              <button
                className={style.btn__search}
                onClick={() => {
                  props.elementData.filter((el) => {
                    return el === props.inputValue
                      ? navStore.setPage("element")
                      : null;
                  });
                }}
              >
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
