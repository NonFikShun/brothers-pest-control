import React, { useState, useEffect } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, Star, Shield, Home, Leaf, Check,
  Bug, SprayCan, Network, ShieldAlert, Rat, ShieldCheck, Award, Quote,
} from 'lucide-react';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const ids = ['services', 'why-us', 'locations', 'contact'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const locations = [
    'Aiken, GA', 'Martinez, GA', 'Thomson, GA', 'Graniteville, SC',
    'Evans, SC', 'Grovetown, GA', 'North Augusta, SC', 'Hephzibah, GA', 'Augusta, GA'
  ];

  const services = [
    { title: 'Ant Control', icon: Bug, desc: 'Eliminate fire ants and carpenter ants' },
    { title: 'Roach Prevention', icon: SprayCan, desc: 'Comprehensive cockroach control' },
    { title: 'Spider & Web Removal', icon: Network, desc: 'Safe spider and web management' },
    { title: 'Termite Treatment', icon: ShieldAlert, desc: 'Professional termite inspections & bonds' },
    { title: 'Wildlife Control', icon: Rat, desc: 'Humane wildlife removal & prevention' },
    { title: 'Preventative Pest Plans', icon: ShieldCheck, desc: 'Ongoing protection for your home' }
  ];

  const testimonials = [
    { name: 'John M.', text: 'Professional service and honest pricing. They really care about their customers.' },
    { name: 'Sarah H.', text: 'Excellent work! They got rid of our termite problem completely.' },
    { name: 'David L.', text: 'Family-owned feel with professional results. Highly recommend Brothers!' }
  ];

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#locations', label: 'Locations' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="w-full bg-cream">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-pine/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="logo.png"
                alt="Brothers Pest Control Logo"
                className="h-10 object-contain"
              />
              <span className="font-serif font-semibold text-lg text-ink">Brothers Pest Control</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors py-1 nav-link ${isActive ? 'text-pine' : 'text-warmslate hover:text-pine'}`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 bg-barn transition-all ${isActive ? 'w-full' : 'w-0'}`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <a href="tel:8032002033" className="hidden sm:flex items-center gap-2 bg-pine hover:bg-moss text-creamdark px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
              <Phone size={18} />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-ink">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-pine/15 pt-4 bg-cream">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-warmslate hover:text-pine py-2 text-sm font-medium">
                  {link.label}
                </a>
              ))}
              <a href="tel:8032002033" className="block bg-pine hover:bg-moss text-creamdark px-4 py-2 rounded-lg text-sm font-semibold text-center">Call: (803) 200-2033</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-pine to-ink text-creamdark py-20 px-4">
        <div className="hero-texture" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Protecting Your Home & Family
          </h1>
          <p className="text-xl text-creamdark/85 mb-8 max-w-2xl mx-auto">
            Honest, reliable, and effective pest control solutions. Licensed and insured in Georgia and South Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://portal.gorilladesk.com/brospestcontrol/booking?fbclid=IwY2xjawTnX89wZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUFJbFFKTzVnUlVubElSN3FzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEewezlgg4vY1GfRL_hwmaiOZm5tj9zatPW8vrMeHS6EONmKB9_aHTJDhF3_zY_aem_PuyCdJYUeGN5oBeG-N2Fog" className="bg-pine hover:bg-moss text-creamdark px-9 py-3.5 rounded-lg font-bold text-lg transition-colors shadow-lg shadow-black/20">
              Schedule Service
            </a>
            <a href="#services" className="border-2 border-creamdark/40 hover:border-creamdark hover:bg-creamdark/10 text-creamdark px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Learn More
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-barn/15 border border-barn/40 text-creamdark px-4 py-2 rounded-full">
            <Award size={18} className="text-gold" />
            <span className="font-semibold text-sm">10% Military & First Responder Discount</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pine font-semibold text-xs tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              Our Services
            </h2>
            <p className="text-lg text-warmslate max-w-2xl mx-auto">
              Comprehensive pest control solutions tailored to protect your home and family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="service-card group bg-card p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-cardborder hover:border-pine hover:-translate-y-1">
                  <div className="relative inline-flex w-14 h-14 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pine to-moss flex items-center justify-center shadow-md">
                      <Icon className="text-creamdark" size={28} />
                    </div>
                    <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-cream border-2 border-card flex items-center justify-center shadow">
                      <Check size={12} className="text-pine" strokeWidth={3} />
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">{service.title}</h3>
                  <p className="text-warmslate text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pine font-semibold text-xs tracking-widest uppercase mb-2">Our Promise</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
              Why Choose Brothers Pest Control
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pine rounded-full mb-4 shadow-md">
                <Home className="text-creamdark" size={32} />
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-barn" />
                <h3 className="font-serif text-xl font-semibold text-ink">Family Owned & Operated</h3>
              </div>
              <p className="text-warmslate">
                Faith-driven values guide everything we do. We treat your home like our own, with integrity and care.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pine rounded-full mb-4 shadow-md">
                <Shield className="text-creamdark" size={32} />
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-barn" />
                <h3 className="font-serif text-xl font-semibold text-ink">Licensed & Insured</h3>
              </div>
              <p className="text-warmslate">
                Fully licensed and insured in Georgia and South Carolina. Professional service you can trust.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pine rounded-full mb-4 shadow-md">
                <Leaf className="text-creamdark" size={32} />
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-barn" />
                <h3 className="font-serif text-xl font-semibold text-ink">Effective Solutions</h3>
              </div>
              <p className="text-warmslate">
                Honest, reliable, and effective pest control that works. Real results for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="locations" className="py-16 px-4 bg-parchment">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
            Serving the CSRA
          </h2>
          <p className="text-center text-warmslate mb-8">Central Savannah River Area</p>

          <div className="bg-card rounded-xl p-8 shadow-sm border border-cardborder">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {locations.map((loc, idx) => (
                <div key={idx} className="location-chip flex items-center gap-2 px-3 py-2.5 rounded-lg border border-cardborder bg-cream transition-colors">
                  <MapPin size={18} className="text-pine flex-shrink-0" />
                  <span className="text-ink text-sm font-medium">{loc}</span>
                </div>
              ))}
            </div>
            <p className="text-warmslate text-sm mt-6 text-center italic">
              And surrounding areas. Call to check if we service your location.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="relative bg-card p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-cardborder hover:-translate-y-1 overflow-hidden">
                <Quote size={64} className="absolute -top-2 -left-1 text-pine/10" aria-hidden="true" />
                <div className="relative flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="relative text-ink mb-4 italic">"{testimonial.text}"</p>
                <p className="relative font-semibold text-pine">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-ink via-pine to-ink text-creamdark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-creamdark/85 mb-8">
            Contact us today for a free consultation and to schedule your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8032002033" className="bg-creamdark hover:bg-cream text-pine px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              <Phone size={20} />
              (803) 200-2033
            </a>
            <a href="mailto:office@brotherspestcontrol.net" className="bg-pine hover:bg-moss text-creamdark px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-ink text-creamdark/70 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center p-1">
                  <img src="logo.png" alt="Brothers Pest Control Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-serif font-semibold text-creamdark">Brothers Pest Control</span>
              </div>
              <p className="text-sm text-creamdark/60">
                Protecting homes and families with honest, reliable pest control solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-creamdark mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-moss transition-colors">Pest Control</a></li>
                <li><a href="#services" className="hover:text-moss transition-colors">Termite Treatment</a></li>
                <li><a href="#services" className="hover:text-moss transition-colors">Wildlife Control</a></li>
                <li><a href="#services" className="hover:text-moss transition-colors">Prevention Plans</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-serif font-semibold text-creamdark mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-us" className="hover:text-moss transition-colors">About Us</a></li>
                <li><a href="#locations" className="hover:text-moss transition-colors">Service Areas</a></li>
                <li><a href="#contact" className="hover:text-moss transition-colors">Contact</a></li>
                <li><a href="https://www.instagram.com/brothers_pest" className="hover:text-moss transition-colors">Instagram</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold text-creamdark mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="flex-shrink-0 mt-0.5 text-moss" />
                  <span>(803) 200-2033</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="flex-shrink-0 mt-0.5 text-moss" />
                  <span>office@brotherspestcontrol.net</span>
                </li>
                <li className="text-xs pt-2">
                  <span className="inline-block bg-barn text-creamdark px-2 py-1 rounded-full font-semibold">
                    10% Military & First Responder Discount
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-creamdark/15 pt-8 text-center text-sm text-creamdark/60">
            <p>Licensed and Insured in Georgia and South Carolina</p>
            <p className="mt-2">&copy; 2026 Brothers Pest Control. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
