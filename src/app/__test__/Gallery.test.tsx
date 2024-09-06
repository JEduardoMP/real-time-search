import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react'
import Gallery from '../Gallery/page'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      results: [
        {
          id: 1,
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', // URL completa de la imagen
          name: 'Test photo'
        }
      ]
    })
  })
) as jest.Mock;

describe('Gallery', () => {
  it('renders the gallery title', () => {
    render(<Gallery />);
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument();
  });

  it('loads and displays photos', async () => {
    render(<Gallery />);
    await waitFor(() => {
      expect(screen.getByAltText('Test photo')).toBeInTheDocument();
    });
  });
});