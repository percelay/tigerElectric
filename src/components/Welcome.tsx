import { ShieldCheck, Award, MapPin } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '9', label: 'Service Areas' },
];

const credentials = [
  {
    icon: ShieldCheck,
    title: 'Licensed',
    desc: 'Fully licensed electrical contractors in the state of Oklahoma.',
  },
  {
    icon: Award,
    title: 'Bonded & Insured',
    desc: 'Comprehensive protection for every project, every time.',
  },
  {
    icon: MapPin,
    title: 'Local & Dedicated',
    desc: 'Proudly based in Broken Arrow, serving all of Green Country.',
  },
];

export default function Welcome() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
              Who We Are
            </p>
            <h2 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Serving Tulsa<br />& Green Country
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Tiger Electrical Services is a locally owned and operated electrical contracting firm based in Broken Arrow, Oklahoma, serving all of the greater Tulsa area and Green Country. We specialize in all phases of the electrical industry.
            </p>
            <p className="text-text-muted leading-relaxed mb-10">
              With well-equipped and trained electricians, we do electrical service work and new construction for some of the largest healthcare facilities, retirement communities, commercial real estate properties, and disaster restoration companies in the state of Oklahoma.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-primary font-black text-3xl md:text-4xl">{stat.value}</p>
                  <p className="text-text-muted text-xs mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Credentials */}
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-surface p-7 flex items-start gap-5 border border-white/5 hover:border-primary/30 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-base mb-1">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Founders callout */}
            <div className="bg-primary p-7 mt-2">
              <p className="text-white font-black text-sm tracking-wide uppercase mb-3">Our Story</p>
              <p className="text-white/90 text-sm leading-relaxed">
                With well over 20 years of experience in the trade, owners <strong>Corey Wooldridge</strong> and <strong>Kevin Mantegani</strong> built Tiger Electrical Services to serve their families, their community, and to deliver true electrical craftsmanship. No project is too big or small.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
