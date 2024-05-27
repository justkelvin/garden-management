import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>CLEAN MY GARDEN SOLUTION</small>
                    <h1>Your Most Trusted <br />Gardening Partner</h1>
                    <small>Achieve garden perfection with Clean My Garden Solution. Our expert team ensures meticulous care and attention to detail, leaving your outdoor space pristine and beautiful. Trust us to transform your garden into a haven of natural beauty</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Session</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;