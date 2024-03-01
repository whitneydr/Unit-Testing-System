import React from "react";
import TestItem from "./Dashboard/TestItem";
import Progress from "./Project/Progress";
import AcceptanceCriteria from "./Project/AcceptanceCriteria";
import "../styles/project-page.css";

import Tests from "../database/Tests";
import ProjectSummary from "./Project/ProjectSummary";
import Header from "./Header";
import SideMenu from "./SideMenu";
import MobileMenu from "./MobileMenu";

const ProjectPage = () => {

    return (
        <>
        <Header />
        <SideMenu />
        <MobileMenu />
        <main>
        <div className="btn-back"><a href="./project-dashboard.html"> Back to Project List</a></div>
        <section>
            <h1>Unit Testing System</h1>
            <ProjectSummary />

            <AcceptanceCriteria />

            <Progress />

            <div className="project-details-section">
                <h2>Tests</h2>
                <div className="test-filters">
                    <a href="#" className="active">All</a>
                    <a href="#">To do</a>
                    <a href="#">Passed</a>
                    <a href="#">Failed</a>
                </div>

                <div className="test-list">
   
                    <div className="test-block">
                        <div className="test-details">
                        <div className="test-id">UST 01.01-02</div>
                        <div className="test-title">Registration button exists</div>
                        <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Unit Testing System</div>
                        <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>James Blunt</div>
                    </div>
                        <div className="test-status">To do</div>
                        
                    </div>
            
                    <div className="test-block">
                        <div className="test-details">
                        <div className="test-id">UST 01.01-01</div>
                        <div className="test-title">Registration button exists</div>
                        <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Unit Testing System</div>
                        <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>James Blunt</div>
                        </div>
                        <div className="test-status failed">Failed</div>
                    </div>
            
                    <div className="test-block">
                        <div className="test-details">
                        <div className="test-id">BC 01.01-01</div>
                        <div className="test-title">Calculator adds numbers correctly</div>
                        <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Budget calculator</div>
                        <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>Harry Styles</div>
                        </div>
                        <div className="test-status passed">Passed</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
    )
}

export default ProjectPage;