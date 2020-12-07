import { render, screen } from '@testing-library/react';
import CreditContainer from './CreditContainer';

test('renders learn react link', () => {
  render(<CreditContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
