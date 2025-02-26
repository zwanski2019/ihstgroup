
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
