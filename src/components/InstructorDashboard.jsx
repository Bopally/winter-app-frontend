import React, { useEffect, useState } from "react";
import axios from "axios";

function InstructorDashboard({ token }) {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    level: "beginner",
  });

  useEffect(() => {
    const fetchCourses = async () => {
      if (token) {
        const instructorId = getInstructorIdFromToken(token);
        try {
          const response = await axios.get("http://localhost:5000/courses", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const instructorCourses = response.data.filter(
            (course) => course.instructor._id === instructorId
          );
          setCourses(instructorCourses);
        } catch (error) {
          console.error("Error fetching courses", error);
        }
      }
    };

    fetchCourses();
  }, [token]);

  // Function to extract the instructor ID from the token

  const getInstructorIdFromToken = (token) => {
    if (!token) {
      console.error("Token is undefined");
      return null;
    }
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload._id;
    } catch (error) {
      console.error("Error parsing token", error);
      return null;
    }
  };

  // Function to handle the creation of a new course

  const handleCreate = async (e) => {
    e.preventDefault();
    const instructorId = getInstructorIdFromToken(token);
    if (!instructorId) {
      console.error("Instructor ID is not available");
      return;
    }
    const courseData = {
      ...formData,
      instructor: instructorId,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/courses",
        courseData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCourses([...courses, response.data]); // Append the new course to the list of courses for the currently logged-in instructor
      setFormData({
        title: "",
        description: "",
        duration: "",
        price: "",
        level: "beginner",
      });
    } catch (error) {
      console.error(
        "Error creating course",
        error.response?.data || error.message
      );
    }
  };

  // Function to handle a course for editing

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      duration: course.duration,
      price: course.price,
      level: course.level,
    });
  };

  // Function to handle course deletion

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:5000/courses/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course", error);
    }
  };

  // Function to handle the submission of the form when creating or editing a course

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/courses/${editingCourse._id}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCourses(
        courses.map((course) =>
          course._id === editingCourse._id ? response.data : course
        )
      );
      setEditingCourse(null);
    } catch (error) {
      console.error(
        "Error updating course",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <h2>Instructor Dashboard</h2>
      <h3>Your Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <p>
              <strong>Price:</strong> €{course.price}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration} hours
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
            <button onClick={() => handleEdit(course)}>Edit</button>
            <button onClick={() => handleDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>{editingCourse ? "Edit Course" : "Create New Course"}</h3>
      <form onSubmit={editingCourse ? handleFormSubmit : handleCreate}>
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
        <label>Duration:</label>
        <input
          type="number"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          required
        />
        <label>Price:</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <label>Level:</label>
        <select
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
          required
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <button type="submit">
          {editingCourse ? "Save Changes" : "Create Course"}
        </button>
      </form>
    </div>
  );
}

export default InstructorDashboard;
