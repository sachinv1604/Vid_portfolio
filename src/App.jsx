import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Mail, Code, Database, Globe, Award, User, Send, Menu, X, ChevronDown, Sparkles, Rocket, Zap, Star, FileSpreadsheet, FileText } from 'lucide-react';

// Custom Github Icon
const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Custom LinkedIn Icon
const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Particle = ({ delay }) => (
  <motion.div
    className="absolute w-2 h-2 bg-blue-500 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0,1,0], scale: [0,1,0], y: [-100,100], x: [0, Math.random()*200-100] }}
    transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: Math.random()*2 }}
  />
);

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div key={i} className="absolute rounded-full filter blur-xl"
        style={{
          background: `radial-gradient(circle, ${i%3===0?'rgba(59,130,246,0.25)':i%3===1?'rgba(139,92,246,0.25)':'rgba(236,72,153,0.25)'}, transparent)`,
          width: Math.random()*250+80, height: Math.random()*250+80,
          left: `${Math.random()*100}%`, top: `${Math.random()*100}%`,
        }}
        animate={{ x:[0,Math.random()*80-40], y:[0,Math.random()*80-40], scale:[1,1.2,1], opacity:[0.3,0.6,0.3] }}
        transition={{ duration: Math.random()*10+10, repeat: Infinity, ease:"easeInOut" }}
      />
    ))}
  </div>
);

const FloatingEmojis = () => {
  const emojis = ['💻','🚀','✨','💡','🎯','⚡','🔥','💪'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {emojis.map((emoji, i) => (
        <motion.div key={i} className="absolute text-3xl"
          style={{ left: `${10 + i * 12}%` }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0,1,1,0], rotate: [0,360] }}
          transition={{ duration: 8+i, delay: i*1.5, repeat: Infinity, repeatDelay: 3 }}
        >{emoji}</motion.div>
      ))}
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const navItems = ['About','Skills','Projects','Certificates','Contact'];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left" style={{ scaleX: scrollYProgress }} />
      <motion.nav initial={{ y:-100 }} animate={{ y:0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled?'bg-gray-900/95 backdrop-blur-xl shadow-2xl':'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity:0, x:-50 }} animate={{ opacity:1, x:0 }} whileHover={{ scale:1.1 }} className="text-2xl font-bold text-white relative cursor-pointer">
              <span className="relative z-10"><span className="text-blue-500">V</span>M</span>
              <motion.span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-40" animate={{ scale:[1,1.3,1] }} transition={{ duration:2, repeat:Infinity }} />
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, i) => (
                <motion.a key={item} href={`#${item.toLowerCase()}`}
                  initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1*i }}
                  whileHover={{ scale:1.15, color:'#3b82f6' }}
                  className="text-gray-300 hover:text-blue-500 transition-all cursor-pointer relative font-medium"
                >
                  {item}
                  <motion.span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" initial={{ width:0 }} whileHover={{ width:'100%' }} transition={{ duration:0.3 }} />
                </motion.a>
              ))}
            </div>

            <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
              <AnimatePresence mode="wait">
                {isOpen
                  ? <motion.div key="x" initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:90, opacity:0 }}><X className="w-6 h-6" /></motion.div>
                  : <motion.div key="m" initial={{ rotate:90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:-90, opacity:0 }}><Menu className="w-6 h-6" /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }} className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800 relative overflow-hidden">
              <FloatingOrbs />
              <div className="px-4 py-4 space-y-2 relative z-10">
                {navItems.map((item, i) => (
                  <motion.button key={item}
                    initial={{ opacity:0, x:-40 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-40 }} transition={{ delay:i*0.08 }}
                    whileHover={{ x:10, color:'#3b82f6' }} whileTap={{ scale:0.95 }}
                    onClick={() => { setIsOpen(false); document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior:'smooth' }); }}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-500 hover:bg-gray-800/50 rounded-lg transition-all"
                  >{item}</motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
    <FloatingOrbs />
    <FloatingEmojis />
    <div className="absolute inset-0">{[...Array(20)].map((_,i) => <Particle key={i} delay={i*0.15} />)}</div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" style={{ maskImage:'radial-gradient(ellipse 80% 50% at 50% 50%,black,transparent)' }} />

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div initial="hidden" animate="visible" variants={{ hidden:{opacity:0}, visible:{opacity:1, transition:{staggerChildren:0.2}} }}>

        <motion.div initial={{ scale:0, rotate:-180, opacity:0 }} animate={{ scale:1, rotate:0, opacity:1 }} transition={{ duration:1, type:'spring', bounce:0.5 }} className="mb-8 relative inline-block">
          <motion.div animate={{ y:[0,-20,0], rotate:[0,5,-5,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }} className="relative">
            <motion.div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1" animate={{ rotate:360 }} transition={{ duration:8, repeat:Infinity, ease:'linear' }}>
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* PROFILE PHOTO: User icon ki jagah yeh paste karo:
                    <img src="/images/profile.jpg" alt="Vidya" className="w-full h-full object-cover rounded-full" /> */}
                 <img src="/images/profile.jpeg" alt="Vidya" className="w-full h-full object-cover rounded-full" />
              </div>
            </motion.div>
            {[Sparkles, Rocket, Zap, Star].map((Icon, i) => (
              <motion.div key={i} className="absolute" style={{ left:'50%', top:'50%' }}
                animate={{ rotate:360, x:Math.cos((i*Math.PI*2)/4)*85, y:Math.sin((i*Math.PI*2)/4)*85 }}
                transition={{ duration:10, repeat:Infinity, ease:'linear' }}>
                <Icon className="w-6 h-6 text-blue-400" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          {['V','i','d','y','a'].map((l,i) => (
            <motion.span key={i} initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.1, type:'spring', stiffness:200 }}
              whileHover={{ scale:1.2, color:'#3b82f6', y:-10 }} className="inline-block cursor-pointer">{l}</motion.span>
          ))}{' '}
          {['M','e','h','a','r','w','a','d','e'].map((l,i) => (
            <motion.span key={i} initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ delay:(i+5)*0.1, type:'spring', stiffness:200 }}
              whileHover={{ scale:1.2, y:-10 }} className="inline-block cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{l}</motion.span>
          ))}
        </motion.h1>

        <motion.p initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }} transition={{ delay:1.5 }} className="text-xl sm:text-2xl mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
            BCA Graduate | Aspiring Data Analyst
          </span>
        </motion.p>

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.8 }} className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Turning data into insights, one query at a time 📊 Passionate about data analysis and eager to learn new technologies ✨
        </motion.p>

        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a href="#contact" whileHover={{ scale:1.08, y:-4 }} whileTap={{ scale:0.95 }}
            animate={{ boxShadow:['0 0 20px rgba(59,130,246,0.3)','0 0 40px rgba(59,130,246,0.6)','0 0 20px rgba(59,130,246,0.3)'] }}
            transition={{ boxShadow:{ duration:2, repeat:Infinity } }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold relative overflow-hidden group">
            <motion.span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 justify-center">Get In Touch <motion.span animate={{ x:[0,5,0] }} transition={{ duration:1, repeat:Infinity }}>→</motion.span></span>
          </motion.a>
          <motion.a href="#projects" whileHover={{ scale:1.08, y:-4 }} whileTap={{ scale:0.95 }}
            className="px-8 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500 font-semibold relative overflow-hidden group transition-all">
            <motion.span className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">View Projects 🚀</span>
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.5 }} className="mt-14">
          <motion.div animate={{ y:[0,12,0] }} transition={{ duration:2, repeat:Infinity }}>
            <ChevronDown className="w-8 h-8 text-blue-500 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <FloatingOrbs />
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-100px' }}
        variants={{ hidden:{opacity:0}, visible:{opacity:1, transition:{staggerChildren:0.3}} }}
        className="grid md:grid-cols-2 gap-12 items-center">

        <motion.div variants={{ hidden:{opacity:0,x:-100}, visible:{opacity:1,x:0,transition:{duration:0.8,type:'spring'}} }}>
          {/* GIRL IMAGE:
              1. public/images/ folder mein girl.png save karo
              2. Neeche wala poora SVG block delete karo
              3. Yeh paste karo:
              <motion.img src="/images/girl.png" alt="Vidya" className="w-full h-auto rounded-2xl"
                animate={{ y:[0,-10,0] }} transition={{ duration:3, repeat:Infinity }} />
          */}
          <motion.img
          src="/images/girl.jpeg" alt="Vidya working" className="w-full h-auto rounded-2xl" animate={{ y:[0,-10,0] }}transition={{ duration:3, repeat:Infinity }}/>        </motion.div>

        <motion.div variants={{ hidden:{opacity:0,x:100}, visible:{opacity:1,x:0,transition:{duration:0.8}} }}>
          <h2 className="text-4xl font-bold text-white mb-6">
            About <motion.span className="text-blue-500" animate={{ textShadow:['0 0 20px rgba(59,130,246,0.5)','0 0 40px rgba(59,130,246,0.9)','0 0 20px rgba(59,130,246,0.5)'] }} transition={{ duration:2, repeat:Infinity }}>Me</motion.span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            {[
              "Hello! 👋 I'm Vidya Meharwade, a BCA graduate with a passion for data analysis. I'm constantly learning and exploring new technologies to enhance my skills.",
              "My journey in tech 🚀 has equipped me with a strong foundation in web development, programming, and database management. I'm actively seeking internship opportunities in data analysis where I can apply my knowledge and grow.",
              "Beyond academics 📊, I enjoy solving problems, contributing to projects, and staying updated with the latest industry trends. Let's build something amazing together! ✨"
            ].map((text, i) => (
              <motion.p key={i} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.2 }}
                whileHover={{ x:8, color:'#d1d5db' }} className="pl-4 border-l-2 border-transparent hover:border-blue-500 transition-all">{text}</motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  const technical = [
    { name:'HTML', icon:Globe, level:'Intermediate', color:'from-orange-500 to-red-500', emoji:'🌐' },
    { name:'CSS', icon:Globe, level:'Intermediate', color:'from-blue-500 to-cyan-500', emoji:'🎨' },
    { name:'JavaScript', icon:Code, level:'Intermediate', color:'from-yellow-500 to-orange-500', emoji:'⚡' },
    { name:'Python', icon:Code, level:'Intermediate', color:'from-blue-600 to-green-500', emoji:'🐍' },
    { name:'SQL', icon:Database, level:'Basic', color:'from-purple-500 to-pink-500', emoji:'🗄️' },
    { name:'React', icon:Code, level:'Learning', color:'from-cyan-500 to-blue-600', emoji:'⚛️' },
    { name:'MongoDB', icon:Database, level:'Learning', color:'from-green-500 to-emerald-600', emoji:'🍃' },
    { name:'React Native', icon:Code, level:'Learning', color:'from-sky-500 to-indigo-600', emoji:'📱' },
    { name:'Node.js', icon:Code, level:'Learning', color:'from-green-600 to-lime-500', emoji:'🟢' },
    { name:'Server.js', icon:Code, level:'Learning', color:'from-slate-500 to-gray-600', emoji:'🖥️' },
  ];
  const office = [
    { name:'Excel', icon:FileSpreadsheet, level:'Intermediate', color:'from-green-600 to-green-700', emoji:'📊' },
    { name:'Word', icon:FileText, level:'Intermediate', color:'from-blue-600 to-blue-700', emoji:'📝' },
    { name:'PowerPoint', icon:FileText, level:'Intermediate', color:'from-orange-600 to-red-600', emoji:'📈' },
  ];
  const ai = ['Claude 🤖','Stitch ✨','NotebookLM 📓','Numerous 🔢','Grok ⚡'];

  const Card = ({ s }) => (
    <motion.div
      variants={{ hidden:{opacity:0,scale:0.8,y:20}, visible:{opacity:1,scale:1,y:0,transition:{type:'spring',stiffness:120}} }}
      whileHover={{ scale:1.07, y:-5 }}
      className="bg-gray-800 px-3 py-3 rounded-lg border border-gray-700 hover:border-blue-500 transition-all relative overflow-hidden group flex items-center gap-2 cursor-pointer"
    >
      <motion.div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
      <s.icon className="w-5 h-5 text-blue-400 flex-shrink-0 relative z-10" />
      <div className="flex-1 min-w-0 relative z-10">
        <p className="text-sm font-semibold text-white truncate">{s.name}</p>
        <p className="text-xs text-gray-400">{s.level}</p>
      </div>
      <span className="text-sm flex-shrink-0 relative z-10">{s.emoji}</span>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden">
      <FloatingOrbs />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-100px' }} variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.1}} }}>
          <motion.h2 variants={{ hidden:{opacity:0,y:-40,scale:0.5}, visible:{opacity:1,y:0,scale:1,transition:{type:'spring',bounce:0.5}} }} className="text-4xl font-bold text-white mb-3 text-center">
            Skills & <span className="text-blue-500">Expertise</span>
          </motion.h2>
          <p className="text-center text-gray-400 mb-8">Technologies I work with 💪✨</p>

          <motion.h3 initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} className="text-base font-semibold text-blue-400 mb-3">💻 Technical Skills</motion.h3>
          <motion.div variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.07}} }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {technical.map(s => <Card key={s.name} s={s} />)}
          </motion.div>

          <motion.h3 initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} className="text-base font-semibold text-purple-400 mb-3">🛠️ Other Tools</motion.h3>
          <motion.div variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.07}} }} className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mb-8">
            {office.map(s => <Card key={s.name} s={s} />)}
          </motion.div>

          <motion.h3 initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} className="text-base font-semibold text-pink-400 mb-2">🤖 AI Tools Explored</motion.h3>
          <p className="text-gray-500 text-sm mb-4">Exploring the world of AI ✨</p>
          <div className="flex flex-wrap gap-3">
            {ai.map((tool, i) => (
              <motion.span key={tool} initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.1, type:'spring' }}
                whileHover={{ scale:1.1, y:-3 }} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm hover:text-pink-400 hover:border-pink-500 transition-all cursor-default">
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      id:1, title:'Portfolio Website',
      description:'Personal portfolio to showcase my skills, projects and certificates as a Data Analyst',
      image:'/images/project1.png',
      tech:'React, Tailwind CSS, Framer Motion', date:'2025'
    },
    {
      id:2, title:'EduNova - Institute Academic & Management System',
      description:'Academic management system for institutes to manage students, faculty, and academics efficiently',
      image:'/images/project2.jpeg',
      tech:'React Native, Node.js, MongoDB, Expo', date:'2025'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingOrbs />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-100px' }} variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.2}} }}>
          <motion.h2 variants={{ hidden:{opacity:0,scale:0}, visible:{opacity:1,scale:1,transition:{type:'spring',bounce:0.6}} }} className="text-4xl font-bold text-white mb-3 text-center">
            My <span className="text-blue-500">Projects</span>
          </motion.h2>
          <p className="text-center text-gray-400 mb-12">Things I've built 🚀💻</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((p, idx) => (
              <motion.div key={p.id}
                initial={{ opacity:0, y:60, rotateX:-15 }} whileInView={{ opacity:1, y:0, rotateX:0 }} viewport={{ once:true }} transition={{ delay:idx*0.2, type:'spring', stiffness:80 }}
                whileHover={{ scale:1.04, y:-12, transition:{duration:0.25} }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group">
                <div className="aspect-video relative overflow-hidden">
                  {/* PROJECT IMAGE: src mein apna image path daalo — e.g. src="/images/project1.png" */}
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span className="bg-gray-700 px-2 py-1 rounded-full">⚙️ {p.tech}</span>
                    <span>📅 {p.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Certificates = () => {
  const certs = [
  {
    id:1, title:'Introduction to JavaScript',
    description:'Completed JS fundamentals with theoretical and practical understanding',
    image:'/images/cert1.jpeg',  // ← YAHA
    issuer:'SoloLearn', date:'March 2025', color:'from-yellow-500 to-orange-500'
  },
  {
    id:2, title:'Introduction to Data Science',
    description:'Data analytics, AI/ML fundamentals and career paths in Data Analytics',
    image:'/images/cert2.jpeg',  // ← YAHA
    issuer:'Cisco Networking Academy', date:'March 2026', color:'from-blue-500 to-cyan-500'
  },
  {
    id:3, title:'Cybersecurity Fundamentals',
    description:'Completed Cybersecurity course through Skill India Digital Hub',
    image:'/images/cert3.jpeg',  // ← YAHA
    issuer:'Tech Mahindra - Skill India', date:'Sep 2025', color:'from-green-500 to-emerald-500'
  }
];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden">
      <FloatingOrbs />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-100px' }} variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.2}} }}>
          <motion.h2 variants={{ hidden:{opacity:0,scale:0}, visible:{opacity:1,scale:1,transition:{type:'spring',bounce:0.6}} }} className="text-4xl font-bold text-white mb-3 text-center">
            My <span className="text-blue-500">Certificates</span>
          </motion.h2>
          <p className="text-center text-gray-400 mb-12">My learning achievements 🏆📜</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((c, i) => (
              <motion.div key={c.id} href={c.link} target="_blank" rel="noopener noreferrer"
                initial={{ opacity:0, y:50, scale:0.9 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.15, type:'spring', stiffness:100 }}
                whileHover={{ scale:1.05, y:-12, transition:{duration:0.25} }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group block">
                <div className="aspect-video relative overflow-hidden">
  <img 
    src={c.image} 
    alt={c.title} 
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
</div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{c.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">{c.description}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>🏢 {c.issuer}</span>
                    <span>📅 {c.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const links = [
    { icon:Mail, text:'vidyameharwade873@gmail.com', href:'mailto:vidyameharwade873@gmail.com', label:'📧 Email' },
    { icon:Github, text:'github.com/vidyameharwade23', href:'https://github.com/vidyameharwade23', label:'💻 GitHub' },
    // LINKEDIN: Apna real LinkedIn URL neeche daalo
    { icon:Linkedin, text:'LinkedIn Profile', href:'https://linkedin.com/in/vidya-meharwade-440290383', label:'💼 LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingOrbs />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.15}} }}>
          <motion.h2 variants={{ hidden:{opacity:0,y:-40,scale:0.5}, visible:{opacity:1,y:0,scale:1,transition:{type:'spring'}} }} className="text-4xl font-bold text-white mb-3 text-center">
            Get In <span className="text-blue-500">Touch</span>
          </motion.h2>
          <p className="text-center text-gray-400 mb-12">Let's connect and build something amazing! 💬✨</p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={{ hidden:{opacity:0,x:-80}, visible:{opacity:1,x:0,transition:{type:'spring'}} }} className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              {links.map((item, i) => (
                <motion.a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} transition={{ delay:i*0.15 }}
                  whileHover={{ x:12, scale:1.03 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-white p-4 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-blue-500 group transition-all">
                  <motion.div whileHover={{ rotate:360, scale:1.2 }} transition={{ duration:0.5 }}>
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                  <motion.span animate={{ x:[0,4,0] }} transition={{ duration:1, repeat:Infinity }} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</motion.span>
                </motion.a>
              ))}
            </motion.div>

            <motion.form variants={{ hidden:{opacity:0,x:80}, visible:{opacity:1,x:0,transition:{type:'spring'}} }}
              onSubmit={e => { e.preventDefault(); alert('Message sent! 🎉'); }} className="space-y-4">
              {[{type:'text',ph:'Your Name',field:'name'},{type:'email',ph:'Your Email',field:'email'}].map(inp => (
                <motion.input key={inp.field} whileFocus={{ scale:1.02, boxShadow:'0 0 20px rgba(59,130,246,0.3)' }}
                  type={inp.type} placeholder={inp.ph} value={form[inp.field]} onChange={e => setForm({...form,[inp.field]:e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all placeholder-gray-500" />
              ))}
              <motion.textarea whileFocus={{ scale:1.02, boxShadow:'0 0 20px rgba(59,130,246,0.3)' }}
                placeholder="Your Message" rows="4" value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder-gray-500" />
              <motion.button whileHover={{ scale:1.04, boxShadow:'0 0 25px rgba(59,130,246,0.6)', y:-2 }} whileTap={{ scale:0.96 }} type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold relative overflow-hidden group">
                <motion.span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message 📨
                  <motion.div animate={{ x:[0,4,0], rotate:[0,45,0] }} transition={{ duration:1.5, repeat:Infinity }}>
                    <Send className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 px-4 border-t border-gray-800 relative overflow-hidden">
    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" animate={{ x:['-100%','100%'] }} transition={{ duration:8, repeat:Infinity, ease:'linear' }} />
    <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
      <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} className="text-gray-400 flex items-center gap-2 text-sm">
        Made with <motion.span animate={{ scale:[1,1.4,1] }} transition={{ duration:1, repeat:Infinity }}>❤️</motion.span>
        © 2025 <span className="text-blue-400 font-medium">Vidya Meharwade</span>
      </motion.p>
      <div className="flex gap-5">
        {[
          { icon:Github, href:'https://github.com/vidyameharwade23' },
          { icon:Linkedin, href:'https://linkedin.com/in/vidya-meharwade-440290383' },
          { icon:Mail, href:'mailto:vidyameharwade873@gmail.com' }
        ].map((item, i) => (
          <motion.a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
            initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} transition={{ delay:i*0.1, type:'spring' }}
            whileHover={{ scale:1.3, rotate:360, y:-4 }} whileTap={{ scale:0.9 }}
            className="text-gray-400 hover:text-white transition-colors">
            <item.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }} className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </motion.div>
  );
}