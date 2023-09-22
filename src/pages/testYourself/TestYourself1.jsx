import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SliderComponent from "../../components/Slider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../../scss/slider.scss";
const valueToIcon = {
  0: "😵‍💫",
  25: "😕",
  50: "😚",
  75: " 🥰",
};

function TestYourself() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="test__yourself">
      <NavBar />
      <h1 className="title">Understanding yourself</h1>
      <span className="small__title">
        “Đổ vỡ” có phải là biệt danh của bạn?
      </span>
      <div className="icon__container">
        <h2>{valueToIcon[value]}</h2>
      </div>
      <SliderComponent
        value={value}
        handleChange={handleChange}
        min={0}
        max={75}
        step={25}
      />
      <div className="btn">
        <Button className="prev__btn">
          <Link to="/testyourself">Back </Link>
        </Button>
        <Button className="next__btn">
          <Link to="/testResult">Next</Link>
        </Button>
      </div>
    </div>
  );
}

export default TestYourself;
