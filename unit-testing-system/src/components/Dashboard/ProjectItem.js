import React from "react";

const ProjectItem = ({id, title, deadline, owner, status}) => {
    let statusClass;
    if (status.toLowerCase() === "in progress") {
        statusClass = "in-progress"
    } else if (status.toLowerCase() === "complete") {
        statusClass = "complete"
    }

    return (
        <div className="project-block">
                <div className="project-details">
                    <div className="project-id">{id}</div>
                    <div className="project-title"><a href="./project-page.html">{title}</a></div>
                    <div className="project-due-date"><span className="mobile"><strong>Due date: </strong></span>{deadline}
                    </div>
                    <div className="project-owner"><span className="mobile"><strong>Project owner: </strong></span>{owner}</div>
                </div>
                <div className={`project-status ${statusClass}`}>{status}</div>

            </div>
    )
}

export default ProjectItem;