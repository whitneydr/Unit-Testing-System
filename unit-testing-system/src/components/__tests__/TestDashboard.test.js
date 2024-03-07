import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TestDashboard from '../TestDashboard';


test('loads test dashboard', async () => {
  render(<TestDashboard />)
  let menuText = screen.getByRole('heading', {level:1});
  expect(menuText).toHaveTextContent('Tests');
})

test('loads new test button', async () => {
  render(<TestDashboard />)
  let testButton = screen.getByRole('button',{name: /new test/i});
  expect(testButton).toBeInTheDocument();
})