import React from 'react';


const Header = () => {

    return (
        <header>
        <div id="logo" className="desktop"><img src="/logo192.png" alt="logo" /></div>
        <div className="page-title mobile">
            <h1>Projects</h1>
        </div>
        <div className="create-new">
            <button className="btn btn-secondary" href="#">+ New project</button>
            <button className="btn btn-primary" href="#">+ New test</button>
        </div>
    </header>
    )
}

export default Header;