import React from 'react';
import { useNavigate } from 'react-router';
import { Link, Route } from 'react-router-dom';
import Courses  from '../components/courses';
import Assessments from '../components/assessments';
import About from '../components/about';

const TrainingPort = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to St Bathevara Training courses</h1>
            <div style={styles.buttonContainer}>
                <Link to="/training-portal/courses" style={styles.button}>Courses</Link>
                <Link to="/training-portal/assessments" style={styles.button}>Assessments</Link>
                <Link to="/training-portal/about" style={styles.button}>About</Link>

            </div>
            
          <Route path="/training-portal/courses">
            <div className="container form">
              <h3 className="card-title text-center">Courses</h3>
              <Courses />
            </div>
          </Route>
          <Route path="/training-portal/assessments">
            <div className="container form">
              <h3 className="card-title text-center">Assessments</h3>
              <Assessments />
            </div>
          </Route>
          <Route path="/training-portal/about">
            <div className="container form">
              <h3 className="card-title text-center">About Us</h3>
              <About />
            </div>
          </Route>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        margin: '0 10px',
        cursor: 'pointer',
    },
};

export default TrainingPort;
