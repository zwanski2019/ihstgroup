
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';

// Create a test component that uses the language context
const TestComponent = () => {
  const { currentLanguage, setLanguage, languages } = useLanguage();
  
  return (
    <div>
      <div data-testid="current-language">{currentLanguage.name}</div>
      <button 
        onClick={() => setLanguage(languages[1])} 
        data-testid="change-language"
      >
        Change to French
      </button>
    </div>
  );
};

describe('LanguageContext', () => {
  it('provides the language context to children', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    // Default language should be English
    expect(screen.getByTestId('current-language').textContent).toBe('English');
  });

  it('allows changing the language', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    // Change language to French
    act(() => {
      screen.getByTestId('change-language').click();
    });
    
    // Language should now be French
    expect(screen.getByTestId('current-language').textContent).toBe('Français');
  });

  it('throws an error when used outside LanguageProvider', () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useLanguage must be used within a LanguageProvider');
    
    // Restore console.error
    console.error = originalError;
  });
});
