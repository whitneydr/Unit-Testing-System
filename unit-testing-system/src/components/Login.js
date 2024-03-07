import React, { useState, useEffect } from "react";
import users from "../database/Users.js";

// let users = [
//     {
//         email: "test@test.com",
//         password: "OpenSesame"
//     },
//     {
//         email: "check@test.com",
//         password: "Giraffe7"
//     }
// ]

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authentication, setAuthentication] = useState(false);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const authenticate = (username, password) => {

    }

    return (
        <main>
            <h1>Log in</h1>
            <form id="login">
                <label>
                    Email:
                    <input type="email" placeholder="Enter your email address" onChange={handleUsername} />
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Enter your password" onChange={handlePassword} />
                </label>
                <a href="#" className="forgot-password">Forgot your password?</a>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p><a href="#">New user? Sign up for an account</a></p>
        </main>
    )
}

export default Login;