import React from "react";

const Register = () => {

    return (
        <>
            <h1>Register</h1>
            <form>
                <label>
                    First name
                    <input type="text" placeholder="First name" />
                </label>
                <label>
                    Last name
                    <input type="text" placeholder="Last name" />
                </label>
                <label>
                    Email address
                    <input type="email" placeholder="Email address" />
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Password" />
                </label>
                <label>
                    Confirm password
                    <input type="password" placeholder="Confirm password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;