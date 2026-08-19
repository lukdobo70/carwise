import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('CarWise', () => {
  it('renders the product promise and independent score labels', () => {
    render(<App />);
    expect(screen.getByText(/Nie szukaj auta/i)).toBeInTheDocument();
    expect(screen.getAllByText('Car Score').length).toBeGreaterThan(0);
  });
});
