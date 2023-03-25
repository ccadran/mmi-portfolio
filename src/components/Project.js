import React, { useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
    const [currentProject] = useState(projectsData[projectNumber]);
    console.log(currentProject);
    return (
        <div>
            <div className="project-main">
                <div className="project-content">
                    <h1>{currentProject.title}</h1>
                    <p>{currentProject.date}</p>
                    <ul className="languages">
                        {currentProject.languages.map((item) => {
                            return <li key={item}>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;
