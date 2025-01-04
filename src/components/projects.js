import React from "react";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Garments Management System",
            description: "A complete system to manage garments sales, inventory, and orders.",
            imageUrl: "data:image/jpeg;base64,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",
            repoLink: "https://github.com/yourusername/garments-management",
            liveLink: "https://garments-management-system.com"
        },
        {
            id: 2,
            title: "Virtual Placement Application",
            description: "A platform for students to get placements through virtual interviews and assessments.",
            imageUrl: "https://cdn.prod.website-files.com/664678c4bb2376a19eee41f5/665f2c8a78e18e98bfea2030_652866be8ed4491c9fd0e721_24_7%2520Virtual%2520Assistants%2520-%2520Diverse%2520Virtual%2520Assistance%2520Services.webp",
            repoLink: "https://github.com/yourusername/virtual-placement",
            liveLink: "https://virtual-placement-app.com"
        },
        {
            id: 3,
            title: "Personal Expense Tracker",
            description: "An app to track personal expenses and manage budgets.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkS8Z1Rpz-YjHTHRJjWrS-ika9WNWqXiEFRw&s",
            repoLink: "https://github.com/yourusername/expense-tracker",
            liveLink: "https://expense-tracker-app.com"
        }
    ];

    return (
        <section id="projects" className="py-5 bg-light">
            <div className="container pt-5">
                <h2 className="text-center mb-5">Projects</h2>
                <div className="row">
                    {projects.map((project) => (
                        <div key={project.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
                                            GitHub
                                        </a>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
