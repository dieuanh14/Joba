import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SliderComponent from "../../components/Slider";
import Questions from "./questions.json";
import "../../scss/slider.scss";
import { Button } from "@mui/material";

const valueToIcon = {
  0: "😵‍💫",
  25: "😕",
  50: "😚",
  75: " 🥰",
};

function TestYourself(props) { // Pass props as an argument
  const { question } = props; // Destructure question from props
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [question.id]: newValue,
    }));
  };

  return (
    <div className="test__yourself">
      <NavBar />
      <h1 className="title">Understanding yourself</h1>
      <span className="small__title ">{question.question}</span>{" "}
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
    </div>
  );
}

export default TestYourself;
