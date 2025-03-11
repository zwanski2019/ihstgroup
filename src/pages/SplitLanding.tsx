
import React from 'react';
import { Link } from 'react-router-dom';

const SplitLanding = () => {
  return (
    <div className="container flex flex-1 w-full relative">
      <div className="split ishtgroup flex-1 flex flex-col items-center justify-center relative overflow-hidden w-1/2 min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center brightness-60 transition-all duration-400 scale-105 hover:brightness-40 hover:scale-100" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")' }}></div>
        <div className="split-content relative z-10 text-center text-white w-[90%] max-w-[450px] p-8 rounded-2xl bg-black/20 backdrop-blur-md shadow-md">
          <h2 className="text-4xl mb-5 font-bold leading-tight opacity-95">Ishtgroup</h2>
          <p className="text-lg mb-8 font-light leading-relaxed opacity-90">Empowering businesses with innovative solutions and strategies for growth.</p>
          <Link to="/ishtgroup" className="btn inline-block py-3.5 px-7 bg-white text-gray-800 no-underline rounded-lg font-semibold text-base transition-all duration-400 shadow-md hover:bg-blue-600 hover:text-white hover:-translate-y-0.5">
            Visit Ishtgroup
          </Link>
          <div className="services mt-10 grid grid-cols-2 gap-5 w-full">
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-building mr-3 text-[1.1rem] opacity-90"></i>
              Corporate Solutions
            </div>
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-cogs mr-3 text-[1.1rem] opacity-90"></i>
              Business Operations
            </div>
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-chart-line mr-3 text-[1.1rem] opacity-90"></i>
              Growth Strategies
            </div>
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-users mr-3 text-[1.1rem] opacity-90"></i>
              Team Management
            </div>
          </div>
        </div>
      </div>
      <div className="split tutoring flex-1 flex flex-col items-center justify-center relative overflow-hidden w-1/2 min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center brightness-60 transition-all duration-400 scale-105 hover:brightness-40 hover:scale-100" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")' }}></div>
        <div className="split-content relative z-10 text-center text-white w-[90%] max-w-[450px] p-8 rounded-2xl bg-black/20 backdrop-blur-md shadow-md">
          <h2 className="text-4xl mb-5 font-bold leading-tight opacity-95">Online Tutoring</h2>
          <p className="text-lg mb-8 font-light leading-relaxed opacity-90">Personalized learning experiences to help students achieve their academic goals.</p>
          <Link to="/tutoring" className="btn inline-block py-3.5 px-7 bg-white text-gray-800 no-underline rounded-lg font-semibold text-base transition-all duration-400 shadow-md hover:bg-green-600 hover:text-white hover:-translate-y-0.5">
            Visit Online Tutoring
          </Link>
          <div className="services mt-10 grid grid-cols-2 gap-5 w-full">
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-book mr-3 text-[1.1rem] opacity-90"></i>
              Subject Tutoring
            </div>
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-laptop mr-3 text-[1.1rem] opacity-90"></i>
              Online Classes
            </div>
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-chalkboard-teacher mr-3 text-[1.1rem] opacity-90"></i>
              One-on-One Sessions
            </div>
            <div className="service-item flex items-center text-[0.95rem] p-3 rounded-lg bg-white/10 transition-all duration-400 hover:bg-white/20 hover:-translate-y-0.5">
              <i className="fas fa-graduation-cap mr-3 text-[1.1rem] opacity-90"></i>
              Test Preparation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitLanding;
