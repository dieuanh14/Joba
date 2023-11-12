import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestYourself from "./TestYourself";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const questions = [
  {
    id: 1,
    question: "Bạn có khả năng tự học tốt không?",
  },
  {
    id: 2,
    question:
      "Bạn có thể thích nghi với sự thay đổi nhanh chóng của công nghệ không?",
  },
  {
    id: 3,
    question: "Bạn có thể chịu được căng thẳng và áp lực cao không?",
  },
  {
    id: 4,
    question: "Bạn có thể làm việc trong môi trường cạnh tranh không?",
  },
  {
    id: 5,
    question: "Bạn có thể giao tiếp và thuyết trình tốt không?",
  },
  {
    id: 6,
    question: "Bạn có thể làm việc nhóm tốt không?",
  },
  {
    id: 7,
    question: "Bạn có thể làm việc độc lập tốt không?",
  },
  {
    id: 8,
    question: "Bạn có thể giải quyết vấn đề tốt không?",
  },
  {
    id: 9,
    question: "Bạn có thể sáng tạo tốt không?",
  },
  {
    id: 10,
    question:
      "Bạn có quyết tâm để theo đuổi ngành học đầy cạnh tranhh này chứ?",
  },
];
function TestYourselfCarousel() {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [userAnswers, setUserAnswers] = useState({}); 
  const navigate = useNavigate();

  const handleSlideChange = (index) => {
    // Check if the current slide is the last slide
    setIsLastSlide(index === questions.length - 1);
  };
  const handleSubmission = () => {
    const answeredQuestions = Object.keys(userAnswers).length;
    const fiftyPercentCount = Object.values(userAnswers).filter(
      (value) => value >= 50
    ).length;
    console.log(answeredQuestions);
    console.log(fiftyPercentCount);
    if (answeredQuestions >= 5 && fiftyPercentCount >= 5) {
      console.log("User met the criteria.");
      navigate("/testResult");
    } else {
      console.log("User did not meet the criteria.");
      navigate('/failureResult')
    }
  };
  return (
    <div>
      <Carousel
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            color: "white",
            cursor: "pointer",
          };
          const style = isSelected
            ? { ...defStyle, color: "red" }
            : { ...defStyle };

          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              { + index}
            </span>
          );
        }}
        onChange={handleSlideChange} 
      >
        {questions.map((question) => (
          <div key={question.id}>
            <TestYourself question={question} setUserAnswers={setUserAnswers} />
          </div>
        ))}
      </Carousel>
      {isLastSlide && ( 
        <Button
          type="submit"
          style={{
            position: "absolute",
            bottom: "40%",
            left: "50%",
            background: "white",
          }}
          onClick={handleSubmission}
        >
          Submit
        </Button>
      )}
    </div>
  );
}

export default TestYourselfCarousel;
