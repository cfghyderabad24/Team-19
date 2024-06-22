import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login/login';
import StudentList from './Components/StudentList';
import StudentDetails from './Components/StudentDetails';
import students from './Components/data/students';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      {selectedStudent ? (
        <StudentDetails student={selectedStudent} onBack={handleBack} />
      ) : (
        <StudentList students={students} onSelectStudent={handleSelectStudent} />
      )}
    </div>
  );
}

export default App;
