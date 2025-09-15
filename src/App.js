import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  // Effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'extracurricular', 'contact'];
      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.getBoundingClientRect().top <= 100) { // Adjust offset as needed
          currentActive = sections[i];
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 return (
    <div className="font-inter bg-gray-50 text-gray-800 antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-indigo-700">
            Aditi Soukar
          </a>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-6">
            {[
              'home',
              'about',
              'projects',
              'skills',
              'experience',
              'education',
              'extracurricular',
              'contact',
            ].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-lg font-medium transition-colors duration-300 hover:text-indigo-700 ${
                    activeSection === section
                      ? 'text-indigo-700 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  {section === 'extracurricular' ? 'Passions' : section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>




      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-indigo-500 to-purple-700 text-white flex items-center justify-center py-32 rounded-b-3xl overflow-hidden shadow-2xl">
      {/* Background blobs for visual interest */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">Hello, I'm <span className="text-yellow-300">Aditi Soukar</span></h1>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-90">
          Interested in <strong>Product Management, Startups, Consulting, Data, and Business Analytics</strong>.
        </p>
        
        {/* Polished button container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:scale-105"
          >
            Explore My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-14 md:py-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-full text-lg leading-relaxed text-gray-700">
              <p className="mb-3">
                Hey there! I'm <strong>Aditi Soukar</strong>, a final-year Mechanical Engineering student at IIT Dharwad. While mechanical engineering isn't my primary passion, it's taught me a ton about <strong>time management, rigor, and strategic thinking</strong> – skills that are invaluable in any field! I'm constantly drawn to problems where engineering meets real-world impact, especially in <strong>Data Analytics, Product Management, and Strategic Consulting</strong>.
              </p>
              <p className="mb-3">
                You'll often find me diving headfirst into <strong>data</strong>, not just to crunch numbers, but to unearth those "aha!" moments that transform into <strong>brilliant, actionable strategies</strong>. I absolutely thrive in environments where the <strong>team is great</strong>, my contributions genuinely <strong>make a difference</strong>, and, yes, there's a generous supply of <strong>coffee</strong>! I'm always eager to work on projects that <strong>challenge me and let me grow</strong>.
              </p>
              <p className="mb-0">
                When I'm not strategizing or analyzing, I'm probably out on the court – <strong>sports</strong> have always been a huge part of my life. Sometimes I love to <strong>write</strong>, just for fun, or you'll catch me hanging out with <strong>friends and family</strong>. My goal? To live a <strong>peaceful, fulfilling life</strong>, while <strong>achieving my dreams</strong> and, hopefully, <strong>helping those around me</strong> along the way. Oh, and to play all the sports in the world and travel the world to watch all the sports in the world!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-14 md:py-20 bg-indigo-50 rounded-xl shadow-inner border border-indigo-100">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">My Impactful Projects & Achievements</h2>
        <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          A glimpse into the diverse challenges I've tackled and the solutions I've engineered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card: Avadhan Case Study */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="https://placehold.co/600x400/a78bfa/ffffff?text=Case+Study"
              alt="Avadhan Case Study Thumbnail"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/a78bfa/ffffff?text=Case+Study"; }}
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Avadhan Case Study – 2nd Place</h3>
              <p className="text-gray-600 mb-3">
                Secured 2nd place in a fast-paced case competition by IIT Dharwad Innovation Cell, demonstrating <strong>strategic problem-solving</strong> and sharp <strong>business acumen</strong>.
              </p>
              <div className="flex justify-end items-center">
                <a href="https://docs.google.com/presentation/d/10Zjhk4DjUbUq78IYFJiUGNcadT4LCcwR9WiyDKZC-XI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition-colors transform hover:-translate-y-1">
                  View PPT
                </a>
              </div>
            </div>
          </div>

          {/* Project Card: StreamVerse Customer Churn Analysis */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="https://placehold.co/600x400/818cf8/ffffff?text=Churn+Analysis"
              alt="StreamVerse Churn Analysis Thumbnail"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/818cf8/ffffff?text=Churn+Analysis"; }}
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">StreamVerse Customer Churn Analysis & Retention Strategy</h3>
              <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
                <li>Conducted end-to-end analytics to <strong>identify churn drivers</strong> and design <strong>retention strategies</strong> for StreamVerse.</li>
                <li><strong>Technical Work</strong>: Created synthetic datasets (Python, Pandas, Faker), built a PostgreSQL schema, and used SQL queries for churn root-cause analysis.</li>
                <li><strong>Business Impact</strong>: Converted insights into <strong>measurable solutions</strong> using a Customer Lifecycle framework, showcased via an <strong>interactive dashboard(Website)</strong> (HTML, Tailwind, Chart.js - Used Gemini to make the website).</li>
              </ul>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Soukaradi/customer_churn_analysis" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  GitHub
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <a href="https://soukaradi.github.io/website_for_churnanalysis/" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition-colors transform hover:-translate-y-1">
                  Live Website
                </a>
              </div>
            </div>
          </div>

          {/* Project Card: Adidas U.S. Sales Analysis */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="https://placehold.co/600x400/6366f1/ffffff?text=Adidas+Sales"
              alt="Adidas Sales Analysis Thumbnail"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/6366f1/ffffff?text=Adidas+Sales"; }}
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Adidas U.S. Sales Analysis</h3>
              <p className="text-gray-600 mb-3">
                Analyzed 2020–21 U.S. sales using <strong>Excel dashboards, SWOT</strong>, and <strong>Porter's Five Forces</strong>; recommended optimizations in product, e-commerce, and supply chain.
              </p>
              <div className="flex justify-end items-center">
                <a href="https://github.com/Soukaradi/adidas-sales" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  GitHub
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project Card: AI Dashboard Generator – PM */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="https://placehold.co/600x400/38bdf8/ffffff?text=AI+Dashboard"
              alt="AI Dashboard Generator Thumbnail"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/38bdf8/ffffff?text=AI+Dashboard"; }}
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">AI Dashboard Generator – PM</h3>
              <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
                <li>Led product vision and roadmap for a no-code dashboard tool; <strong>won Best in Women’s Category at DevHack</strong>.</li>
                <li>Built an <strong>AI-powered interface</strong> for non-experts to analyze data with ease.</li>
              </ul>
              <div className="flex justify-end items-center">
                <a href="https://github.com/nay-hey/DevHack" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  GitHub
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-14 md:py-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">My Toolkit & Expertise</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities, strategic acumen, and operational strengths.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Technical Skills */}
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Technical Skills</h3>
              <ul className="space-y-1 text-lg text-gray-700">
                <li>Python</li>
                <li>Excel</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Power BI</li>
                <li>Wix Studio</li>
              </ul>
            </div>
            {/* Project Management Tools */}
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Management Tools</h3>
              <ul className="space-y-1 text-lg text-gray-700">
                <li>ClickUp</li>
                <li>Google Suite</li>
                <li>Whimsical (Wireframes, Flowcharts)</li>
              </ul>
            </div>
            {/* Analytical Skills */}
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Analytical Skills</h3>
              <ul className="space-y-1 text-lg text-gray-700">
                <li>Data Analysis</li>
                <li>Metrics</li>
                <li>KPIs</li>
                <li>Market Research</li>
                <li>Data-Driven Decision Making</li>
                <li>PRDs</li>
              </ul>
            </div>
            {/* Business and Strategic Skills */}
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Business & Strategic Skills</h3>
              <ul className="space-y-1 text-lg text-gray-700">
                <li>Product Management</li>
                <li>Business Requirements</li>
                <li>Stakeholder Management</li>
                <li>Strategic Thinking</li>
                <li>Business Case Development</li>
                <li>Basic Operations Research</li>
                <li>Brand Outreach</li>
              </ul>
            </div>
            {/* Marketing and Sales */}
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Marketing & Sales</h3>
              <ul className="space-y-1 text-lg text-gray-700">
                <li>Influencer Marketing</li>
                <li>Negotiation</li>
                <li>Content Briefing</li>
                <li>Creator Onboarding</li>
                <li>B2B Sales Support</li>
              </ul>
            </div>
            {/* Courses Section - Now a distinct cell */}
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Relevant Courses</h3>
              <ul className="space-y-1 text-lg text-gray-700">
                <li><strong>Business Analysis Fundamentals</strong> (Coursera - Microsoft)</li>
                <li><strong>Data for Business Analysts using Microsoft Excel</strong> (Coursera - Microsoft)</li>
                <li><strong>Product Management</strong> (Udemy)</li>
                <li><strong>Inbound Sales</strong> (Coursera)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-14 md:py-20 bg-indigo-50 rounded-xl shadow-inner border border-indigo-100">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">Professional Journey</h2>
        <p className="text-center text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
          Highlighting key roles, contributions, and growth in my career path. While I may not have held full-time jobs yet, my internships have taught me a tremendous amount in a short span, providing invaluable experience.
        </p>
        <div className="space-y-5">
          {/* Job 1: Product Management Intern */}
          <div className="bg-white rounded-lg shadow-lg p-7 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Product Management Intern</h3>
            <p className="text-xl text-indigo-600 mb-1">AscendX (Habit-Building Bootcamp Platform)</p>
            <p className="text-gray-500 mb-2">May 2024 – June 2024 | Remote, India</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
              <li>Led <strong>primary user research</strong> and <strong>feedback analysis</strong> across diverse cohorts to identify <strong>pain points</strong>, validate assumptions, and define clear <strong>feature priorities</strong>.</li>
              <li>Created <strong>end-to-end product roadmaps</strong> and <strong>PRDs</strong>, coordinated with <strong>3+ cross-functional teams</strong>, and led <strong>5+ iterative testing cycles</strong> to refine UX.</li>
              <li>Launched a <strong>functional MVP</strong> from scratch, onboarded <strong>10+ trial users</strong> in the first week, and collected <strong>actionable data</strong> to inform future sprints.</li>
            </ul>
          </div>

          {/* Job 2: Sales and Marketing Intern */}
          <div className="bg-white rounded-lg shadow-lg p-7 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sales and Marketing Intern</h3>
            <p className="text-xl text-indigo-600 mb-1">Nuvie (Protein Nutrition Brand)</p>
            <p className="text-gray-500 mb-2">May 2025 – July 2025 | Bengaluru, India</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
              <li>Led <strong>influencer marketing operations</strong> from end-to-end — including <strong>scouting, onboarding, negotiating deliverables</strong>, and maintaining <strong>relationships with 10+ creators</strong>.</li>
              <li>Created <strong>campaign briefs</strong>, coordinated with <strong>internal teams</strong> to finalize <strong>scripts and video content</strong>, and sourced influencers aligned with specific brand and campaign goals.</li>
              <li>Assisted in <strong>B2B sales outreach</strong> for product distribution across select gym partners in Bangalore and Hyderabad.</li>
            </ul>
          </div>
          {/* Positions of Responsibility */}
          <h3 className="text-3xl font-bold text-center text-indigo-700 mb-5 mt-8">Leadership & Responsibilities</h3>
          <p className="text-center text-xl text-gray-600 mb-7 max-w-3xl mx-auto">
            My commitment to leading initiatives and fostering inclusive environments.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-7 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Senior Placement Coordinator</h4>
            <p className="text-xl text-indigo-600 mb-1">Career Development Cell</p>
            <p className="text-gray-500 mb-2">2023 – 2025</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
              <li>Coordinated with <strong>15+ recruiters</strong>, enhancing campus engagement and job/internship prospects.</li>
              <li>Reduced placement response time by <strong>20%</strong> via streamlined communication and structured tracking.</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-7 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Girls Nominee for Sports</h4>
            <p className="text-xl text-indigo-600 mb-1">Sports Council</p>
            <p className="text-gray-500 mb-2">2024 – 2025</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
              <li>Advocated for <strong>inclusive participation</strong>, boosting female involvement and visibility in campus sports.</li>
              <li>Organized women-led events with the Sports Council, promoting balanced team representation.</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-7 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Teaching Assistant – Design Thinking</h4>
            <p className="text-xl text-indigo-600 mb-1">IIT Dharwad</p>
            <p className="text-gray-500 mb-2">Aug 2024 – Oct 2024</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
              <li>Co-led <strong>hands-on sessions</strong> to teach design thinking via real-world case activities.</li>
              <li>Mentored <strong>50+ students</strong>, enhancing creative engagement through structured feedback.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-14 md:py-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">Academic Background</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            My formal education and continuous learning journey.
          </p>
          <div className="space-y-7">
            {/* Degree 1 */}
            <div className="flex flex-col md:flex-row items-start gap-4 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/4 text-gray-500 text-lg text-left font-medium">Dec 2022 – Present</div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">Bachelor of Technology in Mechanical Engineering</h3>
                <p className="text-xl text-indigo-600">Indian Institute of Technology Dharwad</p>
                <p className="text-gray-700">CPI: 8.06/10.0 (Currently in Final Year)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section id="extracurricular" className="container mx-auto px-4 py-14 md:py-20 bg-indigo-50 rounded-xl shadow-inner border border-indigo-100">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">Beyond the Books: My Passions & Pursuits</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            These interests highlight my diverse skills and how I apply them creatively.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg max-w-2xl mx-auto">
            <li>I'm a <strong>multi-sport athlete</strong>, competing in <strong>Badminton, Tennis, Squash, Table Tennis, and Basketball</strong>. I even represented <strong>IIT Dharwad in Badminton</strong> at the Inter IIT Sports Meet.</li>
            <li>I have a strong passion for <strong>music</strong>, playing both the <strong>Guitar and Drums</strong>. I've also enjoyed performing as a <strong>Bass guitarist</strong> in an all-girls band, which was a fantastic experience in creativity and teamwork.</li>
            <li>My hobbies include <strong>solving Rubik’s cubes</strong> and <strong>cycling</strong>. These activities help me stay sharp, improve my <strong>analytical thinking</strong>, and keep my life active and balanced.</li>
          </ul>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="container mx-auto px-4 py-14 md:py-20">
  <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">Let's Connect</h2>
  <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
    I'm always open to new opportunities, exciting collaborations, and meaningful conversations.
  </p>
  <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-10 border border-gray-100">
    <p className="text-center text-lg text-gray-700 mb-7">
      Feel free to reach out via these channels!
    </p>

    <div className="mt-8 text-center">
      <div className="flex justify-center space-x-5 text-gray-700">
        <a href="https://www.linkedin.com/in/aditisoukar/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://github.com/Soukaradi" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.087.649-.208.649-.456 0-.227-.007-.75-.011-1.846-2.77.6-3.362-1.341-3.362-1.341-.453-1.151-1.107-1.459-1.107-1.459-.906-.62.068-.609.068-.609 1.002.07 1.53.99 1.53.99.89 1.529 2.341 1.089 2.91.831.091-.645.35-1.089.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.097-2.648 0 0 .84-.27 2.75 1.022A9.972 9.972 0 0112 5.042c.85.004 1.7.117 2.49.331 1.909-1.292 2.749-1.022 2.749-1.022.544 1.376.202 2.395.097 2.648.64.698 1.029 1.591 1.029 2.682 0 3.842-2.339 4.686-4.566 4.935.359.308.678.919.678 1.854 0 1.338-.012 2.417-.012 2.747 0 .249.173.548.653.456C21.132 20.197 24 16.442 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">GitHub</span>
        </a>
        <a href="mailto:soukaraditi@gmail.com" className="hover:text-indigo-600 transition-colors">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
          <span className="sr-only">Email</span>
        </a>
        {/* Phone Number */}
        <a href="tel:+91-9535688530" className="hover:text-indigo-600 transition-colors">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="sr-only">Phone</span>
        </a>
      </div>
      <p className="text-center text-gray-700 mt-3">Location: Dharwad</p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3">&copy; {new Date().getFullYear()} Aditi Soukar. All rights reserved.</p>
          <p>Built with the help of my friend(Prakriti and Neha) and Gemini.</p>
          <p>soukaraditi@gmail.com , 220030001@gmail.com</p>
          <div className="flex justify-center space-x-6">
            {/* Removed Twitter and Instagram as requested */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
