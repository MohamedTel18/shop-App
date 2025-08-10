import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../component/cart-Item';
import { mockProduct } from './mockData';

describe('CartItem Component', () => {
  const mockAddToCart = vi.fn();

  beforeEach(() => {
    mockAddToCart.mockClear();
  });

  it('renders product information correctly', () => {
    render(<CartItem product={mockProduct} addToCart={mockAddToCart} />);
    
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.rating.rate} (${mockProduct.rating.count})`)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });

  it('starts with quantity of 1', () => {
    render(<CartItem product={mockProduct} addToCart={mockAddToCart} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('increases quantity when plus button is clicked', async () => {
    const user = userEvent.setup();
    render(<CartItem product={mockProduct} addToCart={mockAddToCart} />);
    
    const plusButton = screen.getByRole('button', { name: 'Increase quantity' });
    await user.click(plusButton);
    
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('decreases quantity when minus button is clicked but not below 1', async () => {
    const user = userEvent.setup();
    render(<CartItem product={mockProduct} addToCart={mockAddToCart} />);
    
    const minusButton = screen.getByRole('button', { name: 'Decrease quantity' });
    const plusButton = screen.getByRole('button', { name: 'Increase quantity' });
    
    // Increase to 2 first
    await user.click(plusButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    
    // Then decrease back to 1
    await user.click(minusButton);
    expect(screen.getByText('1')).toBeInTheDocument();
    
    // Try to decrease below 1 - should stay at 1
    await user.click(minusButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls addToCart with correct product and quantity when Add to Cart is clicked', async () => {
    const user = userEvent.setup();
    render(<CartItem product={mockProduct} addToCart={mockAddToCart} />);
    
    const plusButton = screen.getByRole('button', { name: 'Increase quantity' });
    const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });
    
    // Increase quantity to 3
    await user.click(plusButton);
    await user.click(plusButton);
    expect(screen.getByText('3')).toBeInTheDocument();
    
    // Click add to cart
    await user.click(addToCartButton);
    
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 3);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });

  it('resets quantity to 1 after adding to cart', async () => {
    const user = userEvent.setup();
    render(<CartItem product={mockProduct} addToCart={mockAddToCart} />);
    
    const plusButton = screen.getByRole('button', { name: 'Increase quantity' });
    const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });
    
    // Increase quantity to 2
    await user.click(plusButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    
    // Click add to cart
    await user.click(addToCartButton);
    
    // Quantity should reset to 1
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<CartItem product={mockProduct} addToCart={mockAddToCart} />);
    
    expect(document.querySelector('.cart-item')).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toHaveClass('product-category');
    expect(document.querySelector('.quantity-display')).toBeInTheDocument();
  });

  it('handles product with missing rating gracefully', () => {
    const productWithoutRating = { ...mockProduct, rating: { rate: 0, count: 0 } };
    render(<CartItem product={productWithoutRating} addToCart={mockAddToCart} />);
    
    expect(screen.getByText(productWithoutRating.title)).toBeInTheDocument();
    expect(screen.getByText('0 (0)')).toBeInTheDocument();
  });
});
