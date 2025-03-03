
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector component', () => {
  it('renders the language selector component', () => {
    render(<LanguageSelector />);
    
    // Check if the button with the English language is rendered
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', () => {
    render(<LanguageSelector />);
    
    // Click the language selector button
    fireEvent.click(screen.getByRole('button'));
    
    // Check if all language options are visible
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Français')).toBeInTheDocument();
    expect(screen.getByText('العربية')).toBeInTheDocument();
  });

  it('changes language when an option is selected', () => {
    render(<LanguageSelector />);
    
    // Open the dropdown
    fireEvent.click(screen.getByRole('button'));
    
    // Select French
    fireEvent.click(screen.getByText('Français'));
    
    // The button should now show French
    expect(screen.getByText('Français')).toBeInTheDocument();
  });
});
