import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartSummary from '../component/cart-summary';
import { mockProduct } from './mockData';

describe('CartSummary Component', () => {
  const mockRemoveFromCart = vi.fn();
  const productInCart = { ...mockProduct, quantity: 3 };

  beforeEach(() => {
    mockRemoveFromCart.mockClear();
  });

  it('renders product information correctly', () => {
    render(<CartSummary product={productInCart} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText(productInCart.title)).toBeInTheDocument();
    expect(screen.getByText(`$${productInCart.price}`)).toBeInTheDocument();
    expect(screen.getByText(`Qty: ${productInCart.quantity}`)).toBeInTheDocument();
    expect(screen.getByAltText(productInCart.title)).toBeInTheDocument();
  });

  it('calculates and displays total price correctly', () => {
    render(<CartSummary product={productInCart} removeFromCart={mockRemoveFromCart} />);
    
    const expectedTotal = (productInCart.price * productInCart.quantity).toFixed(2);
    expect(screen.getByText(`Total: $${expectedTotal}`)).toBeInTheDocument();
  });

  it('calls removeFromCart with correct product id when remove button is clicked', async () => {
    const user = userEvent.setup();
    render(<CartSummary product={productInCart} removeFromCart={mockRemoveFromCart} />);
    
    const removeButton = screen.getByRole('button', { name: 'Remove from Cart' });
    await user.click(removeButton);
    
    expect(mockRemoveFromCart).toHaveBeenCalledWith(productInCart.id);
    expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
  });

  it('handles decimal prices correctly', () => {
    const productWithDecimalPrice = { ...productInCart, price: 19.99, quantity: 2 };
    render(<CartSummary product={productWithDecimalPrice} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText('$19.99')).toBeInTheDocument();
    expect(screen.getByText('Total: $39.98')).toBeInTheDocument();
  });

  it('handles single quantity items', () => {
    const singleQuantityProduct = { ...productInCart, quantity: 1 };
    render(<CartSummary product={singleQuantityProduct} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText('Qty: 1')).toBeInTheDocument();
    expect(screen.getByText(`Total: $${singleQuantityProduct.price}`)).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<CartSummary product={productInCart} removeFromCart={mockRemoveFromCart} />);
    
    expect(document.querySelector('.cart-summary')).toBeInTheDocument();
    expect(screen.getByText(`$${productInCart.price}`)).toHaveClass('cart-item-price');
    expect(screen.getByText(`Qty: ${productInCart.quantity}`)).toHaveClass('cart-item-quantity');
    expect(document.querySelector('.cart-item-total')).toBeInTheDocument();
  });

  it('handles large quantities correctly', () => {
    const largeQuantityProduct = { ...productInCart, quantity: 99, price: 10.50 };
    render(<CartSummary product={largeQuantityProduct} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText('Qty: 99')).toBeInTheDocument();
    expect(screen.getByText('Total: $1039.50')).toBeInTheDocument();
  });

  it('rounds total to 2 decimal places', () => {
    const productWithComplexPrice = { ...productInCart, price: 33.333, quantity: 3 };
    render(<CartSummary product={productWithComplexPrice} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText('Total: $100.00')).toBeInTheDocument();
  });
});
