import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin, Award, Briefcase, GraduationCap, Code, Shield, Database, Network, Cpu, Zap, Calendar, ExternalLink, ChevronDown, Sparkles, Terminal, Lock, Server } from "lucide-react";
import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import MatrixRain from '@/components/MatrixRain';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const [stats, setStats] = useState({ years: 0, certs: 0, agencies: 0, commitment: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Start counters when stats section is visible
      if (!countersStarted && window.scrollY > 300) {
        setCountersStarted(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countersStarted]);

  // Animated counter effect
  useEffect(() => {
    if (!countersStarted) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { years: 5, certs: 20, agencies: 4, commitment: 100 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        years: Math.floor(targets.years * progress),
        certs: Math.floor(targets.certs * progress),
        agencies: Math.floor(targets.agencies * progress),
        commitment: Math.floor(targets.commitment * progress)
      });

      if (currentStep >= steps) {
        setStats(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [countersStarted]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Information System Researcher II",
      company: "Duty Free Philippines Corporation",
      period: "May 2024 - Present",
      status: "Permanent",
      type: "current",
      icon: Database
    },
    {
      title: "Information System Analyst I",
      company: "Philippine Statistics Authority",
      period: "February 2022 - May 2024",
      status: "Permanent",
      type: "past",
      icon: Server
    },
    {
      title: "Contact Tracer",
      company: "Department of Interior in Local Government",
      period: "2020 - 2022",
      status: "Contractual",
      type: "past",
      icon: Shield
    },
    {
      title: "GPS Monitoring / Junior Compliance Officer",
      company: "Perry's Fuel Distribution Incorporated",
      period: "June 2018 - June 2019",
      status: "Permanent",
      type: "past",
      icon: Network
    }
  ];

  const skills = [
    { name: "Programming", icon: Code, color: "from-blue-500 to-cyan-500", delay: "0ms", level: 85 },
    { name: "Cybersecurity", icon: Shield, color: "from-orange-500 to-red-500", delay: "100ms", level: 80 },
    { name: "System Administration", icon: Database, color: "from-green-500 to-emerald-500", delay: "200ms", level: 90 },
    { name: "Network Administration", icon: Network, color: "from-purple-500 to-pink-500", delay: "300ms", level: 75 },
    { name: "Penetration Testing", icon: Zap, color: "from-yellow-500 to-orange-500", delay: "400ms", level: 78 },
    { name: "Generative AI", icon: Cpu, color: "from-indigo-500 to-blue-500", delay: "500ms", level: 70 }
  ];

  const certifications = [
    {
      title: "Google Crash Course on Python",
      provider: "DICT/Google/Coursera",
      date: "2025",
      category: "programming",
      hours: 20
    },
    {
      title: "Vanita AI Summit 2025",
      provider: "Radenta",
      date: "2025",
      category: "technical",
      hours: 8
    },
    {
      title: "Offensive Penetration Testing",
      provider: "LinkedIn",
      date: "2025",
      category: "cybersecurity",
      hours: 9
    },
    {
      title: "Complete Ethical Hacking Bootcamp 2023",
      provider: "Udemy",
      date: "2023",
      category: "cybersecurity",
      hours: 29
    },
    {
      title: "Complete Python Course Bootcamp",
      provider: "Udemy",
      date: "2022",
      category: "programming",
      hours: 22
    },
    {
      title: "Data Privacy, Security and Fraud Awareness",
      provider: "Philippine Statistics Authority",
      date: "2023",
      category: "cybersecurity",
      hours: 8
    },
    {
      title: "Quality Management System ISO 9001:2015",
      provider: "Intelek Quest / DFFPC",
      date: "2025",
      category: "quality",
      hours: 16
    },
    {
      title: "Task Force Training on EA Delineation",
      provider: "Philippine Statistics Authority",
      date: "2024",
      category: "technical",
      hours: 40
    }
  ];

  const filteredCertifications = selectedCategory === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const projects = [
    {
      title: "Civil Service Examination Reviewer",
      description: "Interactive web-based examination reviewer application designed to help aspiring civil servants prepare for the Philippine Civil Service Exam with practice questions, progress tracking, and performance analytics.",
      tech: ["React", "TypeScript", "Quiz System", "Progress Tracking"],
      icon: GraduationCap,
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
      image: "/projects/cse.png",
      demoUrl: "https://cse-reviewer-production.up.railway.app/",
      githubUrl: "https://github.com/yourusername/civil-service-reviewer"
    },
    {
      title: "Job Order Request System",
      description: "Comprehensive work order management system for tracking and managing job requests, assignments, and completion status with real-time updates and reporting capabilities.",
      tech: ["Web Development", "Database Management", "Workflow Automation"],
      icon: Briefcase,
      gradient: "from-orange-600 via-red-500 to-pink-500",
      image: "/projects/job-order.png",
      demoUrl: "#",
      githubUrl: "https://github.com/yourusername/job-order-system"
    },
    {
      title: "HR Helpdesk System",
      description: "Enterprise-grade HR helpdesk ticketing system for managing employee inquiries, requests, and support tickets with automated routing, SLA tracking, and comprehensive reporting.",
      tech: ["Ticketing System", "HR Management", "Support Portal", "Analytics"],
      icon: Shield,
      gradient: "from-green-600 via-emerald-500 to-teal-500",
      image: "/projects/hr-helpdesk.png",
      demoUrl: "#",
      githubUrl: "https://github.com/yourusername/hr-helpdesk"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative cyber-grid">
      {/* Matrix Rain Background */}
      <MatrixRain />
      <FloatingParticles />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            background: 'radial-gradient(circle, rgba(0, 255, 65, 0.15), transparent)',
            boxShadow: '0 0 100px rgba(0, 255, 65, 0.3)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${mousePosition.x / 30}px`,
            bottom: `${mousePosition.y / 30}px`,
            background: 'radial-gradient(circle, rgba(255, 0, 110, 0.15), transparent)',
            boxShadow: '0 0 100px rgba(255, 0, 110, 0.3)',
            transition: 'all 0.5s ease-out',
            animationDelay: '1s'
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" 
          style={{ 
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent)',
            boxShadow: '0 0 80px rgba(139, 92, 246, 0.25)',
            animationDelay: '2s' 
          }} 
        />
        <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" 
          style={{ 
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12), transparent)',
            boxShadow: '0 0 90px rgba(0, 240, 255, 0.25)',
            animationDelay: '3s' 
          }} 
        />
      </div>

      {/* Floating Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" 
        style={{ transform: `translateY(${scrollY * 0.5}px)` }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Glassmorphism Card */}
            <div className="cyber-card scanlines p-8 md:p-12 rounded-none backdrop-blur-xl bg-black/60 neon-border-green shadow-2xl hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all duration-500 overflow-visible">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 overflow-visible">
                  <div className="space-y-6 overflow-visible">
                    <Badge className="text-sm px-6 py-2 neon-border-green bg-black/80 border-0 neon-text-green shadow-lg shadow-[0_0_20px_rgba(0,255,65,0.5)] animate-neon-pulse uppercase tracking-wider font-mono">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Available for Opportunities
                    </Badge>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight overflow-visible w-full">
                      <span className="block gradient-text-cyber">ROUIE JAY</span>
                      <span className="block gradient-text-cyber" style={{ animationDelay: '0.2s' }}>PAUL LLANILLO</span>
                    </h1>
                    
                    <div className="flex items-center gap-3 text-xl md:text-2xl">
                      <Terminal className="w-6 h-6 text-cyan-400 animate-pulse" />
                      <p className="neon-text-green font-semibold uppercase tracking-wide font-mono">
                        Information System Researcher
                      </p>
                    </div>
                    
                    <div className="text-lg md:text-xl text-gray-300 leading-relaxed min-h-[3rem]">
                      <TypeAnimation
                        sequence={[
                          'Crafting secure web applications with modern technologies',
                          2000,
                          'Building robust cybersecurity solutions',
                          2000,
                          'Developing data management systems',
                          2000,
                          'Creating innovative IT solutions',
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="neon-text-pink font-semibold uppercase tracking-wide"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="neon-border-green bg-black/80 hover:bg-black/60 border-0 neon-text-green shadow-lg shadow-[0_0_20px_rgba(0,255,65,0.5)] hover:shadow-[0_0_30px_rgba(0,255,65,0.7)] transition-all duration-300 hover:scale-105 text-lg px-8 uppercase tracking-wider font-mono"
                      onClick={() => scrollToSection('projects')}
                    >
                      <Code className="mr-2 h-5 w-5" />
                      View Projects
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="neon-border-pink bg-black/80 hover:bg-black/60 neon-text-pink backdrop-blur-sm text-lg px-8 transition-all duration-300 hover:scale-105 shadow-lg shadow-[0_0_20px_rgba(255,0,110,0.5)] hover:shadow-[0_0_30px_rgba(255,0,110,0.7)] uppercase tracking-wider font-mono"
                      onClick={() => scrollToSection('contact')}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Me
                    </Button>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href="mailto:rouiejay08@gmail.com" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="https://github.com/giyuuuu0808" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/rouie-jay-paul-653252288/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* 3D Avatar Circle */}
                <div className="relative lg:block hidden">
                  <div className="relative w-full aspect-square max-w-md mx-auto perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-4 border-white/20 overflow-hidden transform-gpu hover:scale-105 transition-transform duration-500 animate-float shadow-2xl shadow-blue-500/30">
                      <img 
                        src="/projects/rui.jpg" 
                        alt="Rouie Jay Paul Llanillo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating Icons */}
                    <div className="absolute top-10 right-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50 animate-float" style={{ animationDelay: '0.5s' }}>
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-20 left-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/50 animate-float" style={{ animationDelay: '1s' }}>
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-1/2 left-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50 animate-float" style={{ animationDelay: '1.5s' }}>
                      <Database className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-10 w-10 text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: `${stats.years}+`, label: "YEARS EXPERIENCE", neonClass: "neon-text-green", borderClass: "neon-border-green", delay: "0ms" },
              { value: `${stats.certs}+`, label: "CERTIFICATIONS", neonClass: "neon-text-pink", borderClass: "neon-border-pink", delay: "100ms" },
              { value: stats.agencies.toString(), label: "GOV AGENCIES", neonClass: "neon-text-purple", borderClass: "neon-border-purple", delay: "200ms" },
              { value: `${stats.commitment}%`, label: "COMMITMENT", neonClass: "neon-text-green", borderClass: "neon-border-green", delay: "300ms" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`cyber-card scanlines p-6 rounded-none backdrop-blur-xl bg-black/60 ${stat.borderClass} text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] cursor-pointer group`}
                style={{ animationDelay: stat.delay }}
              >
                <div className={`text-5xl md:text-6xl font-bold ${stat.neonClass} mb-2 group-hover:scale-110 transition-transform duration-300 font-mono`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold gradient-text-cyber">ABOUT ME</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I am a dedicated Information System Researcher with a strong foundation in web development, cybersecurity, and data management. Currently working at Duty Free Philippines Corporation, I bring extensive experience from the Philippine Statistics Authority and various government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index} 
                  className="cyber-card scanlines p-6 rounded-none backdrop-blur-xl bg-black/60 neon-border-green hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all duration-500 hover:scale-105 group cursor-pointer"
                  style={{ animationDelay: skill.delay }}
                >
                  <div className={`w-16 h-16 rounded-none bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg border-2 border-[#00ff41]`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold neon-text-green mb-3 uppercase tracking-wider font-mono">{skill.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 uppercase tracking-wide font-mono">Proficiency</span>
                      <span className="neon-text-pink font-semibold font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-black/60 rounded-none overflow-hidden border border-[#00ff41]/30">
                      <div 
                        className="h-full rounded-none transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #00ff41, #00f0ff)',
                          boxShadow: '0 0 10px #00ff41'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold gradient-text-cyber">PROFESSIONAL JOURNEY</h2>
            <p className="text-lg md:text-xl text-gray-300">
              A track record of delivering impactful solutions across sectors
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={index} 
                  className={`glass-card p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border-l-4 ${
                    exp.type === 'current' 
                      ? 'border-l-blue-500 bg-blue-500/10' 
                      : 'border-l-white/20'
                  } hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl group`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                        <p className="flex items-center gap-2 text-gray-300">
                          <Briefcase className="h-4 w-4" />
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge className={`${exp.type === 'current' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/10'} border-0 text-white`}>
                        {exp.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold gradient-text-cyber">FEATURED PROJECTS</h2>
            <p className="text-lg md:text-xl text-gray-300">
              Showcasing real-world applications and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index} 
                  className="cyber-card holographic scanlines p-8 rounded-none backdrop-blur-xl bg-black/60 neon-border-pink hover:shadow-[0_0_40px_rgba(255,0,110,0.6)] transition-all duration-500 hover:scale-105 group cursor-pointer relative overflow-hidden"
                >
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 via-[#ff006e]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {project.image && (
                      <div className="mb-6 rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-all duration-300">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} className="bg-white/10 hover:bg-white/20 border-0 text-white backdrop-blur-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-bold gradient-text-cyber">CERTIFICATIONS</h2>
            <p className="text-lg md:text-xl text-gray-300">
              Continuous learning and professional development
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "programming", "cybersecurity", "technical", "quality"].map((category) => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-0 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70' 
                    : 'border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-white/10 border-0 text-white backdrop-blur-sm">{cert.hours}h</Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.provider} • {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl md:text-7xl font-bold gradient-text-cyber">RECOGNITION</h2>
            </div>

            <div className="glass-card p-12 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl shadow-blue-500/30">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto shadow-2xl shadow-yellow-500/50 animate-pulse-slow">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Outstanding Contact Tracer Award</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Recognized for exceptional performance and dedication in contact tracing operations during the pandemic response, demonstrating technical proficiency and commitment to public service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-bold gradient-text-cyber">EDUCATION</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                degree: "Bachelor of Science in Information Technology",
                school: "STI College Paranaque",
                period: "2012 - 2017",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                degree: "High School",
                school: "Moonwalk National High School",
                period: "2008 - 2012",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((edu, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-gray-300 text-lg">{edu.school}</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-bold gradient-text-cyber">GET IN TOUCH</h2>
            <p className="text-lg md:text-xl text-gray-300">
              Let's discuss how I can contribute to your team or project
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10">
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "rouiejay08@gmail.com", href: "mailto:rouiejay08@gmail.com", gradient: "from-blue-500 to-cyan-500" },
                  { icon: Phone, label: "Phone", value: "0950 584 5822", href: "tel:09505845822", gradient: "from-green-500 to-emerald-500" },
                  { icon: MapPin, label: "Location", value: "San Agustin, Pampanga\nMetro Manila, Philippines", gradient: "from-orange-500 to-red-500" }
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-lg mb-2">{contact.label}</div>
                        {contact.href ? (
                          <a href={contact.href} className="text-gray-300 hover:text-white transition-colors whitespace-pre-line">
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-gray-300 whitespace-pre-line">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}

                <div className="pt-8 border-t border-white/10">
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="mailto:rouiejay08@gmail.com" 
                      className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="h-5 w-5" />
                      Send Email
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/rouie-jay-paul-653252288/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative border-t border-white/10">
        <div className="container">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-4">
              {[
                { icon: Mail, href: "mailto:rouiejay08@gmail.com" },
                { icon: Github, href: "https://github.com/giyuuuu0808" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rouie-jay-paul-653252288/" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    <Icon className="h-4 w-4 text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Rouie Jay Paul Llanillo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
