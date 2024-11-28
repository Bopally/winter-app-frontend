import { useEffect, useState } from "react";
import axios from "axios";

function SkiActivity() {
  const [courses, setCourses] = useState([]);
  const [visibleInstructor, setVisibleInstructor] = useState(null);

  const fetchCourses = () => {
    // axios
    //   .get("http://localhost:5000/courses")
    //   .then((response) => {
    //     console.log("Courses fetched:", response.data);
    //     setCourses(response.data);
    //   })
    axios
      .get(`${import.meta.env.VITE_API_URL}/courses`)
      .then((response) => {
        console.log("Courses fetched:", response.data);
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const toggleInstructorInfo = (instructorId) => {
    setVisibleInstructor(
      visibleInstructor === instructorId ? null : instructorId
    );
  };

  return (
    <div className="ski-activity">
      <div className="card-container">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>
              <strong>Instructor:</strong>{" "}
              <span
                className="instructor-name"
                onClick={() => toggleInstructorInfo(course.instructor._id)}
              >
                {course.instructor.name}
              </span>
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

            {visibleInstructor === course.instructor._id && (
              <div className="instructor-details">
                <img
                  src={course.instructor.picture}
                  alt={course.instructor.name}
                  className="instructor-image"
                />
                <p>
                  <strong>Description:</strong> {course.instructor.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkiActivity;
