import React from 'react';
import './css/assessments.css'; // Import CSS file for component styling

const Assessments = () => {
    // Sample data for different types of assessments
    const assessments = {
        softSkills: [
            { id: 1, title: 'Communication Skills', description: 'Assess your verbal and non-verbal communication skills.' },
            { id: 2, title: 'Teamwork', description: 'Evaluate your ability to work effectively within a team.' },
            { id: 3, title: 'Problem Solving', description: 'Test your approach to solving various problems.' },
        ],
        interviewSkills: [
            { id: 1, title: 'Technical Interview Preparation', description: 'Prepare for technical interviews with sample questions and tips.' },
            { id: 2, title: 'Behavioral Interview Preparation', description: 'Get ready for behavioral interviews with common questions and techniques.' },
            { id: 3, title: 'Mock Interviews', description: 'Practice with mock interviews to build confidence.' },
        ],
        codingSkills: [
            { id: 1, title: 'Algorithm Challenges', description: 'Solve algorithm challenges to improve your coding skills.' },
            { id: 2, title: 'Data Structures', description: 'Learn and practice various data structures.' },
            { id: 3, title: 'Language Proficiency', description: 'Enhance your proficiency in different programming languages.' },
        ],
    };

    // Function to render each type of assessment
    const renderAssessments = (title, assessments) => (
        <div className="assessment-category">
            <h2>{title}</h2>
            <div className="assessment-list">
                {assessments.map((assessment) => (
                    <div key={assessment.id} className="assessment-item">
                        <h3>{assessment.title}</h3>
                        <p>{assessment.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="assessments-container">
            <h1>Assessments</h1>
            {renderAssessments('Soft Skills', assessments.softSkills)}
            {renderAssessments('Interview Skills', assessments.interviewSkills)}
            {renderAssessments('Coding Skills', assessments.codingSkills)}

        </div>
    );
};

export default Assessments;

