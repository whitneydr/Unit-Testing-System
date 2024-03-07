import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectDashboard from '../ProjectDashboard';

test('loads project dashboard', async () => {
    render(<ProjectDashboard />)
    let menuText = screen.getByRole('heading');
    expect(menuText).toBeInTheDocument();
  })