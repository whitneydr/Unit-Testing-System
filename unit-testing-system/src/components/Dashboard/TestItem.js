import React from 'react';

const TestItem = () => {

    return (
        <div className="test-block">
            <div className="test-details">
            <div className="test-id">UST 01.01-02</div>
            <div className="test-title">Registration button exists</div>
            <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Unit Testing System</div>
            <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>James Blunt</div>
        </div>
            <div className="test-status">To do</div>
            
        </div>
    )
}

export default TestItem;