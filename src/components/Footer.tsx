'use client';

import { Zap, Facebook, Mail } from 'lucide-react';

const serviceLinks = [
  'Commercial Electrical',
  'Residential Service',
  'New Construction',
  'Remodeling',
  'Emergency Service',
  'Lighting Design',
  'Data / Telecom',
  'Design Build',
  'Service Upgrades',
  'Electrical Inspections',
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'What Makes Us Different', href: '#difference' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Get a Quote', href: '#contact' },
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
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/10">
      {/* Mega footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <p className="text-white font-black text-sm tracking-widest uppercase">
                  Tiger Electrical
                </p>
                <p className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">
                  Services
                </p>
              </div>
            </div>

            <p className="text-text-muted text-sm leading-relaxed mb-6">
              With well over 20 years of experience, owners <strong className="text-white">Corey Wooldridge</strong> and <strong className="text-white">Kevin Mantegani</strong> built Tiger Electrical Services to deliver true craftsmanship and exceptional service to the Tulsa community.
            </p>

            <p className="text-text-muted text-xs mb-6 font-semibold tracking-wide">
              Licensed · Bonded · Insured
            </p>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100067383352976&fref=ts#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1464d8] text-white px-4 py-2.5 text-xs font-bold tracking-wide transition-colors duration-200"
            >
              <Facebook className="w-4 h-4" />
              Follow on Facebook
            </a>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-text-muted text-xs font-semibold tracking-wide mb-3 uppercase">
                Stay Connected
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-bg border border-white/10 text-white text-xs px-3 py-2.5 placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2.5 hover:bg-white hover:text-bg transition-colors flex-shrink-0"
                  aria-label="Subscribe"
                >
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-5 pb-3 border-b border-white/10">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-text-muted text-sm hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-8">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service areas + legal */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-5 pb-3 border-b border-white/10">
              Service Areas
            </h4>
            <ul className="space-y-2.5 mb-8">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-text-muted text-sm">{area}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-5">
              <p className="text-text-muted text-xs mb-1">
                Broken Arrow, Oklahoma
              </p>
              <p className="text-text-muted text-xs mb-3">
                Serving Tulsa and Green Country
              </p>
              <p className="text-primary font-black text-xs tracking-widest uppercase">
                YOUR ELECTRICIAN
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {currentYear} Tiger Electrical Services. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Licensed Electrical Contractor · State of Oklahoma
          </p>
        </div>
      </div>
    </footer>
  );
}
