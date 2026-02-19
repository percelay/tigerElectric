import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cms_upload_tower7_1491521199.jpg"
        alt="Tiger Electrical Services — Commercial tower electrical work"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-bg/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />

      {/* Content — anchored bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-16 md:pb-20 max-w-5xl">
        <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5 animate-fade-in-up">
          Licensed · Bonded · Insured · Broken Arrow, Oklahoma
        </p>

        <h1 className="text-white font-black leading-[0.9] tracking-tighter mb-6 animate-fade-in-up-delay-1">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Tiger Electrical
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Services:
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary">
            YOUR ELECTRICIAN
          </span>
        </h1>

        <p className="text-text-muted text-base md:text-lg max-w-lg mb-10 leading-relaxed animate-fade-in-up-delay-2">
          Locally owned and operated electrical contracting firm serving the greater Tulsa area and Green Country.
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-black text-xs tracking-widest uppercase hover:bg-white hover:text-bg transition-colors duration-200"
          >
            Request Service <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 font-black text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-200"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold rotate-90 origin-center translate-x-3">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
