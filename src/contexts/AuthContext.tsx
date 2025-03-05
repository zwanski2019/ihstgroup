
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { toast } from 'sonner';

export type UserRole = 'admin' | 'parent' | 'student' | 'tutor';

interface AuthUser extends User {
  role?: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, role?: UserRole) => Promise<void>;
  signOut: () => Promise<void>;
  isAdmin: () => boolean;
  isParent: () => boolean;
  isStudent: () => boolean;
  setUserRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Helper functions to check roles
  const isAdmin = () => user?.role === 'admin';
  const isParent = () => user?.role === 'parent';
  const isStudent = () => user?.role === 'student' || (!isAdmin() && !isParent());

  // Function to manually set user role (for testing)
  const setUserRole = (role: UserRole) => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem(`user_role_${user.id}`, role);
      toast.success(`Role changed to ${role}`);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        // In a real app, we would fetch the role from a user_roles table
        // Here we'll simulate by checking email patterns or use localStorage
        const userData = { ...session.user } as AuthUser;
        const storedRole = localStorage.getItem(`user_role_${userData.id}`);
        
        if (storedRole) {
          // Make sure the stored role is valid
          const validatedRole = validateRole(storedRole);
          userData.role = validatedRole;
        } else if (userData.email?.includes('admin')) {
          userData.role = 'admin';
          localStorage.setItem(`user_role_${userData.id}`, 'admin');
        } else if (userData.email?.includes('parent')) {
          userData.role = 'parent';
          localStorage.setItem(`user_role_${userData.id}`, 'parent');
        } else {
          userData.role = 'student';
          localStorage.setItem(`user_role_${userData.id}`, 'student');
        }
        
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        // Same logic as above for role determination
        const userData = { ...session.user } as AuthUser;
        const storedRole = localStorage.getItem(`user_role_${userData.id}`);
        
        if (storedRole) {
          // Make sure the stored role is valid
          const validatedRole = validateRole(storedRole);
          userData.role = validatedRole;
        } else if (userData.email?.includes('admin')) {
          userData.role = 'admin';
          localStorage.setItem(`user_role_${userData.id}`, 'admin');
        } else if (userData.email?.includes('parent')) {
          userData.role = 'parent';
          localStorage.setItem(`user_role_${userData.id}`, 'parent');
        } else {
          userData.role = 'student';
          localStorage.setItem(`user_role_${userData.id}`, 'student');
        }
        
        setUser(userData);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Function to validate role string against UserRole type
  const validateRole = (role: string): UserRole => {
    const validRoles: UserRole[] = ['admin', 'parent', 'student', 'tutor'];
    return validRoles.includes(role as UserRole) 
      ? (role as UserRole) 
      : 'student'; // Default to student if role is invalid
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string, role: UserRole = 'student') => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error;
    
    // Store the role in localStorage to simulate a user_roles table
    if (data.user) {
      localStorage.setItem(`user_role_${data.user.id}`, role);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      signIn, 
      signUp, 
      signOut, 
      isAdmin, 
      isParent, 
      isStudent,
      setUserRole 
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
