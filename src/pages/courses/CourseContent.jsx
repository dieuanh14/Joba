import React from "react";
import { useLocation } from "react-router-dom";

export const CourseContent = () => {
  const location = useLocation();
  const { state } = location || {};
  const selectedCourse = state && state.selectedCourse;
  console.log(selectedCourse);
  if (selectedCourse) {
    return (
      <div>
        <h2>Course Content for {selectedCourse.courseName.name}</h2>
        <p>Date: {selectedCourse.courseName.date}</p>
        <p>{selectedCourse.courseName.content}</p>
        {/* You can display other content details here */}
      </div>
    );
  } else {
    // Handle the case where the course data is not available
    return (
      <div>
        <h2>Course Not Found</h2>
        <p>The requested course could not be found.</p>
      </div>
    );
  }
};
