import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestYourself from "./TestYourself";

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
  return (
    <Carousel
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
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
            {"." + index}
          </span>
        );
      }}
    >
      {questions.map((question) => (
        <div key={question.id}>
          <TestYourself question={question} />
        </div>
      ))}
    </Carousel>
  );
}

export default TestYourselfCarousel;
