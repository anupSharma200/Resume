import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Phone, Menu, X, Youtube, Smartphone, Globe, Server, Video, Sparkles } from 'lucide-react';
import { resumeData } from './data';
import profileImage from './essets/image.jpeg';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Projects', 'About', 'Skills', 'Experience', 'Contact'];

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-10 border-b border-gray-800 bg-darkBg/90 backdrop-blur-md sticky top-0 z-50">
      <div className="text-primaryBlue font-bold text-2xl tracking-tighter z-50">ANUP.</div>
      
      {/* Desktop Menu */}
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

      <div className="flex items-center gap-4 z-50">
        <a href={resumeData.resumeUrl || "https://drive.google.com/file/d/1zFu0-3VVJg8ZgCzb313dK-3KjW1VUjcA/view?usp=sharing"} target="_blank" rel="noopener noreferrer" className="bg-primaryBlue text-white px-5 md:px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors inline-block text-sm md:text-base">
          Resume
        </a>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white hover:text-primaryBlue transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0b1120] border-b border-gray-800 flex flex-col p-6 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActiveSection(link);
                setIsOpen(false);
              }}
              className={`py-4 text-left font-medium text-lg border-b border-gray-800/50 last:border-0 ${
                activeSection === link ? 'text-primaryBlue' : 'text-textLight'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setActiveSection }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 md:px-10 max-w-6xl mx-auto min-h-[80vh]">
      <div className="md:w-3/5 space-y-5 mt-10 md:mt-0 text-center md:text-left flex flex-col items-center md:items-start">
        <div className="text-yellow-400 font-medium text-lg flex items-center gap-2">
          👋 Hello, I'm
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          {resumeData.name}
        </h1>
        <h2 className="text-2xl text-primaryBlue font-semibold flex items-center justify-center md:justify-start flex-wrap">
          {resumeData.title} <span className="animate-pulse ml-1">|</span>
        </h2>
        
        <div className="space-y-4 max-w-xl text-left">
          <p className="text-textLight leading-relaxed text-base">
            {resumeData.bio.intro}
          </p>
          <p className="text-textMuted leading-relaxed text-base">
            {resumeData.bio.creator}
          </p>
          
          <div className="bg-[#0b1120] border border-gray-800 rounded-xl p-3.5 text-sm">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-white">My Official YouTube Channel:</span>
              <a
                href={resumeData.bio.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 hover:underline inline-flex items-center gap-1 font-medium break-all"
              >
                {resumeData.bio.youtubeUrl}
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="border-l-2 border-primaryBlue/70 pl-3.5 py-1 text-sm text-gray-300 leading-relaxed bg-gray-900/30 rounded-r-lg">
            {resumeData.bio.callToAction}
          </div>

          <p className="text-sm italic text-gray-400">
            {resumeData.bio.closing}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <button onClick={() => setActiveSection('Projects')} className="bg-primaryBlue text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors">
            Explore Projects
          </button>
          <a href={resumeData.resumeUrl || "https://drive.google.com/file/d/1zFu0-3VVJg8ZgCzb313dK-3KjW1VUjcA/view?usp=sharing"} target="_blank" rel="noopener noreferrer" className="border border-gray-600 text-textLight px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
            Download Resume <Download size={18} />
          </a>
          <a href={resumeData.youtubeUrl} target="_blank" rel="noopener noreferrer" className="bg-red-600/90 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2 shadow-lg shadow-red-900/20">
            <Youtube size={18} /> Watch on YouTube
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-6 pt-4 text-textMuted items-center">
          {resumeData.contact.github && (
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
              <Github size={24} />
            </a>
          )}
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href={resumeData.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" title="YouTube Channel">
            <Youtube size={24} />
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="hover:text-white transition-colors" title="Email">
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
  <div className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto min-h-[70vh]">
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

const skillCategoryConfig = {
  Mobile: {
    icon: Smartphone,
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-500/50',
    bgBadge: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    dotColor: 'bg-blue-400',
    description: 'Android & iOS cross-platform development'
  },
  Web: {
    icon: Globe,
    color: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/50',
    bgBadge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    dotColor: 'bg-cyan-400',
    description: 'Modern, responsive web applications'
  },
  Services: {
    icon: Server,
    color: 'text-indigo-400',
    borderColor: 'hover:border-indigo-500/50',
    bgBadge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    dotColor: 'bg-indigo-400',
    description: 'APIs, state management, databases & backend'
  },
  'Content Creation': {
    icon: Video,
    color: 'text-rose-400',
    borderColor: 'hover:border-rose-500/50',
    bgBadge: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
    dotColor: 'bg-rose-400',
    description: 'Video editing, channel growth & creative media'
  }
};

const Skills = () => (
  <div className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto min-h-[70vh]">
    <SectionHeading title="Technical Skills" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(resumeData.skills).map(([category, skills]) => {
        const config = skillCategoryConfig[category] || {
          icon: Sparkles,
          color: 'text-primaryBlue',
          borderColor: 'hover:border-primaryBlue/50',
          bgBadge: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
          dotColor: 'bg-primaryBlue',
          description: 'Core competencies'
        };
        const IconComponent = config.icon;

        return (
          <div
            key={category}
            className={`bg-cardBg p-6 sm:p-7 rounded-2xl border border-gray-800/80 ${config.borderColor} hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between group`}
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl border ${config.bgBadge} ${config.color} shadow-sm shrink-0`}>
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-primaryBlue transition-colors">
                      {category}
                    </h4>
                    <p className="text-xs text-textMuted mt-0.5">{config.description}</p>
                  </div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${config.bgBadge} shrink-0`}>
                  {skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#0b1120] hover:bg-[#131d35] text-gray-200 hover:text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium border border-gray-800/90 hover:border-gray-700 transition-all duration-200 shadow-sm flex items-center gap-2 group/skill cursor-default"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} opacity-70 group-hover/skill:opacity-100 transition-opacity shrink-0`} />
                    <span className="leading-tight">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Experience = () => (
  <div className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto min-h-[70vh]">
    <SectionHeading title="Professional Experience" />
    <div className="space-y-8">
      {resumeData.experience.map((exp, idx) => (
        <div key={idx} className="bg-cardBg p-8 rounded-xl border border-gray-800 relative">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-primaryBlue rounded-full border-4 border-darkBg hidden md:block"></div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
            <div>
              <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
              <h5 className="text-primaryBlue font-medium text-lg">{exp.company}</h5>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-textMuted bg-gray-900 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                {exp.date}
              </span>
              {exp.company === 'Independent / YouTube' && (
                <a
                  href={resumeData.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600/90 hover:bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                >
                  <Youtube size={14} />
                  YouTube
                </a>
              )}
            </div>
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
  <div className="py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto min-h-[70vh]">
    <SectionHeading title="Project Highlights (Website & Mobile Apps)" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumeData.projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link || "https://github.com/anupSharma200"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cardBg p-6 rounded-xl border border-gray-800 hover:-translate-y-2 hover:border-primaryBlue/60 hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex justify-between items-start mb-4 gap-2">
              <h4 className="text-xl font-bold text-white group-hover:text-primaryBlue transition-colors">{project.name}</h4>
              <ExternalLink className="text-gray-500 group-hover:text-primaryBlue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" size={20} />
            </div>
            <p className="text-textMuted leading-relaxed">{project.description}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center text-sm font-medium text-primaryBlue gap-1">
            <span>View Project</span>
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="py-16 md:py-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto min-h-[50vh] flex flex-col items-center justify-center">
    <div className="text-center mb-12">
      <h4 className="text-primaryBlue font-bold uppercase tracking-wider text-sm mb-3">CONTACT</h4>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
      <p className="text-textMuted text-lg">
        Feel free to reach out for opportunities, collaborations or discussions.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
      <a href={`mailto:${resumeData.contact.email}`} className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
        <Mail className="text-primaryBlue mb-4 group-hover:scale-110 transition-transform" size={32} />
        <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
        <p className="text-textMuted text-sm break-all">{resumeData.contact.email}</p>
      </a>
      
      <a href={`tel:${resumeData.contact.phone.replace(/\s+/g, '')}`} className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
        <Phone className="text-primaryBlue mb-4 group-hover:scale-110 transition-transform" size={32} />
        <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
        <p className="text-textMuted text-sm">{resumeData.contact.phone}</p>
      </a>
      
      <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
        <Linkedin className="text-primaryBlue mb-4 group-hover:scale-110 transition-transform" size={32} />
        <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
        <p className="text-textMuted text-sm">Visit Profile</p>
      </a>

      {resumeData.contact.youtube && (
        <a href={resumeData.contact.youtube} target="_blank" rel="noopener noreferrer" className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
          <Youtube className="text-red-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-white font-semibold text-lg mb-2">YouTube</h3>
          <p className="text-textMuted text-sm">@sane004</p>
        </a>
      )}

      {resumeData.contact.github && (
        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="bg-[#0b1120] hover:bg-[#111a30] transition-colors p-8 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center group cursor-pointer">
          <Github className="text-primaryBlue mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-white font-semibold text-lg mb-2">GitHub</h3>
          <p className="text-textMuted text-sm">Visit Profile</p>
        </a>
      )}
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
