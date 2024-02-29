const Projects = [
    {
        id: "UTS",
        title: "Unit Testing System",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "7 Aug 2024",
        status: "In progress",
        owner: "Harry Styles",
        tests: ["UTS 01.01-01", "UTS 01.01-02", "UTS 01.02-01", "UTS 01.03-01"],
        acs: [
            {
                id: "UTS AC1",
                criteria: "Styling and typography must match designs provided",
                status: "Complete"
            },
            {
                id: "UTS AC2",
                criteria: "User must be able to log in securely",
                status: "In progress"
            },
            {
                id: "UTS AC3",
                criteria: "User dashboard must display all available projects",
                status: "No tests assigned"
            }
        ]
    },
    {
        id: "SAH",
        title: "Savings Account Hub",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "11 Apr 2024",
        status: "In Progress",
        owner: "James Blunt",
        tests: ["SAH 01.01-01", "SAH 01.01-02", "SAH 01.02-01", "SAH 01.03-01"],
        acs: [
            {
                id: "SAH AC1",
                criteria: "Styling and typography must match designs provided",
                status: "Complete"
            },
            {
                id: "SAH AC2",
                criteria: "User must be able to log in securely",
                status: "In Progress"
            },
            {
                id: "SAH AC3",
                criteria: "User dashboard must display all available projects",
                status: "No tests assigned"
            }
        ]
    },
    {
        id: "MRS",
        title: "Mars Rover Spycam",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "23 Dec 2037",
        status: "Backlog",
        owner: "Elon Musk",
        tests: ["MRS 01.01-01", "MRS 01.01-02", "MRS 01.02-01", "MRS 01.03-01"],
        acs: [
            {
                id: "MRS AC1",
                criteria: "Styling and typography must match designs provided",
                status: "Complete"
            },
            {
                id: "MRS AC2",
                criteria: "User must be able to log in securely",
                status: "In Progress"
            },
            {
                id: "MRS AC3",
                criteria: "User dashboard must display all available projects",
                status: "No tests assigned"
            }
        ]
    },
    {
        id: "DT1",
        title: "Decision Tree",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "1 Feb 2024",
        status: "Complete",
        owner: "Harry Styles",
        tests: ["DT1 01.01-01", "DT1 01.01-02", "DT1 01.02-01", "DT1 01.03-01"],
        acs: [
            {
                id: "DT1 AC1",
                criteria: "Styling and typography must match designs provided",
                status: "Complete"
            },
            {
                id: "DT1 AC2",
                criteria: "User must be able to log in securely",
                status: "In Progress"
            },
            {
                id: "DT1 AC3",
                criteria: "User dashboard must display all available projects",
                status: "No tests assigned"
            }
        ]
    }
]

export default Projects;