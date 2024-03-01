import logo from './logo.svg';
import './styles/uts.css';
import Login from "./components/Login";
import Register from './components/Register';
import ProjectDashboard from './components/ProjectDashboard';
import TestDashboard from './components/TestDashboard';
import ProjectPage from './components/ProjectPage';

function UnitTestingSystem() {
    return (
        <>
            {/* <header className='uts-header'>
            <img src={logo} className="uts-logo" alt="logo" />
            </header> */}
            <Login />
            {/* <Register /> */}
            {/* <ProjectDashboard /> */}
            {/* <TestDashboard /> */}
            {/* <ProjectPage /> */}
        </>
    )
}

export default UnitTestingSystem;