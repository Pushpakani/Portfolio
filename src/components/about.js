import Image from 'react-bootstrap/Image';
import React from "react";
import myimage from "../images/profile.png";
import "../App.css"

function About() {
    return (

        <section className="row g-0 text-center align-items-center mb-5 min-vh-100" id="about">
            <div className="col-sm-6 col-md-8 justify-text-content">
                <h1 className="text-center">About</h1>
                <p className="justify">A highly skilled and passionate React Developer with a user-friendly,
                    and high-performance web applications using modern technologies. Adept at working with React.js, Redux, JavaScript (ES6+), and RESTful APIs, with a solid understanding of front-end design patterns, state management, and UI/UX principles. Proven track record of delivering robust, scalable solutions in agile environments. Constantly improving skills and keeping up-to-date with the latest web development trends and tools.</p>
            </div>
            <div className="col-sm-6 col-md-4">
                <Image src={myimage} roundedCircle className="img-fluid" alt="Profile Image" />
            </div>
        </section>
    )
}
export default About;
