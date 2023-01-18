import { useState } from "react";
import "./App.css";
import Gallery from "./component/gallery";
import Slider from "./component/slides";
import styled from "styled-components";

function App() {
  const StyleMotionComponent = styled.div`
    transition: ease-in-out 3s;
  `;
  const [changeComponent, setChangeComponent] = useState(<Slider />);
  const [checked, setChecked] = useState("checked");
  const [checked2, setChecked2] = useState("");
  const change = (e) => {
    if (e == 1) {
      setChangeComponent(<Gallery className="ease-out duration-300" />);
      setChecked("");
      setChecked2("checked");
    } else if (e == 0) {
      setChangeComponent(<Slider className="ease-out duration-300" />);
      setChecked2("");
      setChecked("checked");
    }
    console.log(e);
  };
  return (
    <div className="App flex flex-col justify-center items-center relative ">
      <StyleMotionComponent>{changeComponent}</StyleMotionComponent>
      <div className="absolute bottom-5">
        <input
          type="radio"
          name="slider"
          value="0"
          checked={checked}
          onChange={(e) => change(e.target.value)}
          className="m-3"
        />
        <input
          type="radio"
          name="slider"
          value="1"
          checked={checked2}
          onChange={(e) => change(e.target.value)}
          className="m-3"
        />
      </div>
    </div>
  );
}

export default App;
