// import React from "react";

const Course = ({ course }) => {
  const parts = course.parts;
  let result = parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {parts.map((indCourse) => (
          <li key={indCourse.id}>
            {indCourse.name} {indCourse.exercises}
          </li>
        ))}
      </ul>
      <p>Total of {result} exercises</p>
    </div>
  );
};

export default Course;
