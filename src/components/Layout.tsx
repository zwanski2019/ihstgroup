
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import { Globe, BookOpen, User, LogOut, Shield, Users } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface LayoutProps {
  children: React.ReactNode;
  section?: "ishtgroup" | "tutoring";
}

export function Layout({ children, section }: LayoutProps) {
  const { user, signOut, isAdmin, isParent } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gradient">
              IHS Group
            </Link>
            <div className="flex items-center gap-6">
              {section === "ishtgroup" ? (
                <>
                  <Link to="/ishtgroup" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Home</span>
                    <span className="md:hidden">
                      <Globe className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link to="/ishtgroup/services" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Services</span>
                  </Link>
                  <Link to="/ishtgroup/about" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">About</span>
                  </Link>
                  <Link to="/ishtgroup/contact" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Contact</span>
                  </Link>
                </>
              ) : section === "tutoring" ? (
                <>
                  <Link to="/tutoring" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Home</span>
                    <span className="md:hidden">
                      <BookOpen className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link to="/tutoring/courses" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Courses</span>
                  </Link>
                  <Link to="/tutoring/tutors" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Tutors</span>
                  </Link>
                  <Link to="/tutoring/resources" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Resources</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/ishtgroup" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Business Solutions</span>
                    <span className="md:hidden">
                      <Globe className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link to="/tutoring" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Education</span>
                    <span className="md:hidden">
                      <BookOpen className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">About</span>
                  </Link>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Contact</span>
                  </Link>
                </>
              )}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {user?.email?.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>
                        {user.email}
                        {user.role && <div className="text-xs text-muted-foreground mt-1 capitalize">{user.role}</div>}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      
                      {isAdmin() && (
                        <DropdownMenuItem asChild>
                          <Link to="/admin/dashboard" className="flex items-center">
                            <Shield className="mr-2 h-4 w-4" />
                            Admin Dashboard
                          </Link>
                        </DropdownMenuItem>
                      )}
                      
                      {isParent() && (
                        <DropdownMenuItem asChild>
                          <Link to="/parent/dashboard" className="flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            Parent Dashboard
                          </Link>
                        </DropdownMenuItem>
                      )}
                      
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          My Dashboard
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button asChild variant="outline" size="sm">
                    <Link to="/auth/login">Sign In</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t mt-auto">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">IHS Group</h3>
              <p className="text-sm text-muted-foreground">
                The premier educational and business consultancy in Tunisia, providing world-class services since 2010.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/ishtgroup/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Business Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/tutoring/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Educational Programs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">User Portals</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/admin/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Admin Portal
                  </Link>
                </li>
                <li>
                  <Link to="/parent/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Parent Portal
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Student Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-6 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 IHS Group. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
