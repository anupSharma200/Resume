import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Phone } from 'lucide-react';
import { resumeData } from './data';
import profileImage from './essets/image.jpeg';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navLinks = ['Home', 'Projects', 'About', 'Skills', 'Experience', 'Contact'];

  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-800 bg-darkBg/90 backdrop-blur-md sticky top-0 z-50">
      <div className="text-primaryBlue font-bold text-2xl tracking-tighter">ANUP.</div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setActiveSection(link)}
            className={`hover:text-primaryBlue transition-colors ${
              activeSection === link ? 'text-primaryBlue' : 'text-textLight'
            }`}
          >
            {link}
          </button>
        ))}
      </div>
      <a href="https://drive.google.com/file/d/1mFLJ0QS9tBsr0rIcCWPSaf02WEGSOFkH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-primaryBlue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors inline-block">
        Resume
      </a>
    </nav>
  );
};

const Hero = ({ setActiveSection }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-10 max-w-6xl mx-auto min-h-[80vh]">
      <div className="md:w-3/5 space-y-6 mt-10 md:mt-0">
        <div className="text-yellow-400 font-medium text-lg flex items-center gap-2">
          👋 Hello, I'm
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          {resumeData.name}
        </h1>
        <h2 className="text-2xl text-primaryBlue font-semibold flex items-center">
          {resumeData.title} <span className="animate-pulse ml-1">|</span>
        </h2>
        <p className="text-textMuted leading-relaxed max-w-xl text-lg">
          {resumeData.summary}
        </p>
        
        <div className="flex gap-4 pt-4">
          <button onClick={() => setActiveSection('Projects')} className="bg-primaryBlue text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors">
            Explore Projects
          </button>
          <a href="https://drive.google.com/file/d/1mFLJ0QS9tBsr0rIcCWPSaf02WEGSOFkH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="border border-gray-600 text-textLight px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
            Download Resume <Download size={18} />
          </a>
        </div>

        <div className="flex gap-6 pt-6 text-textMuted">
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={24} />
          </a> */}
          <a href="https://www.linkedin.com/in/anup-sharma-898258183/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:anupasharam12koa@gmail.com" className="hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="md:w-2/5 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primaryBlue p-2 relative">
          <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
          {/* Decorative glow effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] -z-10"></div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ title }) => (
  <div className="mb-10">
    <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
    <div className="w-20 h-1 bg-primaryBlue rounded-full"></div>
  </div>
);

const About = () => (
  <div className="py-20 px-10 max-w-4xl mx-auto min-h-[70vh]">
    <SectionHeading title="About Me" />
    <div className="bg-cardBg p-8 rounded-2xl border border-gray-800 shadow-xl">
      <p className="text-textLight leading-relaxed text-lg mb-6">
        {resumeData.summary}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <h4 className="text-primaryBlue font-semibold mb-2">Location</h4>
          <p>{resumeData.contact.location}</p>
        </div>
        <div>
          <h4 className="text-primaryBlue font-semibold mb-2">Education</h4>
          {resumeData.education.map((edu, idx) => (
            <div key={idx}>
              <p className="font-medium text-white">{edu.degree}</p>
              <p className="text-textMuted text-sm">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className="py-20 px-10 max-w-5xl mx-auto min-h-[70vh]">
    <SectionHeading title="Technical Skills" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(resumeData.skills).map(([category, skills]) => (
        <div key={category} className="bg-cardBg p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
          <h4 className="text-xl font-semibold text-primaryBlue mb-4">{category}</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <div className="py-20 px-10 max-w-4xl mx-auto min-h-[70vh]">
    <SectionHeading title="Professional Experience" />
    <div className="space-y-8">
      {resumeData.experience.map((exp, idx) => (
        <div key={idx} className="bg-cardBg p-8 rounded-xl border border-gray-800 relative">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-primaryBlue rounded-full border-4 border-darkBg hidden md:block"></div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
              <h5 className="text-primaryBlue font-medium text-lg">{exp.company}</h5>
            </div>
            <span className="text-textMuted bg-gray-900 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 whitespace-nowrap">
              {exp.date}
            </span>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-2 text-textMuted">
            {exp.points.map((point, pIdx) => (
              <li key={pIdx} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <div className="py-20 px-10 max-w-6xl mx-auto min-h-[70vh]">
    <SectionHeading title="Project Highlights" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumeData.projects.map((project, idx) => (
        <div key={idx} className="bg-cardBg p-6 rounded-xl border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-white">{project.name}</h4>
            <ExternalLink className="text-gray-500" size={20} />
          </div>
          <p className="text-textMuted">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="py-24 px-10 max-w-6xl mx-auto min-h-[50vh] flex flex-col items-center justify-center">
    <div className="text-center mb-12">
      <h4 className="text-primaryBlue font-bold uppercase tracking-wider text-sm mb-3">CONTACT</h4>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
      <p className="text-textMuted text-lg">
        Feel free to reach out for opportunities, collaborations or discussions.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      <a href="mailto:anupasharam12koa@gmail.com" className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
        <Mail className="text-primaryBlue mb-4 group-hover:scale-110 transition-transform" size={32} />
        <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
        <p className="text-textMuted text-sm">anupasharam12koa@gmail.com</p>
      </a>
      
      <a href="tel:+917807924149" className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
        <Phone className="text-primaryBlue mb-4 group-hover:scale-110 transition-transform" size={32} />
        <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
        <p className="text-textMuted text-sm">+91 7807924149</p>
      </a>
      
      <a href="https://www.linkedin.com/in/anup-sharma-898258183/" target="_blank" rel="noopener noreferrer" className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
        <Linkedin className="text-primaryBlue mb-4 group-hover:scale-110 transition-transform" size={32} />
        <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
        <p className="text-textMuted text-sm">Visit Profile</p>
      </a>
      

    </div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home': return <Hero setActiveSection={setActiveSection} />;
      case 'About': return <About />;
      case 'Skills': return <Skills />;
      case 'Experience': return <Experience />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      default: return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-darkBg text-textLight">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="animate-in fade-in duration-500">
        {renderSection()}
      </main>
      
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-900 mt-20">
        <p>Built with React & Tailwind CSS.</p>
        <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
