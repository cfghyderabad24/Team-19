import React, { useState } from 'react';
import './css/courses.css'; // Import CSS file for component styling

// Sample course data
const initialCourses = [
    { id: 1, name: 'React for Beginners', description: 'Learn the basics of React and build your first application.', instructor: "Instructor 1", WhatWillYouLearn: "* React; *Node js" },
    { id: 2, name: 'Advanced React', description: 'Dive deeper into React and learn advanced concepts.', instructor: "Instructor 2", WhatWillYouLearn: "* React; *Node js, *Mongo DB"},
    { id: 3, name: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript, the language of the web.', instructor: "Instructor 3" , WhatWillYouLearn: "* Javascript; *Node js"},
    { id: 4, name: 'HTML & CSS', description: 'Build beautiful websites with HTML and CSS.', instructor: "Instructor 4", WhatWillYouLearn: "* HTML; * CSS" },
    { id: 5, name: 'Node.js for Beginners', description: 'Learn how to build server-side applications with Node.js.' , instructor: "Instructor 5", WhatWillYouLearn: "*Node js; *Express js"},
];

const Courses = () => {
    const [courses] = useState(initialCourses);

    const handleEnroll = (courseName) => {
        alert(`You have enrolled in ${courseName}`);
        // Handle enrollment logic here, e.g., redirecting to a new page
    };

    return (
        <div className="courses-container">
            <h1>List of Courses</h1>
            <div className="courses-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-item">
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                        <p><strong>Instructor:</strong> {course.instructor}</p>
                        <p><strong>What Will You Learn:</strong></p>
                        <ul>
                            {course.WhatWillYouLearn.split(';').map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleEnroll(course.name)}>Enroll</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
