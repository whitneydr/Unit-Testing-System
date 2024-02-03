import React from "react";

let users = [
    {
        email: "test@test.com",
        password: "OpenSesame"
    },
    {
        email: "check@test.com",
        password: "Giraffe7"
    }
]

const Login = () => {

    const authenticate = (username, password) => {

    }

    return (
        <div>
            <h1>Log in</h1>
            <form id="login">
                <label>
                    Email:
                    <input type="email" placeholder="Enter your email address" />
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Enter your password" />
                </label>
                <a href="#" className="forgot-password">Forgot your password?</a>

                <button type="submit">Login</button>
            </form>
            <p><a href="#">New user? Sign up for an account</a></p>
        </div>
    )
}

export default Login;