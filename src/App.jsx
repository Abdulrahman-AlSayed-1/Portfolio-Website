import React, { useState, useEffect } from 'react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const elements = document.querySelectorAll('.animate-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = [
    { category: 'Backend', icon: '☕', tags: ['Java', 'Spring', 'SpringBoot', 'REST API', 'Spring Security', 'JWT', 'Microservices' , 'Event-Driven Architecture'] },
    { category: 'Frontend', icon: '⚛️', tags: ['React.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Zustand', 'Axios', 'Tailwind', 'Bootstrap'] },
    { category: 'Data & Tools', icon: '🛠️', tags: ['PostgreSQL', 'MySQL', 'Redis', 'JPA/Hibernate', 'Docker', 'Git', 'Postman', 'JIRA', 'Agile'] },
    { category: 'Testing', icon: '🧪', tags: ['JUnit', 'Mockito', 'Jest', 'Vitest', 'React Testing Library'] }
  ];

  const experience = [
    {
      role: 'Java Full-Stack Developer',
      company: 'Academic & Personal Projects',
      date: '2024 - Present',
      points: [
        'Built full-stack web applications using React.js and Spring Boot.',
        'Developed RESTful APIs using layered architecture (Controller, Service, Repository).',
        'Implemented authentication & authorization using Spring Security and JWT.',
        'Managed relational database persistence using JPA/Hibernate with MySQL and PostgreSQL.',
        'Integrated frontend with backend using Axios and managed authentication flows.',
        'Utilized testing libraries like JUnit, Mockito, and Jest to ensure code reliability.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Personal Health-Based Ordering System',
      date: '2026',
      desc: 'Robust Spring Backend project focused on server-side logic, order management, profile management , AI Model Integration , and secure transactions.',
      tech: ['Spring Boot', 'Spring Security',"Microservices", 'PostgreSQL', 'RabbitMQ'],
      icon: '🥗',
      repoUrl: 'https://github.com/Revive-Graduation-Project/revive-backend.git'
    },
    {
      title: 'E-Commerce Platform',
      date: '2025',
      desc: 'Feature-rich frontend with dynamic product filtering, cart management, and seamless checkout experience.',
      tech: ['React.js', 'Redux Toolkit', 'Axios', 'Tailwind CSS'],
      icon: '🛒',
      repoUrl: 'https://github.com/Abdulrahman-AlSayed-1/E-Commerce-Website.git'
    },
    {
      title: 'Movie Explorer',
      date: '2025',
      desc: 'Cinematic browsing experience using external TMDB API to provide real-time movie data.',
      tech: ['React.js', 'Context API', 'CSS Grid', 'REST API', 'Axios' , "Tailwind Css"],
      icon: '🎬',
      repoUrl: 'https://github.com/Abdulrahman-AlSayed-1/Movies-Explorer.git'
    },
     {
      title: 'Blogging Platform',
      date: '2025',
      desc: 'Basic Blogging Website where users can share posts, thoughts, or articles',
      tech: ['React.js', 'Context API', 'CSS Grid', 'JSON Server', 'Axios' , "Tailwind Css"],
      icon: '📝',
      repoUrl: 'https://github.com/Abdulrahman-AlSayed-1/Blogging-Platform.git'
    }
  ];

  const achievements = [
    { title: 'Optimized API Efficiency', desc: 'Reduced API response time by 30% through query optimization and caching.', icon: '⚡' },
    { title: 'Enhanced Security Measures', desc: 'Implemented robust security protocols, reducing potential breaches by 40%.', icon: '🛡️' },
    { title: 'Improved Performance', desc: 'Increased application performance by 25% using advanced caching and code splitting.', icon: '🚀' },
    { title: 'Management Excellence', desc: 'Consistently delivered high-quality tasks within deadlines, improving team efficiency.', icon: '🏆' }
  ];

  return (
    <div id="home" className="selection:bg-accent/30">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${isScrolled ? 'bg-primary/85 backdrop-blur-xl border-b border-white/5 py-2.5' : 'bg-transparent'}`}>
        <div className="container-custom flex items-center justify-between">
          <a href="#home" className="font-heading text-2xl font-black bg-gradient-primary bg-clip-text text-transparent">AS.</a>
          
          <div className={`hidden md:flex items-center gap-8 ${isMenuOpen ? 'flex' : ''}`}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-[#a0a0b8] hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-accent-light transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30">Let's Talk</a>
          </div>

          <button className="md:hidden flex flex-col gap-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'}`}>
          <div className="container-custom flex flex-col gap-5">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-[#a0a0b8] font-medium" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="hero-bg-orb w-[600px] h-[600px] bg-accent -top-[150px] -right-[100px]"></div>
        <div className="hero-bg-orb w-[400px] h-[400px] bg-[#e040fb] -bottom-[100px] -left-[50px]"></div>
        
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-[fadeInUp_0.8s_ease_forwards]">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-xs font-semibold text-accent-light mb-6">
              <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
              Available for Internship & Full-time
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              Hey, I'm <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite]">Abdulrahman</span>
            </h1>
            <h2 className="font-heading text-xl md:text-2xl font-medium text-[#a0a0b8] mb-6">Java Full-Stack Developer</h2>
            <p className="text-[#a0a0b8] text-lg max-w-lg mb-10 leading-relaxed">
              I build scalable, secure, and high-performance web applications using Java (Spring) and React.js. Currently pursuing B.Sc. in Computers & Informatics.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </div>

            <div className="flex gap-10 pt-10 border-t border-white/5">
              <div>
                <div className="font-heading text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">2+</div>
                <div className="text-[10px] text-[#6a6a80] uppercase tracking-widest mt-1">Years of Dev</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">10+</div>
                <div className="text-[10px] text-[#6a6a80] uppercase tracking-widest mt-1">Projects Built</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">15+</div>
                <div className="text-[10px] text-[#6a6a80] uppercase tracking-widest mt-1">Tech Skills</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center animate-[fadeInUp_0.8s_0.3s_ease_both]">
            <div className="relative w-[280px] h-[320px] md:w-[400px] md:h-[450px]">
              <div className="absolute -inset-4 rounded-full border-2 border-transparent border-t-accent border-r-accent-light animate-float"></div>
              <img src="/profile.jpg" alt="Abdulrahman Al-Sayed" className="w-full h-full rounded-full object-cover border-4 border-[#1a1a2e] shadow-2xl relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mb-14 animate-in">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3 block">01. About Me</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Turning Ideas into Code</h2>
            <p className="text-[#a0a0b8] max-w-xl text-lg leading-relaxed">
              Passionate developer dedicated to building high-quality software solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start animate-in">
            <div className="space-y-6">
              <p className="text-[#a0a0b8] text-lg leading-relaxed">
                I am a passionate Java Full-Stack Developer currently pursuing a B.Sc. in Computers and Informatics at Zagazig University. With a solid foundation in both front-end (ReactJS) and back-end (Spring), I excel in building responsive and secure web applications.
              </p>
              <p className="text-[#a0a0b8] text-lg leading-relaxed">
                My journey in tech is driven by a desire to continuously enhance my skills through innovative projects. I thrive in collaborative environments and enjoy solving complex problems with elegant code.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[
                  { label: 'Location', value: 'Zagazig, Egypt' },
                  { label: 'Degree', value: 'B.Sc. Computers & Informatics' },
                  { label: 'Email', value: 'alsayed.04@icloud.com' },
                  { label: 'Availability', value: 'Immediate' }
                ].map(item => (
                  <div key={item.label} className="p-4 bg-card border border-white/5 rounded-xl">
                    <div className="text-[10px] text-[#6a6a80] uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map(skill => (
                <div key={skill.category} className="glass-card group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-accent/5 border border-accent/10 rounded-md text-[11px] font-medium text-[#a0a0b8] hover:bg-accent hover:text-white transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="mb-14 animate-in">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3 block">02. Journey</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Professional Experience</h2>
          </div>

          <div className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-accent before:to-transparent animate-in">
            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0 glass-card before:content-[''] before:absolute before:-left-[53px] before:top-8 before:w-4 before:h-4 before:rounded-full before:bg-accent before:border-4 before:border-primary before:shadow-[0_0_0_4px_rgba(108,99,255,0.2)]">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-accent-light font-medium mt-1">{exp.company}</div>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent-light text-[11px] font-bold rounded-full uppercase tracking-wider">{exp.date}</span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-[#a0a0b8] text-sm leading-relaxed flex gap-3">
                      <span className="text-accent mt-1">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mb-14 animate-in">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3 block">03. Portfolio</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-[#a0a0b8] max-w-xl text-lg leading-relaxed">
              A selection of my recent works across full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-in">
            {projects.map((project, index) => (
              <div key={index} className="glass-card group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="text-3xl mb-5">{project.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-2 text-white">{project.title}</h3>
                <div className="text-xs text-[#6a6a80] mb-4 uppercase tracking-widest font-semibold">{project.date}</div>
                <p className="text-[#a0a0b8] text-sm leading-relaxed mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-accent/5 border border-accent/10 rounded-md text-[10px] font-bold text-accent-light">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-bold text-white bg-white/5 hover:bg-accent px-4 py-2 rounded-lg transition-all border border-white/5 hover:border-accent group/btn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View Source
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id='achievements' className="section-padding">
        <div className="container-custom">
          <div className="mb-14 animate-in">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3 block">04. Impact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Key Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-in">
            {achievements.map((ach, index) => (
              <div key={index} className="flex gap-6 p-8 bg-card border border-white/5 rounded-2xl hover:border-accent/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 min-w-[56px] rounded-xl bg-accent/10 flex items-center justify-center text-2xl">
                  {ach.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{ach.title}</h3>
                  <p className="text-[#a0a0b8] text-sm leading-relaxed">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mb-14 animate-in">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3 block">05. Contact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Something Great</h2>
            <p className="text-[#a0a0b8] max-w-xl text-lg leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a friendly chat.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 animate-in">
            <div className="space-y-4">
              {[
                { icon: '📧', label: 'Email Me', value: 'alsayed.04@icloud.com' },
                { icon: '📍', label: 'Location', value: 'Zagazig, Egypt' },
                { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/abdulrahmanal-sayed' }
              ].map(card => (
                <div key={card.label} className="flex items-center gap-5 p-6 bg-card border border-white/5 rounded-xl hover:border-accent/40 hover:translate-x-2 transition-all">
                  <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center text-lg">{card.icon}</div>
                  <div>
                    <div className="text-[10px] text-[#6a6a80] uppercase tracking-widest mb-0.5">{card.label}</div>
                    <div className="text-sm font-semibold text-white">{card.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full px-5 py-4 bg-card border border-white/5 rounded-xl text-white text-sm outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" type="text" placeholder="Your Name" required />
              <input className="w-full px-5 py-4 bg-card border border-white/5 rounded-xl text-white text-sm outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" type="email" placeholder="Your Email" required />
              <textarea className="w-full px-5 py-4 bg-card border border-white/5 rounded-xl text-white text-sm outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all min-h-[160px] resize-none" placeholder="Tell me about your project..." required></textarea>
              <button type="submit" className="btn-primary self-start mt-2">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-secondary">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-[#6a6a80]">
            © {new Date().getFullYear()} Abdulrahman Al-Sayed. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Abdulrahman-AlSayed-1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-card border border-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:-translate-y-1">GH</a>
            <a href="https://linkedin.com/in/abdulrahmanal-sayed" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-card border border-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:-translate-y-1">IN</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
