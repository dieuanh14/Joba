import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SliderComponent from "../../components/Slider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
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
      <span className="small__title">Mức độ “iu” công nghệ của bạn</span>
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
      <Button className="next__btn" style={{margin:'0 auto'}}>
        <Link to='/testyourself1'>Next</Link>
      </Button>
    </div>
  );
}

export default TestYourself;
