import React, { useState, useEffect } from 'react';

// --- Data for the Portfolio ---

const projectsData = [
  {
    title: 'Avadhan Case Study – 2nd Place',
    description: "Secured 2nd place in a fast-paced case competition by IIT Dharwad Innovation Cell, demonstrating strategic problem-solving and sharp business acumen.",
    image: "https://placehold.co/600x400/a78bfa/ffffff?text=Case+Study",
    link: 'https://docs.google.com/presentation/d/10Zjhk4DjUbUq78IYFJiUGNcadT4LCcwR9WiyDKZC-XI/edit?usp=sharing',
    linkText: 'View PPT',
  },
  {
    title: 'StreamVerse Customer Churn Analysis',
    description: 'Carried out end-to-end analytics to identify churn drivers and design retention strategies. Built a PostgreSQL schema, used SQL for root-cause analysis, and created an interactive dashboard.',
    image: "https://placehold.co/600x400/818cf8/ffffff?text=Churn+Analysis",
    github: 'https://github.com/Soukaradi/customer_churn_analysis',
    link: 'https://soukaradi.github.io/website_for_churnanalysis/',
    linkText: 'Live Website',
  },
  {
    title: 'Adidas U.S. Sales Analysis',
    description: "Investigated 2020–21 U.S. sales using Excel dashboards, SWOT, and Porter's Five Forces; recommended optimizations in product, e-commerce, and supply chain.",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=Adidas+Sales",
    github: 'https://github.com/Soukaradi/adidas-sales',
  },
  {
    title: 'AI Dashboard Generator – Project Lead',
    description: "Defined analytical requirements and roadmap for a no-code dashboard tool. Led the team to win 'Best in Women’s Category' at DevHack by building an AI-powered interface.",
    image: "https://placehold.co/600x400/38bdf8/ffffff?text=AI+Dashboard",
    github: 'https://github.com/nay-hey/DevHack',
  }
];

const skillsData = [
    { title: 'Programming & Databases', skills: ['Python (Pandas, NumPy)', 'SQL (PostgreSQL, MySQL)', 'Advanced Excel'] },
    { title: 'Data Viz & Analytics', skills: ['Power BI', 'Statistical Modeling', 'Root-Cause Analysis', 'KPI Tracking'] },
    { title: 'Consulting & Frameworks', skills: ['Operations Research', 'Strategic Planning', 'Market Analysis', 'SWOT Analysis'] },
    { title: 'Project Management', skills: ['ClickUp', 'Google Suite', 'Whimsical', 'Agile Methodologies'] }
];

const experienceData = [
  {
    role: 'Product Management Intern',
    company: 'AscendX (Habit-Building Bootcamp Platform)',
    period: 'May 2024 – June 2024 | Remote, India',
    points: [
      'Executed quantitative and qualitative user research to identify critical pain points and provide data-driven recommendations.',
      'Scrutinized user feedback across 5+ iterative testing cycles to inform UX improvements, collaborating with 3+ cross-functional teams.',
      'Tracked and examined engagement metrics from a new MVP launch, delivering actionable insights for future development sprints.'
    ]
  },
  {
    role: 'Sales and Marketing Intern',
    company: 'Nuvie (Protein Nutrition Brand)',
    period: 'May 2025 – July 2025 | Bengaluru, India',
    points: [
      'Managed stakeholder relationships with 10+ external creators, negotiating deliverables to drive campaign success.',
      'Coordinated with internal teams to develop and execute targeted outreach strategies, ensuring consistent brand messaging.',
      'Supported B2B business development by assisting with sales outreach and partnership logistics in key markets.'
    ]
  }
];

const responsibilitiesData = [
    { role: 'Senior Placement Coordinator', org: 'Career Development Cell', period: '2023 – 2025', points: ['Coordinated with 15+ recruiters, enhancing campus engagement.', 'Reduced placement response time by 20% via streamlined communication.'] },
    { role: 'Girls Nominee for Sports', org: 'Sports Council', period: '2024 – 2025', points: ['Advocated for inclusive participation, boosting female involvement in sports.', 'Organized women-led events, promoting balanced team representation.'] },
    { role: 'Teaching Assistant – Design Thinking', org: 'IIT Dharwad', period: 'Aug 2024 – Oct 2024', points: ['Co-led hands-on sessions to teach design thinking via real-world case activities.', 'Mentored 50+ students, enhancing creative engagement through structured feedback.'] }
];

// --- Reusable Components ---

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-20 ${className}`}>
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
    {children}
  </h2>
);

// --- Main Components ---

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

  const handleScroll = (sectionId) => {
      scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50 py-3 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button onClick={() => handleScroll('home')} className="text-2xl font-bold text-indigo-700">
          Aditi Soukar
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((section) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                className={`capitalize text-lg font-medium transition-colors duration-300 hover:text-indigo-700 ${
                  activeSection === section ? 'text-indigo-700 font-semibold' : 'text-gray-600'
                }`}
              >
                {section === 'extracurricular' ? 'Passions' : section}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="md:hidden mt-3 px-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((section) => (
                  <button key={section} onClick={() => handleScroll(section)} className="capitalize text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                      {section}
                  </button>
              ))}
          </div>
      )}
    </nav>
  );
};


const Hero = ({ scrollToSection }) => (
  <section id="home" className="relative bg-gradient-to-r from-indigo-500 to-purple-700 text-white flex items-center justify-center pt-48 pb-32 rounded-b-3xl overflow-hidden shadow-2xl">
    <style>{`@keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } } .animation-delay-2000 { animation-delay: 2s; } .animation-delay-4000 { animation-delay: 4s; }`}</style>
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

    <div className="container mx-auto px-4 text-center z-10 relative">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">Hello, I'm <span className="text-yellow-300">Aditi Soukar</span></h1>
      <p className="text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto opacity-90">
        Interested in <strong>Product Management, Startups, Consulting, Data, and Business Analytics</strong>.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button onClick={() => scrollToSection('projects')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:scale-105">
          Explore My Work
        </button>
        <button onClick={() => scrollToSection('contact')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:scale-105">
          Let's Connect
        </button>
      </div>
    </div>
  </section>
);


const About = () => (
    <Section id="about">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto">
            <SectionTitle>About Me</SectionTitle>
            <div className="text-lg leading-relaxed text-gray-700 text-center">
                <p className="mb-4">
                    Hey there! I'm <strong>Aditi Soukar</strong>, a final-year Mechanical Engineering student at IIT Dharwad. While my degree taught me rigor and strategic thinking, my passion lies where engineering meets real-world impact—especially in <strong>Data Analytics, Product Management, and Consulting</strong>.
                </p>
                <p className="mb-4">
                    I thrive on diving into <strong>data</strong> to unearth those "aha!" moments that transform into brilliant, actionable strategies. I'm always eager to work on projects that challenge me, let me grow, and allow my contributions to genuinely make a difference.
                </p>
                <p>
                    When I'm not strategizing, I'm probably out on a court—<strong>sports</strong> have always been a huge part of my life. My goal is to build a fulfilling life, achieve my dreams, and hopefully, help those around me along the way.
                </p>
            </div>
        </div>
    </Section>
);

const Projects = () => (
  <Section id="projects" className="bg-indigo-50 rounded-xl shadow-inner border border-indigo-100">
    <SectionTitle>Impactful Projects & Achievements</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col">
          <img src={project.image} alt={`${project.title} Thumbnail`} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
            <div className="mt-auto flex justify-between items-center pt-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">GitHub</a>
              )}
              {project.link && (
                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-700 transition-colors transform hover:-translate-y-1">
                    {project.linkText}
                 </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Skills = () => (
    <Section id="skills">
        <SectionTitle>My Toolkit & Expertise</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillsData.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-4">{category.title}</h3>
                    <ul className="space-y-2 text-lg text-gray-700">
                        {category.skills.map((skill, i) => <li key={i} className="flex items-center"><span className="text-indigo-500 mr-2">✓</span>{skill}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const Experience = () => (
  <Section id="experience" className="bg-indigo-50 rounded-xl shadow-inner border border-indigo-100">
    <SectionTitle>Professional Journey</SectionTitle>
    <div className="max-w-4xl mx-auto space-y-8">
      {experienceData.map((job, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-7 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">{job.role}</h3>
          <p className="text-xl text-indigo-600 mb-1">{job.company}</p>
          <p className="text-gray-500 mb-4">{job.period}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            {job.points.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
      <h3 className="text-3xl font-bold text-center text-indigo-700 pt-12">Leadership & Responsibilities</h3>
       {responsibilitiesData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-7 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
          <h4 className="text-2xl font-semibold text-gray-800 mb-1">{item.role}</h4>
          <p className="text-xl text-indigo-600 mb-1">{item.org}</p>
          <p className="text-gray-500 mb-4">{item.period}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            {item.points.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);


const Education = () => (
    <Section id="education">
        <SectionTitle>Academic Background</SectionTitle>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-10 border border-gray-100">
             <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="md:w-1/3 text-gray-500 text-lg font-medium">Dec 2022 – Present</div>
                <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">B.Tech in Mechanical Engineering</h3>
                    <p className="text-xl text-indigo-600">Indian Institute of Technology Dharwad</p>
                    <p className="text-gray-700">CPI: 8.06/10.0 (Currently in Final Year)</p>
                </div>
            </div>
        </div>
    </Section>
);

const Contact = () => (
    <Section id="contact">
        <SectionTitle>Let's Connect</SectionTitle>
        <p className="text-center text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            I'm always open to new opportunities and meaningful conversations. Feel free to reach out!
        </p>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
            <div className="flex justify-center space-x-8">
                <a href="https://www.linkedin.com/in/aditisoukar/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors transform hover:scale-110"><svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                <a href="https://github.com/Soukaradi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors transform hover:scale-110"><svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.087.649-.208.649-.456 0-.227-.007-.75-.011-1.846-2.77.6-3.362-1.341-3.362-1.341-.453-1.151-1.107-1.459-1.107-1.459-.906-.62.068-.609.068-.609 1.002.07 1.53.99 1.53.99.89 1.529 2.341 1.089 2.91.831.091-.645.35-1.089.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.097-2.648 0 0 .84-.27 2.75 1.022A9.972 9.972 0 0112 5.042c.85.004 1.7.117 2.49.331 1.909-1.292 2.749-1.022 2.749-1.022.544 1.376.202 2.395.097 2.648.64.698 1.029 1.591 1.029 2.682 0 3.842-2.339 4.686-4.566 4.935.359.308.678.919.678 1.854 0 1.338-.012 2.417-.012 2.747 0 .249.173.548.653.456C21.132 20.197 24 16.442 24 12.017 24 6.484 19.522 2 12 2z"/></svg></a>
                <a href="mailto:soukaraditi@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors transform hover:scale-110"><svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg></a>
            </div>
        </div>
    </Section>
);

const Footer = () => (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Aditi Soukar. All rights reserved.</p>
            <p>Built with help from friends and Gemini.</p>
        </div>
    </footer>
);


// --- Main App Component ---
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // Height of the fixed navbar
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      let current = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-inter bg-gray-50 text-gray-800 antialiased">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        {/* Extracurricular section removed for brevity, can be added back if needed */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

