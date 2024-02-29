import React from "react";

const MobileMenu = () => {

    return (
        <nav className="nav-menu-mobile mobile">
            <a href="./project-dashboard.html" className="active"><img src="/icons/Business.svg" alt="" />
                Projects
            </a>
            <a href="./test-dashboard.html"><img src="/icons/Products.svg" alt="" />
                Tests
            </a>
            <a href="#"><img src="/icons/News.svg" alt="" />
                Reports
            </a>
            <a href="#"><img src="/icons/More.svg" alt="" />
                More
            </a>

        </nav>
    )
}

export default MobileMenu;