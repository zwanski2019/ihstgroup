
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  section?: "ishtgroup" | "tutoring";
}

export function Layout({ children, section }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              IHS Group
            </Link>
            <div className="flex gap-6">
              {section === "ishtgroup" ? (
                <>
                  <Link to="/ishtgroup" className="hover:text-primary">Home</Link>
                  <Link to="/ishtgroup/services" className="hover:text-primary">Services</Link>
                  <Link to="/ishtgroup/about" className="hover:text-primary">About</Link>
                  <Link to="/ishtgroup/contact" className="hover:text-primary">Contact</Link>
                </>
              ) : section === "tutoring" ? (
                <>
                  <Link to="/tutoring" className="hover:text-primary">Home</Link>
                  <Link to="/tutoring/courses" className="hover:text-primary">Courses</Link>
                  <Link to="/tutoring/tutors" className="hover:text-primary">Tutors</Link>
                  <Link to="/tutoring/resources" className="hover:text-primary">Resources</Link>
                </>
              ) : (
                <>
                  <Link to="/ishtgroup" className="hover:text-primary">IshtGroup</Link>
                  <Link to="/tutoring" className="hover:text-primary">Tutoring</Link>
                  <Link to="/about" className="hover:text-primary">About</Link>
                  <Link to="/contact" className="hover:text-primary">Contact</Link>
                  <Link to="/faq" className="hover:text-primary">FAQ</Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="container max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t mt-auto">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 IHS Group. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
