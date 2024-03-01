import React from 'react';

const TestItem = ({id, title, project, assignee, status}) => {


    return (
        <div className="test-block">
            <div className="test-details">
            <div className="test-id">{id}</div>
            <div className="test-title">{title}</div>
            <div className="test-project"><span className="mobile"><strong>Project: </strong></span>{project}</div>
            <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>{assignee}</div>
        </div>
            <div className={`test-status ${status.toLowerCase()}`}>{status}</div>
            
        </div>
    )
}

export default TestItem;