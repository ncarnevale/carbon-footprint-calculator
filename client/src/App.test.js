import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page with header', () => {
  render(<App />);
  const header = screen.getByText(/carbon footprint/i);
  expect(header).toBeInTheDocument();
});
