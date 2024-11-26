import { useEffect, useState } from "react";
import axios from "axios";

function SkiActivity() {
  const [courses, setCourses] = useState([]);

  // Fonction pour récupérer les cours depuis l'API
  const fetchCourses = () => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        console.log("Courses fetched:", response.data);
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  };

  useEffect(() => {
    fetchCourses(); // Appelle fetchCourses lors du montage du composant
  }, []);

  return (
    <div className="ski-activity">
      <div className="card-container">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkiActivity;
