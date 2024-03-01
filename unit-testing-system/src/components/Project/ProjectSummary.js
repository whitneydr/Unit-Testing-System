import React from "react";

const ProjectSummary = () => {

    return (
        <div id="project-summary" className="project-details-section">
                <div className="edit-button"><img src="../unit-testing-system/public/icons/Edit.svg" /></div>
                <h2>Project Summary</h2>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper nibh justo, at
                        vulputate eros varius sit amet. Mauris non turpis magna. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Cras pellentesque lacinia
                        eros, eget finibus urna dictum eu. Aenean tellus odio, pretium et eros a, congue egestas
                        mauris. Fusce quis tincidunt urna.
                    </p>
                </div>
                <div className="edit-link">Edit summary</div>
            </div>
    )
}

export default ProjectSummary;