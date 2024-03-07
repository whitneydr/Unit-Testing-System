import { getByText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProjectList from "../../Dashboard/ProjectList";

test ('loads Unit Testing System project', async() => {
    render(<ProjectList />)
    const projectName = screen.getByText('Unit Testing System');
    expect(projectName).toBeInTheDocument();
});

