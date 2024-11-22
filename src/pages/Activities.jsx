import React, { useEffect, useState } from "react";
import axios from "axios";

function Activities() {
  const [courses, setCourses] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  useEffect(() => {
    // Récupère les cours depuis l'API
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  return (
    <div>
      <h1>ACTIVITIES</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>
              <strong>Instructor:</strong>
              <button onClick={() => handleInstructorClick(course.instructor)}>
                {course.instructor.name}
              </button>
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

      {selectedInstructor && (
        <div>
          <h2>Instructor Details</h2>
          <p>
            <strong>Name:</strong> {selectedInstructor.name}
          </p>
          <p>
            <strong>Description:</strong> {selectedInstructor.description}
          </p>
          <p>
            <strong>Experience:</strong> {selectedInstructor.experience} years
          </p>
          {selectedInstructor.picture && (
            <img
              src={selectedInstructor.picture}
              alt={selectedInstructor.name}
              style={{ width: "200px", height: "auto" }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Activities;
