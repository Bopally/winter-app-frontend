import React, { useEffect, useState } from "react";
import axios from "axios";

function SkiActivity({ token }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  return (
    <div>
      <h2>Ski Activities</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>
              <strong>Instructor:</strong> {course.instructor.name}
            </p>
            <p>
              <strong>Price:</strong> €{course.price}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration} hours
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkiActivity;
