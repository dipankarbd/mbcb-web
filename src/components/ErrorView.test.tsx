import { render, screen } from '@testing-library/react';
import ErrorView from './ErrorView';

describe('ErrorView', () => {
  it('renders error message', () => {
    const errorMessage = 'this is a error!';

    render(<ErrorView errorMessage={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
