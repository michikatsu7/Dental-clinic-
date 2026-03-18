import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  Stethoscope, 
  Baby, 
  Zap, 
  Smile,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

const services = [
  {
    title: "Digital Smile Design",
    description: "See your new smile before we even start with our advanced 3D imaging technology.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Painless Laser Dentistry",
    description: "No needles, no noise, no fear. Experience the future of comfortable dental care.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Advanced Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth that last a lifetime.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Professional Whitening",
    description: "Get a smile up to 5 shades brighter in just one sitting with our safe clinical methods.",
    icon: <Smile className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Invisible Aligners",
    description: "Straighten your teeth discreetly without wires or brackets using Invisalign technology.",
    icon: <Star className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle, friendly care designed specifically to make children feel safe and happy.",
    icon: <Baby className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Root Canal Treatment",
    description: "Save your natural teeth with our advanced, virtually painless root canal procedures.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical care for wisdom teeth removal and complex oral health issues.",
    icon: <Stethoscope className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Emergency Care",
    description: "Immediate attention for dental trauma, severe pain, or broken teeth when you need it.",
    icon: <Clock className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    color: "bg-red-50 text-red-600"
  }
];

const features = [
  {
    title: "AI-Powered Consultation",
    description: "Upload a photo for a quick online assessment of your dental health.",
    icon: <Stethoscope className="w-5 h-5" />
  },
  {
    title: "Membership Plans",
    description: "Annual 'Smile Packages' for families to keep everyone healthy and happy.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "Digital Records",
    description: "Access your X-rays and prescriptions instantly on your phone anytime.",
    icon: <Clock className="w-5 h-5" />
  }
];

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Dental Surgeon & Implantologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    specialty: "15+ Years Experience"
  },
  {
    name: "Dr. Ananya Singh",
    role: "Orthodontist & Smile Designer",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400",
    specialty: "Invisalign Certified"
  },
  {
    name: "Dr. Vikram Mehta",
    role: "Pediatric Dentist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    specialty: "Child Care Expert"
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "6003398860";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi%20Dr.%20Rajesh,%20I%20would%20like%20to%20book%20a%20dental%20consultation.`;

  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-blue-100 selection:text-blue-900 relative">
      {/* Global Transparent Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Clinic Background" 
          className="w-full h-full object-cover opacity-15"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Smile className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Rajesh <span className="text-blue-600">Dental</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#team" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Our Team</a>
            <a href="#gallery" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Services</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Our Team</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Gallery</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Contact</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-4 rounded-2xl text-lg font-bold shadow-xl shadow-blue-100"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[100px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Premium Dental Excellence
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 leading-[0.95] mb-8 tracking-tight">
                Redefining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Your Smile.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-xl font-medium">
                Experience the perfect blend of advanced technology and artistic precision. 
                We don't just treat teeth; we craft smiles that change lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book Consultation
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-[2rem] font-bold text-xl hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Phone className="w-6 h-6" />
                  Call Clinic
                </motion.a>
              </div>
              
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-12">
                <div>
                  <p className="text-3xl font-bold text-slate-900">15+</p>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">10k+</p>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Happy Smiles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">99%</p>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Success Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Dentist" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Rating</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  "The best dental experience I've ever had. Painless and professional!"
                </p>
              </motion.div>

              {/* Decorative Ring */}
              <div className="absolute -top-10 -right-10 w-64 h-64 border-[32px] border-blue-50 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Comprehensive Care for <br />
              <span className="text-blue-600">Every Smile</span>
            </h2>
            <p className="text-lg text-slate-600">
              We combine advanced technology with a gentle touch to provide 
              the best dental experience in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/40 shadow-xl hover:shadow-blue-200/50 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-6 left-6 w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-md border border-white/40`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={whatsappLink} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all"
                    >
                      Book Now <ChevronRight className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-bold text-slate-400">4.9</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Features */}
      <section className="py-24 bg-slate-900/60 backdrop-blur-2xl text-white overflow-hidden relative border-y border-white/10">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Modern Dentistry <br />
                <span className="text-blue-400">Redefined.</span>
              </h2>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 border border-white/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Dental Technology" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center text-center p-4 shadow-2xl border-4 border-slate-900">
                <span className="font-bold text-sm leading-tight">Painless Technology Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white/20 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Meet Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-lg text-slate-600">
              Our specialists are dedicated to providing you with the highest 
              standard of personalized dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-blue-200 transition-all duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    {member.specialty}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <div className="flex justify-center gap-4 text-slate-400">
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                  <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                  <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 relative overflow-hidden bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Our <span className="text-blue-600">Clinic Gallery</span>
            </h2>
            <p className="text-lg text-slate-600">
              Take a virtual tour of our modern, hygienic, and patient-friendly facility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-[2rem] overflow-hidden shadow-lg border-4 border-white cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Clinic Gallery ${index + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative bg-blue-600/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600/40 backdrop-blur-2xl rounded-[3.5rem] p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-white/20">
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready for your new smile?</h2>
                <p className="text-xl text-blue-100 mb-10">
                  Book your consultation today and take the first step towards a healthier, brighter smile.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Call Us Directly</p>
                      <a href={`tel:${phoneNumber}`} className="text-2xl font-bold hover:underline">{phoneNumber}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Visit Our Clinic</p>
                      <p className="text-xl font-bold">Rajesh Dental Excellence, City Center</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 text-slate-900 shadow-2xl border border-white/40">
                <h3 className="text-2xl font-bold mb-6">Quick Appointment</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Your mobile number" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Service Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                      <option>General Checkup</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>Invisible Aligners</option>
                    </select>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95 mt-4">
                    Request Callback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Smile className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Rajesh <span className="text-blue-600">Dental</span>
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-slate-500 font-medium">
              © 2026 Rajesh Dental Excellence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-200 hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with Dr. Rajesh
        </span>
      </a>
    </div>
  );
}
