import logo from './logo.svg';
import './styles/uts.css';
import Login from "./components/Login";
import Register from './components/Register';

function UnitTestingSystem() {
    return (
        <>
            <header className='uts-header'>
            <img src={logo} className="uts-logo" alt="logo" />
            </header>
            <Login />
            {/* <Register /> */}
        </>
    )
}

export default UnitTestingSystem;