import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import UnitTestingSystem from './UnitTestingSystem';

test('loads unit testing system', async () => {
    render(<UnitTestingSystem />)
    let headerText = screen.getByRole('heading', {level: 1, name: 'Unit Testing System'});
    expect(headerText).toBeInTheDocument();
  })
