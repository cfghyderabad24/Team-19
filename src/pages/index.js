import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to St Bathevara Training courses</h1>
            <div style={styles.buttonContainer}>
                <Link to="/courses" style={styles.button}>Courses</Link>
                <Link to="/assessments" style={styles.button}>Assessments</Link>
            </div>
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

export default Home;
