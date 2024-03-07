import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import MobileMenu from "./MobileMenu";
import TestList from "./Dashboard/TestList";

import "../styles/uts.css";
import "../styles/test-dash.css";

const TestDashboard = () => {

    return (
        <>
        <Header heading="Tests" />
        <SideMenu />
        <TestList />
        <MobileMenu />
    </>
    )
}

export default TestDashboard;