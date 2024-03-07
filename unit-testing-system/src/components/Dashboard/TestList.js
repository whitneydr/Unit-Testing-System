import React from "react";
import TestItem from "./TestItem";
import Tests from "../../database/Tests";

const TestList = () => {

    return (
        <main>
        <div className="test-filters">
            <a href="#" className="active">All</a>
            <a href="#">To do</a>
            <a href="#">Passed</a>
            <a href="#">Failed</a>
        </div>
        <div className="test-list">
            <div className="test-block test-block-headings desktop">
                <div className="test-details">
                    <div>Test ID</div>
                    <div>Test title</div>
                    <div>Project title</div>
                    <div>Assigned to</div>
                </div>
                <div className="test-status">Status</div>

            </div>
            <div className="test-block">
                <div className="test-details">
                    <div className="test-id">UST 01.01-02</div>
                    <div className="test-title">Registration button exists</div>
                    <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Unit Testing
                        System</div>
                    <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>James Blunt
                    </div>
                </div>
                <div className="test-status">To do</div>

            </div>

            {Tests.map((test) => {
                return <TestItem key={test.id} id={test.id} title={test.title} project={test.projectName} status={test.status} assignee={test.assignee} />
            })}

            {/* <div className="test-block">
                <div className="test-details">
                    <div className="test-id">UST 01.01-01</div>
                    <div class="test-title">Registration button exists</div>
                    <div class="test-project"><span class="mobile"><strong>Project: </strong></span>Unit Testing
                        System</div>
                    <div class="test-assignee"><span class="mobile"><strong>Assigned to: </strong></span>James Blunt
                    </div>
                </div>
                <div class="test-status failed">Failed</div>
            </div> */}

            {/* <div class="test-block">
                <div class="test-details">
                    <div class="test-id">BC 01.01-01</div>
                    <div class="test-title">Calculator adds numbers correctly</div>
                    <div class="test-project"><span class="mobile"><strong>Project: </strong></span>Budget
                        calculator</div>
                    <div class="test-assignee"><span class="mobile"><strong>Assigned to: </strong></span>Harry
                        Styles</div>
                </div>
                <div class="test-status passed">Passed</div>
            </div> */}
        </div>


    </main>
    )
}

export default TestList;