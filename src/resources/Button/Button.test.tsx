import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from '.';

const mockOnClick = jest.fn();

describe('Button', () => {
  test('it should render button', () => {
    render(<Button label="Test Button" />);

    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  test('it should call on click', () => {
    render(<Button label="Test Button" onClick={mockOnClick} />);

    const button = screen.getByRole('button', { name: 'Test Button' });

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('it should accept and render icon', () => {
    render(<Button label="Test Button" onClick={mockOnClick} icon={<span>Icon</span>} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('it should accept button variants', () => {
    render(<Button label="Test Button" variant="contained" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
