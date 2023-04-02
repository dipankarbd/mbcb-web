import { render, screen } from '@testing-library/react';
import CumulativeBalance from './CumulativeBalance';

describe('CumulativeBalance', () => {
  it('renders balance', () => {
    render(<CumulativeBalance balance={12.231} />);

    expect(screen.getByText(/12.23/)).toBeInTheDocument();
  });
});
