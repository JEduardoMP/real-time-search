import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {

  it('renders the search input', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search items...');
    expect(searchInput).toBeInTheDocument();
  });

  it('filters items based on search term', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search items...');

    fireEvent.change(searchInput, { target: { value: 'apple' } });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'fruit' } });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.queryByText('Carrot')).not.toBeInTheDocument();
  });
});
