import React, { useEffect, useState } from "react";
import axios from "axios";

function InstructorDashboard({ token }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (token) {
      const instructorId = getInstructorIdFromToken(token);
      axios
        .get("http://localhost:5000/courses", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setCourses(
            response.data.filter(
              (course) => course.instructor._id === instructorId
            )
          );
        })
        .catch((error) => {
          console.error("There was an error fetching the courses!", error);
        });
    }
  }, [token]);

  const getInstructorIdFromToken = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload._id;
  };

  return (
    <div>
      <h2>Your Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.duration} hours</td>
              <td>{course.price}€</td>
              <td>{course.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingCourse && (
        <form onSubmit={handleFormSubmit}>
          <h3>Edit Course: {editingCourse.title}</h3>
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <label>Description:</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <label>Duration:</label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          />
          <label>Price:</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <label>Level:</label>
          <input
            type="text"
            value={formData.level}
            onChange={(e) =>
              setFormData({ ...formData, level: e.target.value })
            }
          />
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
}

export default InstructorDashboard;
