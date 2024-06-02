import { render, screen } from '@testing-library/react';
import CountryFilterBtn from '../FilterArea/CountryFilterBtn';

test('renders learn react link', () => {
  render(<CountryFilterBtn />);
  const button = screen.getByText("All");
  expect(button).toBeInTheDocument();
});
