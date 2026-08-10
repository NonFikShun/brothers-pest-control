import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Shield, Home, Leaf, Check } from 'lucide-react';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locations = [
    'Aiken, GA', 'Martinez, GA', 'Thomson, GA', 'Graniteville, SC',
    'Evans, SC', 'Grovetown, GA', 'North Augusta, SC', 'Hephzibah, GA', 'Augusta, GA'
  ];

  const services = [
    { title: 'Ant Control', icon: '🐜', desc: 'Eliminate fire ants and carpenter ants' },
    { title: 'Roach Prevention', icon: '🪳', desc: 'Comprehensive cockroach control' },
    { title: 'Spider & Web Removal', icon: '🕷️', desc: 'Safe spider and web management' },
    { title: 'Termite Treatment', icon: '🦗', desc: 'Professional termite inspections & bonds' },
    { title: 'Wildlife Control', icon: '🦝', desc: 'Humane wildlife removal & prevention' },
    { title: 'Preventative Pest Plans', icon: '🛡️', desc: 'Ongoing protection for your home' }
  ];

  const testimonials = [
    { name: 'John M.', text: 'Professional service and honest pricing. They really care about their customers.' },
    { name: 'Sarah H.', text: 'Excellent work! They got rid of our termite problem completely.' },
    { name: 'David L.', text: 'Family-owned feel with professional results. Highly recommend Brothers!' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <span className="font-bold text-lg text-slate-900">Brothers Pest Control</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors">Services</a>
              <a href="#why-us" className="text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors">Why Us</a>
              <a href="#locations" className="text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors">Locations</a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <a href="tel:8032002033" className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
              <Phone size={18} />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-slate-200 pt-4">
              <a href="#services" className="block text-slate-600 hover:text-emerald-600 py-2 text-sm">Services</a>
              <a href="#why-us" className="block text-slate-600 hover:text-emerald-600 py-2 text-sm">Why Us</a>
              <a href="#locations" className="block text-slate-600 hover:text-emerald-600 py-2 text-sm">Locations</a>
              <a href="#contact" className="block text-slate-600 hover:text-emerald-600 py-2 text-sm">Contact</a>
              <a href="tel:8032002033" className="block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center">Call: (803) 200-2033</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Protecting Your Home & Family
          </h1>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Honest, reliable, and effective pest control solutions. Licensed and insured in Georgia and South Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8032002033" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Schedule Service
            </a>
            <a href="#services" className="border-2 border-emerald-300 hover:bg-emerald-700 text-emerald-50 px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Learn More
            </a>
          </div>
          <p className="text-emerald-100 mt-8 font-semibold">🎖️ 10% Military & First Responder Discount</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive pest control solutions tailored to protect your home and family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-emerald-600">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Choose Brothers Pest Control
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Home className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Family Owned & Operated</h3>
              <p className="text-slate-600">
                Faith-driven values guide everything we do. We treat your home like our own, with integrity and care.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Shield className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Licensed & Insured</h3>
              <p className="text-slate-600">
                Fully licensed and insured in Georgia and South Carolina. Professional service you can trust.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Leaf className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Effective Solutions</h3>
              <p className="text-slate-600">
                Honest, reliable, and effective pest control that works. Real results for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="locations" className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Serving the CSRA
          </h2>
          <p className="text-center text-slate-600 mb-8">Central Savannah River Area</p>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <MapPin size={20} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">{loc}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-6 text-center italic">
              And surrounding areas. Call to check if we service your location.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-slate-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            Contact us today for a free consultation and to schedule your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8032002033" className="bg-white hover:bg-emerald-50 text-emerald-600 px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              <Phone size={20} />
              (803) 200-2033
            </a>
            <a href="mailto:office@brotherspestcontrol.net" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                  B
                </div>
                <span className="font-bold text-white">Brothers Pest Control</span>
              </div>
              <p className="text-sm text-slate-400">
                Protecting homes and families with honest, reliable pest control solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Pest Control</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Termite Treatment</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Wildlife Control</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Prevention Plans</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#locations" className="hover:text-emerald-400 transition-colors">Service Areas</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="https://www.instagram.com/brothers_pest" className="hover:text-emerald-400 transition-colors">Instagram</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span>(803) 200-2033</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span>office@brotherspestcontrol.net</span>
                </li>
                <li className="text-xs pt-2">
                  <span className="inline-block bg-emerald-600 text-white px-2 py-1 rounded">
                    10% Military & First Responder Discount
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>Licensed and Insured in Georgia and South Carolina</p>
            <p className="mt-2">&copy; 2026 Brothers Pest Control. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
