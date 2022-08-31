import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Content from "./components/Content/Content";

function App() {
  const [inputValue, setInputValue] = useState("");
  const elementData = [
    "1ZVFT80N065122099",
    "1B3HB48B77D311715",
    "2T2BK1BA6BC081766",
  ];
  return (
    <div className="App">
      <div className="wrapper">
        <Header
          elementData={elementData}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Content
          elementData={elementData}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
}

export default App;
