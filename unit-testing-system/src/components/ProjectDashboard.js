import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import MobileMenu from "./MobileMenu";
import ProjectList from "./Dashboard/ProjectList";

import "../styles/uts.css";
import "../styles/project-dash.css";



const ProjectDashboard = () => {

    return (
        <>
            <Header />
            <SideMenu />
            <ProjectList />
            <MobileMenu />
        </>

    )
}

export default ProjectDashboard;