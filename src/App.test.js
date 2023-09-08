import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lala', () => {
  render(<App />);
  const linkElement = screen.getByText(/lala/i);
  expect(linkElement).toBeInTheDocument();
});
