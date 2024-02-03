import logo from './logo.svg';
import './styles/uts.css';
import Login from "./components/Login";
import Register from './components/Register';

function UnitTestingSystem() {
    return (
        <div className="uts">
            <header className='uts-header'>
            <img src={logo} className="uts-logo" alt="logo" />
            </header>
            {/* <Login /> */}
            <Register />
        </div>
    )
}

export default UnitTestingSystem;