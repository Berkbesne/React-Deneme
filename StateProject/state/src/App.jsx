import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = [
    "Dingo",
    "Hedgehog",
    "Ibex", //
    "Kitten",
    "Orangutan",
    "Zebra",
  ];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses((prevCourses) => [...prevCourses, getRandomCourse()]);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10 px" }}>
        {courses.map((course, index) => (
          <Course key={index} courseName={course} />
        ))}
      </div>
      <button style={{ width: "110px", height: "40px" }} onClick={handleClick}>
        Add Random Animal
      </button>
    </div>
  );
}

export default App;
