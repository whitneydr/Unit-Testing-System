import React, { useState, useEffect } from "react";

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const passwordCheck = () => {
        if (password !== confirmPassword) {
            setError(true);
        } else {
            alert(`Passwords match!`);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        passwordCheck();
        console.log(
            `First Name: ${firstName} 
        Last Name: ${lastName}
        Email: ${email}
        Password: ${password}`
        )
    }

    // useEffect(() => {
    //     if (confirmPassword !== '' && password === confirmPassword) {
    //         alert(`Password matches!`)
    //     }
    // }, [password, confirmPassword])

    return (
        <main className="registration-main">
            <h1>Register</h1>
            {error ? <div className="error">Oops! Your password doesn't match!</div> : ""}
            <form onSubmit={handleSubmit}>
                <label>
                    First name
                    <input type="text" placeholder="First name" onChange={handleFirstName} />
                </label>
                <label>
                    Last name
                    <input type="text" placeholder="Last name" onChange={handleLastName} />
                </label>
                <label>
                    Email address
                    <input type="email" placeholder="Email address" onChange={handleEmail} />
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Password" onChange={handlePassword} />
                </label>
                <label>
                    Confirm password
                    <input type="password" placeholder="Confirm password" onChange={handleConfirmPassword} />
                </label>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </main>
    )
}

export default Register;