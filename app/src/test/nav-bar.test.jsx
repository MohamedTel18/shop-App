import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../component/nav-bar';

// Helper function to render with router context
const renderWithRouter = (component) => {
  return render(
    <MemoryRouter>
      {component}
    </MemoryRouter>
  );
};

describe('Nav Component', () => {
  it('renders all navigation links', () => {
    renderWithRouter(<Nav cartCount={0} />);
    
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Cart (0)' })).toBeInTheDocument();
  });

  it('displays correct cart count in cart link', () => {
    renderWithRouter(<Nav cartCount={5} />);
    
    expect(screen.getByRole('link', { name: 'Cart (5)' })).toBeInTheDocument();
  });

  it('handles zero cart count', () => {
    renderWithRouter(<Nav cartCount={0} />);
    
    expect(screen.getByRole('link', { name: 'Cart (0)' })).toBeInTheDocument();
  });

  it('handles large cart count numbers', () => {
    renderWithRouter(<Nav cartCount={99} />);
    
    expect(screen.getByRole('link', { name: 'Cart (99)' })).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    renderWithRouter(<Nav cartCount={3} />);
    
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute('href', '/shop');
    expect(screen.getByRole('link', { name: 'Cart (3)' })).toHaveAttribute('href', '/cart');
  });

  it('renders as a nav element', () => {
    renderWithRouter(<Nav cartCount={2} />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('updates cart count dynamically', () => {
    const { rerender } = renderWithRouter(<Nav cartCount={1} />);
    
    expect(screen.getByRole('link', { name: 'Cart (1)' })).toBeInTheDocument();
    
    // Re-render with different count
    rerender(
      <MemoryRouter>
        <Nav cartCount={5} />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('link', { name: 'Cart (5)' })).toBeInTheDocument();
  });

  it('handles negative cart count gracefully', () => {
    // Even though this shouldn't happen in normal use, test edge case
    renderWithRouter(<Nav cartCount={-1} />);
    
    expect(screen.getByRole('link', { name: 'Cart (-1)' })).toBeInTheDocument();
  });
});
