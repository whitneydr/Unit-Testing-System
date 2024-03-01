import React from "react";

const AcceptanceCriteria = () => {

    return (
        <div id="acceptance-criteria" className="project-details-section">
                <h2>Acceptance Criteria</h2>
                <div className="ac-list">
                    <div className="ac-block">
                        <div className="ac-details">
                            <div className="ac-id">AC1</div>
                            <div className="ac-title">Styling and typography must match designs provided</div>
                        </div>
                        <div className="ac-status complete">Complete</div>
                    </div>
                    <div className="ac-block">
                        <div className="ac-details">
                            <div className="ac-id">AC2</div>
                            <div className="ac-title">User must be able to log in securely</div>
                        </div>
                        <div className="ac-status in-progress">In progress</div>
                    </div>
                    <div className="ac-block">
                        <div className="ac-details">
                            <div className="ac-id">AC3</div>
                            <div className="ac-title">User dashboard must display all available projects</div>
                        </div>
                        <div className="ac-status">To do</div>
                    </div>
                </div>
                <div className="edit-link">+ Add acceptance criteria</div>
            </div>
    )
}

export default AcceptanceCriteria;