import React from "react";
import ProjectItem from "./ProjectItem";
import Projects from "../../database/Projects";

const ProjectList = () => {


    return (
        <main>
            <div className="test-filters">
                <a href="#" className="active">All</a>
                <a href="#">Backlog</a>
                <a href="#">In progress</a>
                <a href="#">Complete</a>
            </div>
            <div className="project-list">
                <div className="project-block project-block-headings desktop">
                    <div className="project-details">
                        <div>Project ID</div>
                        <div>Project name</div>
                        <div>Due date</div>
                        <div>Owner</div>
                    </div>
                    <div className="project-status">Status</div>

                </div>

                {Projects.map((project) => {
                   return <ProjectItem key={project.id} id={project.id} title={project.title} deadline={project.deadline} owner={project.owner} status={project.status} />
                })}

            </div>


        </main>
    )
}

export default ProjectList;