import React from "react";

const ErrorMessage = (props) => {
    return (
        <div className="error-message">
            <p>{props.error}</p>
        </div>
    )
}

export default ErrorMessage;