import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import SideMenu from "../SideMenu";

describe('Side menu displays correctly', () => {
    test ('Projects menu', async () => {
        render(<SideMenu />);
        let menuProject = screen.getByRole('link', {name: 'Projects'});
        expect(menuProject).toBeInTheDocument();
    });

    test ('Tests menu', async () => {
        render(<SideMenu />);
        let menuTest = screen.getByRole('link', {name: 'Tests'});
        expect(menuTest).toBeInTheDocument();
    });

    test ('Reports menu', async () => {
        render(<SideMenu />);
        let menuReports = screen.getByRole('link', {name: 'Reports'});
        expect(menuReports).toBeInTheDocument();
    });

    test ('Templates menu', async () => {
        render(<SideMenu />);
        let menuTemplates = screen.getByRole('link', {name: 'Templates'});
        expect(menuTemplates).toBeInTheDocument();
        let menuDocumentation = screen.getByRole('link', {name: 'Help and support'});
        expect(menuDocumentation).toBeInTheDocument();
    });
})
