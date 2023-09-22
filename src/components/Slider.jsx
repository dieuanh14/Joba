import React from "react";
import Slider from "@mui/material/Slider";
import "../scss/slider.scss";

function SliderComponent({ value, handleChange, min, max, step }) {
  const handleSliderChange = (event, newValue) => {
    // Set the --slider-value property based on the slider's value
    document.documentElement.style.setProperty("--slider-value", newValue);
    handleChange(event, newValue);
  };

  return (
    <div className="slider__bar">
      <Slider
        value={value}
        onChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}

export default SliderComponent;
