import { render, screen } from '@testing-library/react';
import App from './App';
import TestDashboard from './components/TestDashboard';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('loads test dashboard', async () => {
//     render(<TestDashboard />)
//     let menuText = screen.getByRole('heading');
//     expect(menuText).toBeInTheDocument();
// })
