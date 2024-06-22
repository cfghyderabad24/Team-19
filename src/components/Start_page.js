import React from 'react';
import './Homepage.css'; // Import CSS file for styling

function HomePage() {
    return (
        <div className="home-page">
            <header className="header">
                <h1>Welcome to St. Bhatevara Foundation</h1>
                <p>A place for kindness and compassion.</p>
            </header>

            <section className="cards-section">
                <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/previews/007/931/694/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg" alt="About Us" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">About Us</h3>
                        <p className="card-description">Learn more about our mission and values.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="https://static.wixstatic.com/media/862e21_66e4c0a17eca4eecbd63ee8ca80e120e~mv2.jpg/v1/fill/w_640,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/862e21_66e4c0a17eca4eecbd63ee8ca80e120e~mv2.jpg" alt="Get Involved" className="card-image" />
                    <div className="card-content" />
                    <div className="card-content">
                        <h3 className="card-title">Programs</h3>
                        <p className="card-description">Discover our ongoing programs and initiatives.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2017/09/08/18/46/volunteers-2729695_640.jpg" alt="Get Involved" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Get Involved</h3>
                        <p className="card-description">Find out how you can contribute and volunteer.</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 St. Bhatevara Foundation. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
