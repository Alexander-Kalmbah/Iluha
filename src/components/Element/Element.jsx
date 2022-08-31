import React from "react";

const Element = (props) => {
  return (
    <div>
      {props.elementData.map((el, index) =>
        el === props.inputValue ? (
          <span key={index}>
            <br />
            {el}
            {/* {el === props.inputValue ? el : null} */}
            <br />
          </span>
        ) : null
      )}
    </div>
  );
};

export default Element;
