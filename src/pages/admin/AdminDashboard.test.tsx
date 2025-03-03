
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

// Mock any necessary providers or context
jest.mock('../../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: '123', email: 'admin@example.com', role: 'admin' },
    isAuthenticated: true,
  }),
}));

describe('AdminDashboard', () => {
  it('renders the admin dashboard with correct heading', () => {
    render(
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
  });

  it('displays admin user information', () => {
    render(
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/admin@example.com/i)).toBeInTheDocument();
  });

  it('contains navigation elements for admin functions', () => {
    render(
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    );
    
    // Check for common admin navigation items
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Reports/i)).toBeInTheDocument();
    expect(screen.getByText(/Settings/i)).toBeInTheDocument();
  });
});
