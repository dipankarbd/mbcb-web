import { render, screen } from '@testing-library/react';
import MonthlyBalance from './MonthlyBalance';

describe('MonthlyBalance', () => {
  const balance = [
    { month: 'January 2022', avarage: 1133.28 },
    { month: 'February 2022', avarage: 3050.89 },
  ];

  it('renders all items', () => {
    render(<MonthlyBalance balance={balance} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(balance.length);
  });

  it('renders amount', () => {
    render(<MonthlyBalance balance={balance} />);
    expect(screen.getByText(balance[0].avarage)).toBeInTheDocument();
  });

  it('renders month', () => {
    render(<MonthlyBalance balance={balance} />);
    expect(screen.getByText(balance[0].month)).toBeInTheDocument();
  });
});
