import React, { useState } from "react";

const SideMenu = () => {

    const [active, setActive] = useState(false);



    return (
        <nav className="desktop">
        <div className="last-login">
            <strong>Davy Jones</strong><br />
            <span>Last logged in 31 July 2023 at 4.45pm</span>
        </div>
        <div className="nav-menu">
            <a href="./project-dashboard.html" className="active"><img src="/icons/Business.svg" alt="" />
                Projects
            </a>
            <a href="./test-dashboard.html"><img src="/icons/Products.svg" alt="" />
                Tests
            </a>
            <a href="#"><img src="/icons/News.svg" alt="" />
                Reports
            </a>
            <a href="#"><img src="/icons/Balance Transfer.svg" alt="" />
                Templates
            </a>
            <a href="#"><img src="/icons/Catalogue.svg" alt="" />
                Help and support
            </a>
            <a href="#"><img src="/icons/Process Central.svg" alt="" />
                Administration
            </a>
            <a href="#"><img src="/icons/Lock.svg" alt="" />
                Account details
            </a>
            <a href="#"><img src="/icons/Exit.svg" alt="" />
                Log out
            </a>
        </div>
    </nav>
    )
}

export default SideMenu;