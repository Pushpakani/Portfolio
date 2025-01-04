import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileDownload } from "react-icons/fa";
import React, { useState } from 'react';

function Navbars() {
    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">

                <a className={`nav-link ${activeTab === "home" ? "active" : ""} navbar-brand`}
                    href="#"
                    onClick={() => handleTabClick("home")}>
                    <img src="https://cdn.pixabay.com/photo/2024/02/15/20/08/dog-8576035_1280.png" alt="Logo" style={{ height: '40px' }} />
                    PUSHPAKANI
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "home" ? "active text-color-blue" : ""}`}
                                href="#home"
                                onClick={() => handleTabClick("home")}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "about" ? "active" : ""}`}
                                href="#about"
                                onClick={() => handleTabClick("about")}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "projects" ? "active" : ""}`}
                                href="#projects"
                                onClick={() => handleTabClick("projects")}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
                                href="#skills"
                                onClick={() => handleTabClick("skills")}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
                                href="#contact"
                                onClick={() => handleTabClick("contact")}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex">
                    <a href='https://drive.google.com/file/d/1AgUGN12M7e67jL7m_lh0dk4BGz1y18PH/view?usp=drivesdk'>
                        <FaFileDownload />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbars;
