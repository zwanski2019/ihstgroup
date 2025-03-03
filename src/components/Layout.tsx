
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import { Globe, BookOpen, User, LogOut, Shield, Users } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
  section?: "ishtgroup" | "tutoring";
}

export function Layout({
  children,
  section
}: LayoutProps) {
  const {
    user,
    signOut,
    isAdmin,
    isParent
  } = useAuth();
  
  const { t } = useLanguage();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gradient">
              IHST Group
            </Link>
            <div className="flex items-center gap-6">
              {section === "ishtgroup" ? <>
                  <Link to="/ishtgroup" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">Home</span>
                    <span className="md:hidden">
                      <Globe className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link to="/ishtgroup/services" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">{t('services')}</span>
                  </Link>
                  <Link to="/ishtgroup/about" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">{t('about')}</span>
                  </Link>
                  <Link to="/ishtgroup/contact" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">{t('contact')}</span>
                  </Link>
                </> : section === "tutoring" ? <>
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
                </> : <>
                  <Link to="/ishtgroup" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">{t('businessSolutions')}</span>
                    <span className="md:hidden">
                      <Globe className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link to="/tutoring" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">{t('education')}</span>
                    <span className="md:hidden">
                      <BookOpen className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">{t('about')}</span>
                  </Link>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    <span className="hidden md:inline">{t('contact')}</span>
                  </Link>
                </>}
              <div className="flex items-center gap-2">
                <LanguageSelector />
                <ThemeToggle />
                {user ? <DropdownMenu>
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
                      
                      {isAdmin() && <DropdownMenuItem asChild>
                          <Link to="/admin/dashboard" className="flex items-center">
                            <Shield className="mr-2 h-4 w-4" />
                            {t('adminPortal')}
                          </Link>
                        </DropdownMenuItem>}
                      
                      {isParent() && <DropdownMenuItem asChild>
                          <Link to="/parent/dashboard" className="flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            {t('parentPortal')}
                          </Link>
                        </DropdownMenuItem>}
                      
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          {t('studentPortal')}
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> : <Button asChild variant="outline" size="sm">
                    <Link to="/auth/login">{t('signIn')}</Link>
                  </Button>}
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
              <h3 className="text-lg font-semibold mb-4">IHST Group</h3>
              <p className="text-sm text-muted-foreground">
                The premier educational and business consultancy in Tunisia, providing world-class services since 2021.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('contact')}
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
              <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/ishtgroup/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('businessSolutions')}
                  </Link>
                </li>
                <li>
                  <Link to="/tutoring/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('education')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('userPortals')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/admin/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('adminPortal')}
                  </Link>
                </li>
                <li>
                  <Link to="/parent/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('parentPortal')}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('studentPortal')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-6 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">{t('footer.rights')}</p>
              <div className="flex gap-4">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.termsOfService')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}
