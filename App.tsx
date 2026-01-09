
import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Terminal, 
  FileCheck, Award, Database, 
  Monitor, Globe, Menu, 
  X, ChevronRight, Phone, ArrowUpRight, BarChart3, BrainCircuit,
  FileText, Mail, Send
} from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import AIChatDrawer from './components/AIChatDrawer';
import { PROJECTS, VERIFICATIONS, SOCIALS } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const resumeUrl = VERIFICATIONS[0].url;

  return (
    <div className="min-h-screen selection:bg-neon-green selection:text-black bg-[#0a0a0a]">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-xl font-black tracking-tighter text-white cursor-pointer flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded bg-neon-green flex items-center justify-center text-black group-hover:rotate-12 transition-transform duration-300">
              <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="hidden sm:inline tracking-[0.2em] font-black uppercase text-sm">AGORO.<span className="text-neon-green">SYSTEMS</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Projects', 'Stack', 'Documents', 'Hire'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[10px] font-black text-gray-400 hover:text-neon-green transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </button>
            ))}
            <a 
              href={resumeUrl}
              target="_blank"
              className="text-[10px] font-black text-neon-blue hover:text-white transition-colors uppercase tracking-[0.2em] flex items-center gap-2"
            >
              <FileText size={14} /> Resume
            </a>
            <a 
              href={SOCIALS.linkedIn} 
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-neon-green transition-all transform hover:scale-105 active:scale-95"
            >
              Contact Agent
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[900] bg-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {['Projects', 'Stack', 'Documents', 'Hire'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-3xl font-black text-white hover:text-neon-green uppercase tracking-tighter"
            >
              {item}
            </button>
          ))}
          <a href={resumeUrl} target="_blank" className="text-neon-blue font-black uppercase tracking-widest border border-neon-blue/30 px-6 py-3 rounded-xl">View Resume</a>
          <a href={SOCIALS.email} className="text-neon-green font-bold border-b border-neon-green/50 pb-2">agorotimilehin05@gmail.com</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neon-green/20 bg-neon-green/5 text-neon-green text-[10px] uppercase font-black tracking-[0.3em] mb-12 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-neon-green"></span>
            ML/AI Engineer | Data Scientist
          </div>
          
          <h1 className="text-5xl md:text-[7.5rem] font-black mb-10 leading-[1] tracking-tighter max-w-6xl">
            <span className="text-white">Agoro </span>
            <span className="text-neon-green text-glow-green glitch block md:inline uppercase">Oluwatimilehin Teslim</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mb-16 font-medium leading-relaxed">
            Architecting <span className="text-white border-b-2 border-neon-blue font-black">Intelligent Ecosystems</span> through advanced Machine Learning and rigorous Data Science. Expert in <span className="text-neon-blue">Computer Vision</span>, <span className="text-neon-blue">Predictive Analytics</span>, and <span className="text-neon-blue">Systemic Data Architectures</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button 
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto bg-neon-green text-black px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-all glow-green active:scale-95"
            >
              Initialize Repository <ChevronRight size={18} strokeWidth={3} />
            </button>
            <a 
              href={resumeUrl}
              target="_blank"
              className="w-full sm:w-auto border border-white/20 hover:border-neon-blue bg-white/5 text-white px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-white/10"
            >
              Access Resume <FileText size={18} />
            </a>
            <div className="flex gap-4">
              <a href={SOCIALS.github} className="w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all transform hover:-rotate-6"><Github size={22} /></a>
              <a href={SOCIALS.linkedIn} className="w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all transform hover:rotate-6"><Linkedin size={22} /></a>
              <a href={SOCIALS.phone} className="w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all"><Phone size={22} /></a>
            </div>
          </div>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 uppercase">System <span className="text-neon-green">Artifacts</span></h2>
              <p className="text-gray-500 font-black uppercase text-[10px] tracking-[0.4em]">ML Engineering & Data Science Deployments</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-xs font-black uppercase tracking-widest">
              <span className="text-neon-blue">05 PROJECTS LOADED</span>
              <div className="w-24 h-px bg-white/10"></div>
              <span className="text-neon-green px-2 py-1 bg-neon-green/10 rounded">STABLE_BUILD</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      {/* Technical Stack / DNA */}
      <section id="stack" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Hybrid <span className="text-neon-blue">Core</span></h2>
              <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                Bridge the gap between raw data and production-grade AI. My methodology combines the statistical rigor of <span className="text-white">Data Science</span> with the scalable infrastructure of <span className="text-white">ML Engineering</span>.
              </p>
              <div className="glass p-8 rounded-3xl border-neon-green/30 relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:rotate-45 transition-transform duration-1000">
                  <BrainCircuit size={160} />
                </div>
                <Award className="text-neon-green mb-6" size={40} />
                <div className="text-4xl font-black text-white mb-2">TOP 4%</div>
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-6">Global Rank - DSN Hackathon 2025</p>
                <div className="h-1.5 bg-white/10 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-neon-green w-[96%] animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Computer Vision', icon: <Monitor size={28} />, tags: ['OpenCV', 'CNN', 'Keras', 'YOLO'], color: 'text-neon-green' },
                { title: 'Machine Learning', icon: <BrainCircuit size={28} />, tags: ['Prophet', 'ARIMA', 'Scikit-Learn', 'XGBoost'], color: 'text-neon-blue' },
                { title: 'Data Science', icon: <BarChart3 size={28} />, tags: ['Pandas', 'Matplotlib', 'Streamlit', 'Stats'], color: 'text-purple-400' },
                { title: 'Engineering', icon: <Database size={28} />, tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Vercel'], color: 'text-amber-400' }
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl hover:border-white/20 transition-all group relative overflow-hidden">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg group-hover:text-gray-300 transition-colors">
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

      {/* Verified Documents */}
      <section id="documents" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Verified <span className="text-neon-green">Records</span></h2>
            <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
            <p className="text-gray-500 text-[10px] font-black tracking-[0.6em] uppercase">Authenticated Credentials</p>
          </div>
          <div className="space-y-6">
            {VERIFICATIONS.map((doc, i) => (
              <a 
                key={i} 
                href={doc.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group glass p-8 rounded-3xl flex items-center justify-between hover:bg-white/5 transition-all border border-white/5 hover:border-neon-green/50"
              >
                <div className="flex items-center gap-8">
                  <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{doc.icon}</div>
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-neon-green transition-colors uppercase tracking-tight">{doc.title}</h3>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mt-1">{doc.issuer}</p>
                  </div>
                </div>
                <ArrowUpRight size={24} className="text-gray-700 group-hover:text-neon-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section - Deployment Directive */}
      <section id="hire" className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-neon-green/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-12 md:p-24 rounded-[3rem] border-neon-green/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded bg-neon-green/10 text-neon-green text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                  Deployment Directive
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
                  Hire the <span className="text-neon-green">Mind</span> behind the Machine
                </h2>
                <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10 max-w-xl">
                  Ready to integrate advanced intelligence into your ecosystem? I specialize in transforming raw data into high-performance, production-ready AI solutions. Let's discuss your next breakthrough.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href={SOCIALS.email}
                    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-neon-green transition-all transform hover:scale-105"
                  >
                    Initiate Contact <Send size={18} />
                  </a>
                  <a 
                    href={resumeUrl}
                    target="_blank"
                    className="border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
                  >
                    Review Dossier <FileText size={18} />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'E-MAIL', value: 'agorotimilehin05@gmail.com', link: SOCIALS.email, icon: <Mail className="text-neon-green" /> },
                  { label: 'LINKEDIN', value: 'agoro-oluwatimilehin', link: SOCIALS.linkedIn, icon: <Linkedin className="text-neon-blue" /> },
                  { label: 'VOICE / WHATSAPP', value: '0916 184 2792', link: SOCIALS.phone, icon: <Phone className="text-purple-400" /> }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link}
                    target="_blank"
                    className="flex items-center justify-between p-6 glass rounded-2xl hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</div>
                        <div className="text-white font-bold group-hover:text-neon-green transition-colors">{item.value}</div>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-gray-700 group-hover:text-white transition-all" />
                  </a>
                ))}
                <div className="p-8 border border-dashed border-white/10 rounded-3xl mt-8">
                  <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Availability Status</div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-neon-green shadow-[0_0_10px_rgba(0,255,157,0.5)]"></div>
                    <span className="text-white font-black uppercase text-sm tracking-tighter">Open for Engineering Roles & Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-20"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-5xl md:text-[8rem] font-black tracking-[ -0.05em] text-center mb-16 leading-none select-none pointer-events-none opacity-5">
            AGORO.SYSTEMS
          </div>
          <div className="text-3xl md:text-6xl font-black tracking-tighter text-center mb-16 uppercase">
            Let's Engineer <span className="text-neon-green">Tomorrow</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24">
            {[
              { label: 'TERMINAL', link: SOCIALS.email },
              { label: 'LINKEDIN', link: SOCIALS.linkedIn },
              { label: 'GITHUB', link: SOCIALS.github },
              { label: 'VOICE', link: SOCIALS.phone }
            ].map(social => (
              <a 
                key={social.label} 
                href={social.link} 
                className="text-xs font-black text-gray-500 hover:text-white transition-colors tracking-[0.4em] uppercase"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="text-[10px] text-gray-700 font-black uppercase tracking-[1.5em] text-center px-4">
              AGORO OLUWATIMILEHIN TESLIM // ML/AI ENGINEER // DATA SCIENTIST
            </div>
            <p className="text-[9px] text-gray-800 font-bold uppercase tracking-widest">© {new Date().getFullYear()} ALL RIGHTS RESERVED // STABLE_v2.0.4</p>
          </div>
        </div>
      </footer>

      <AIChatDrawer />
      
      {/* Scroll Progress Bar */}
      <div className={`fixed top-0 left-0 h-1 bg-neon-green z-[2000] transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} style={{ width: `${(scrolled ? 100 : 0)}%` }}></div>
    </div>
  );
};

export default App;
