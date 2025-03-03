
import { renderHook, act } from '@testing-library/react-hooks';
import { useToast } from './use-toast';

describe('useToast hook', () => {
  it('should return toast functions and state', () => {
    const { result } = renderHook(() => useToast());
    
    expect(result.current).toHaveProperty('toast');
    expect(result.current).toHaveProperty('dismiss');
    expect(result.current).toHaveProperty('toasts');
    expect(Array.isArray(result.current.toasts)).toBe(true);
  });

  it('should add a toast when toast function is called', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({ title: 'Test Toast', description: 'This is a test' });
    });
    
    expect(result.current.toasts.length).toBeGreaterThan(0);
    expect(result.current.toasts[0].title).toBe('Test Toast');
    expect(result.current.toasts[0].description).toBe('This is a test');
  });

  it('should dismiss a toast when dismiss function is called', () => {
    const { result } = renderHook(() => useToast());
    
    let toastId: string;
    
    act(() => {
      const response = result.current.toast({ title: 'Test Toast' });
      toastId = response.id;
    });
    
    expect(result.current.toasts[0].open).toBe(true);
    
    act(() => {
      result.current.dismiss(toastId);
    });
    
    expect(result.current.toasts[0].open).toBe(false);
  });
});
