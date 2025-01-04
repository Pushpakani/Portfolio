import Image from 'react-bootstrap/Image';
import React from "react";
import myimage from "../images/profile.png";

function About() {
    return (

        <section className='d-flex flex-row justify-content-center align-items-center  min-vh-100' id="about">


            <div className='m-5'>
                <h1 className='d-flex justify-content-center'>About</h1>
                <p>A highly skilled and passionate React Developer with a user-friendly,
                    and high-performance web applications using modern technologies. Adept at working with React.js, Redux, JavaScript (ES6+), and RESTful APIs, with a solid understanding of front-end design patterns, state management, and UI/UX principles. Proven track record of delivering robust, scalable solutions in agile environments. Constantly improving skills and keeping up-to-date with the latest web development trends and tools.</p>
            </div>
            <div>
                <Image src={myimage} roundedCircle />

            </div>
        </section>
    )
}
export default About;