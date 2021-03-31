import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Northern Getaway Backyard Solutions/i);
  expect(titleElement).toBeInTheDocument();
});
