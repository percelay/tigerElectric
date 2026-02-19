'use client';

import { useState } from 'react';
import { Send, CheckCircle, ChevronDown } from 'lucide-react';

const serviceTypes = [
  'Commercial Electrical Contractor Services',
  'Residential / Home Electrical Service & Repair',
  'New Construction',
  'Commercial & Residential Remodels',
  'Emergency Service',
  'Exterior & Interior Lighting',
  'Data / Telecom',
  'Design Build Services',
  'Electrical Service Upgrades',
  'Electrical Estimating',
  'Electrical Inspections',
  'Other',
];

const serviceAreas = [
  'Tulsa',
  'Broken Arrow',
  'Coweta',
  'Bixby',
  'Jenks',
  'Sand Springs',
  'Sapulpa',
  'Owasso',
  'Claremore',
  'Other',
];

const whyPoints = [
  'Direct communication — you talk to the electrician',
  'Licensed, bonded, and insured in Oklahoma',
  'Over 20 years of industry experience',
  'No project too large or too small',
  'Emergency service available',
  'Residential and commercial expertise',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left: Form — takes more space */}
          <div className="lg:col-span-3">
            <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
              Get In Touch
            </p>
            <h2 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Request Service
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-md leading-relaxed">
              Ready to start your project? Contact us for a free estimate. We serve all of Green Country.
            </p>

            {submitted ? (
              <div className="bg-surface border border-primary/40 p-8 flex items-start gap-5">
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-black text-xl mb-2">
                    Request Received!
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Thank you for reaching out. We&apos;ll review your request and get back to you shortly. Tiger Electrical Services appreciates the opportunity to be YOUR ELECTRICIAN.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-text-muted text-xs font-semibold tracking-wide block mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-surface border border-white/10 text-white text-sm px-4 py-3 placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-text-muted text-xs font-semibold tracking-wide block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(918) 555-0100"
                      className="w-full bg-surface border border-white/10 text-white text-sm px-4 py-3 placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-text-muted text-xs font-semibold tracking-wide block mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-surface border border-white/10 text-white text-sm px-4 py-3 placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors duration-200"
                  />
                </div>

                {/* Service type + City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-text-muted text-xs font-semibold tracking-wide block mb-2">
                      Service Type
                    </label>
                    <div className="relative">
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-surface border border-white/10 text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200 appearance-none text-white"
                      >
                        <option value="" className="text-text-muted">
                          Select a service...
                        </option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s} className="bg-surface text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-text-muted text-xs font-semibold tracking-wide block mb-2">
                      Your City
                    </label>
                    <div className="relative">
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-surface border border-white/10 text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200 appearance-none text-white"
                      >
                        <option value="">Select your city...</option>
                        {serviceAreas.map((a) => (
                          <option key={a} value={a} className="bg-surface text-white">
                            {a}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-text-muted text-xs font-semibold tracking-wide block mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your electrical project or service needs in as much detail as possible..."
                    className="w-full bg-surface border border-white/10 text-white text-sm px-4 py-3 placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 font-black text-xs tracking-widest uppercase hover:bg-white hover:text-bg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Request <Send className="w-4 h-4" />
                </button>

                <p className="text-text-muted text-xs text-center">
                  We&apos;ll respond promptly. Tiger Electrical Services is YOUR ELECTRICIAN.
                </p>
              </form>
            )}
          </div>

          {/* Right: Info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Why Tiger Electrical */}
            <div className="bg-surface border border-white/5 p-8">
              <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
                Why Choose Us
              </p>
              <ul className="space-y-3">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-1 h-full min-h-[20px] bg-primary flex-shrink-0 mt-1.5" />
                    <p className="text-text-muted text-sm leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service areas */}
            <div className="bg-primary p-8">
              <p className="text-white font-black text-xs tracking-[0.4em] uppercase mb-5">
                Service Areas
              </p>
              <div className="grid grid-cols-3 gap-y-3 gap-x-2">
                {[
                  'Tulsa',
                  'Broken Arrow',
                  'Coweta',
                  'Bixby',
                  'Jenks',
                  'Sand Springs',
                  'Sapulpa',
                  'Owasso',
                  'Claremore',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-white/60 rounded-full flex-shrink-0" />
                    <span className="text-white/90 text-xs leading-tight">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-xs mt-5">
                Based in Broken Arrow, Oklahoma · Serving all of Green Country
              </p>
            </div>

            {/* About owners */}
            <div className="bg-surface border border-white/5 p-8">
              <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-3">
                About the Owners
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Tiger Electrical Services wants your overall experience to be professional and to exceed the industry standard. We are not your typical service company. We are <strong className="text-white">licensed, bonded, and insured</strong> — so call us today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
