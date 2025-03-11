
import { Link } from "react-router-dom";
import { Building, Settings, LineChart, Users, BookOpen, Laptop, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

export default function SplitLanding() {
  const [mounted, setMounted] = useState(false);

  // Animation effect on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex flex-1 w-full relative flex-col md:flex-row">
        {/* ISHTGROUP Side */}
        <div className={`flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[50vh] md:min-h-screen transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center filter brightness-60 hover:brightness-40 transition-all duration-500 ease-in-out transform hover:scale-100 scale-105 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
          />
          
          <div className="relative z-10 text-center text-white w-[90%] max-w-[450px] p-8 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 opacity-95 leading-tight">Ishtgroup</h2>
            <p className="text-lg md:text-xl mb-8 font-light leading-relaxed opacity-90">
              Empowering businesses with innovative solutions and strategies for growth.
            </p>
            
            <Link 
              to="/ishtgroup"
              className="inline-block px-7 py-3.5 bg-white text-gray-900 no-underline rounded-lg font-semibold text-base transition-all duration-500 hover:bg-blue-600 hover:text-white hover:-translate-y-1 shadow-md"
            >
              Visit Ishtgroup
            </Link>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <Building className="mr-3 opacity-90" />
                Corporate Solutions
              </div>
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <Settings className="mr-3 opacity-90" />
                Business Operations
              </div>
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <LineChart className="mr-3 opacity-90" />
                Growth Strategies
              </div>
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <Users className="mr-3 opacity-90" />
                Team Management
              </div>
            </div>
          </div>
        </div>
        
        {/* Tutoring Side */}
        <div className={`flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[50vh] md:min-h-screen transition-opacity duration-700 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center filter brightness-60 hover:brightness-40 transition-all duration-500 ease-in-out transform hover:scale-100 scale-105 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
          />
          
          <div className="relative z-10 text-center text-white w-[90%] max-w-[450px] p-8 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 opacity-95 leading-tight">Online Tutoring</h2>
            <p className="text-lg md:text-xl mb-8 font-light leading-relaxed opacity-90">
              Personalized learning experiences to help students achieve their academic goals.
            </p>
            
            <Link 
              to="/tutoring"
              className="inline-block px-7 py-3.5 bg-white text-gray-900 no-underline rounded-lg font-semibold text-base transition-all duration-500 hover:bg-green-600 hover:text-white hover:-translate-y-1 shadow-md"
            >
              Visit Online Tutoring
            </Link>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <BookOpen className="mr-3 opacity-90" />
                Subject Tutoring
              </div>
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <Laptop className="mr-3 opacity-90" />
                Online Classes
              </div>
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <Users className="mr-3 opacity-90" />
                One-on-One Sessions
              </div>
              <div className="flex items-center text-base p-3 rounded-lg bg-white/10 transition-all duration-500 hover:bg-white/20 hover:-translate-y-1">
                <GraduationCap className="mr-3 opacity-90" />
                Test Preparation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
