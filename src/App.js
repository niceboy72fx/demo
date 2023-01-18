import { useState } from "react";
import "./App.css";
import Gallery from "./component/gallery";
import Slider from "./component/slides";

function App() {
  const [changeComponent, setChangeComponent] = useState(<Slider />);
  const change = (e) => {
    if (e == 1) {
      setChangeComponent(<Gallery />);
    } else if (e == 0) {
      setChangeComponent(<Slider />);
    }
    console.log(e);
  };
  return (
    <div className="App flex flex-col justify-center items-center">
      {changeComponent}
      <div className="m-4">
        <input
          type="radio"
          name="slider"
          value="0"
          checked="checked"
          onChange={(e) => change(e.target.value)}
          className="m-3"
        />
        <input
          type="radio"
          name="slider"
          value="1"
          onChange={(e) => change(e.target.value)}
          className="m-3"
        />
      </div>
    </div>
  );
}

export default App;
