
import React from 'react';
import './Homepage.css'; // Import CSS file for styling

function About() {
    return (
        <div className="home-page">
            <header className="header">
                <h1>FOUNDATION TRUSTEES 
                </h1>
            </header>

            <section className="cards-section">
                <div className="card">
                    <img src="https://imagetolink.com/ib/U63wgaayr1.png"  alt="About Us" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Mr. S. T. Bhatevara
                        </h3>
                        <p className="card-description">Chairman.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="https://imagetolink.com/ib/I8Md7SKyDH.jpg" alt="Programs" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Rosy Bhatevara</h3>
                        <p className="card-description">Managing Trustee </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 St. Bhatevara Foundation. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
