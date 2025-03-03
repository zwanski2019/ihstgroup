
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// Main Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Services from "./pages/Services";
import Alumni from "./pages/Alumni";

// IshtGroup Pages
import IshtGroupHome from "./pages/ishtgroup/Home";
import IshtGroupServices from "./pages/ishtgroup/Services";
import IshtGroupAbout from "./pages/ishtgroup/About";
import IshtGroupContact from "./pages/ishtgroup/Contact";

// Tutoring Pages
import TutoringHome from "./pages/tutoring/Home";
import TutoringCourses from "./pages/tutoring/Courses";
import TutoringTutors from "./pages/tutoring/Tutors";
import TutoringResources from "./pages/tutoring/Resources";

// Admin Pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import ParentDashboard from '@/pages/parent/ParentDashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/services" element={<Services />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />

                {/* IshtGroup Routes */}
                <Route path="/ishtgroup" element={<IshtGroupHome />} />
                <Route path="/ishtgroup/services" element={<IshtGroupServices />} />
                <Route path="/ishtgroup/about" element={<IshtGroupAbout />} />
                <Route path="/ishtgroup/contact" element={<IshtGroupContact />} />

                {/* Tutoring Routes */}
                <Route path="/tutoring" element={<TutoringHome />} />
                <Route path="/tutoring/courses" element={<TutoringCourses />} />
                <Route path="/tutoring/tutors" element={<TutoringTutors />} />
                <Route path="/tutoring/resources" element={<TutoringResources />} />

                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/parent/dashboard" element={<ParentDashboard />} />

                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
