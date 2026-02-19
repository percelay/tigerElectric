import {
  Building2,
  Home,
  HardHat,
  Wrench,
  AlertCircle,
  Lightbulb,
  Network,
  Ruler,
  Zap,
  ClipboardList,
  Search,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial Electrical',
    desc: 'Full-service commercial electrical contracting for businesses of all sizes, from office buildings to industrial facilities.',
    span: 'md:col-span-2',
    accent: false,
  },
  {
    icon: AlertCircle,
    title: 'Emergency Service',
    desc: 'When electrical issues can\'t wait, our team responds fast.',
    span: '',
    accent: true,
  },
  {
    icon: Home,
    title: 'Residential Service & Repair',
    desc: 'Home electrical service, repair, panel upgrades, and smart home integrations.',
    span: '',
    accent: false,
  },
  {
    icon: HardHat,
    title: 'New Construction',
    desc: 'Complete electrical systems for new residential and commercial builds from foundation to finish.',
    span: '',
    accent: false,
  },
  {
    icon: Wrench,
    title: 'Commercial & Residential Remodels',
    desc: 'Remodeling your space? We\'ll integrate new electrical seamlessly.',
    span: '',
    accent: false,
  },
  {
    icon: Lightbulb,
    title: 'Exterior & Interior Lighting',
    desc: 'Lighting design and installation for ambiance, safety, and efficiency.',
    span: '',
    accent: false,
  },
  {
    icon: Network,
    title: 'Data / Telecom',
    desc: 'Data cabling, telecom infrastructure, and structured network wiring.',
    span: '',
    accent: false,
  },
  {
    icon: Ruler,
    title: 'Design Build Services',
    desc: 'We integrate your vision into a set of plans and complete the electrical project with true craftsmanship and customer satisfaction.',
    span: 'md:col-span-2',
    accent: false,
  },
  {
    icon: Zap,
    title: 'Electrical Service Upgrades',
    desc: 'Panel upgrades and service modernization to meet today\'s power demands.',
    span: '',
    accent: false,
  },
  {
    icon: ClipboardList,
    title: 'Electrical Estimating',
    desc: 'Detailed, accurate estimates so you know exactly what to expect.',
    span: '',
    accent: false,
  },
  {
    icon: Search,
    title: 'Electrical Inspections',
    desc: 'Comprehensive inspections and reports for buyers, sellers, and property managers.',
    span: '',
    accent: false,
  },
];

const industries = [
  'Education',
  'Healthcare',
  'Industrial',
  'Professional',
  'Religious',
  'Retail',
  'Restaurant',
  'Civic',
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

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
            What We Do
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
              Our Services
            </h2>
            <p className="text-text-muted max-w-sm leading-relaxed md:text-right">
              Whether it is your home or business, we are{' '}
              <span className="text-primary font-bold">YOUR ELECTRICIAN.</span>
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`${service.span} ${
                  service.accent
                    ? 'bg-primary border-transparent'
                    : 'bg-surface border border-white/5 hover:border-primary/20'
                } p-7 flex flex-col gap-4 transition-colors duration-200 group`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center ${
                    service.accent
                      ? 'bg-white/20'
                      : 'bg-primary/10 group-hover:bg-primary/20'
                  } transition-colors`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      service.accent ? 'text-white' : 'text-primary'
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-black text-base mb-2 ${
                      service.accent ? 'text-white' : 'text-white'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      service.accent ? 'text-white/80' : 'text-text-muted'
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries + Service areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Industries served */}
          <div className="bg-surface border border-white/5 p-8">
            <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
              Industries Served
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="border border-white/10 text-text-muted text-xs px-3 py-1.5 tracking-wide hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Service areas */}
          <div className="bg-surface border border-white/5 p-8">
            <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
              Service Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="border border-white/10 text-text-muted text-xs px-3 py-1.5 tracking-wide hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
