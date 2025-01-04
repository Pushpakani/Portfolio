import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { } from "react-icons/gr";

function Skills() {
    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container pt-5">
                <h2 className="text-center mb-5">Skills</h2>
                <div className="row text-center">
                    <div className="col-md-3 mb-4">
                        <div className="skill-card">
                            <FaPython size={60} className="text-primary mb-3" />
                            <h5>Python</h5>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="skill-card">
                            <FaHtml5 size={60} className="text-danger mb-3" />
                            <h5>HTML</h5>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="skill-card">
                            <FaCss3Alt size={60} className="text-info mb-3" />
                            <h5>CSS</h5>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="skill-card">
                            <FaJs size={60} className="text-warning mb-3" />
                            <h5>JavaScript</h5>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="skill-card">
                            <FaReact size={60} className="text-info mb-3" />
                            <h5>ReactJS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
