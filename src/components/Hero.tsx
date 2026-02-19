import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image — flipped horizontally via wrapper */}
      <div className="absolute inset-0 [transform:scaleX(-1)]">
        <Image
          src="/images/hero.jpeg"
          alt="Tiger Electrical Services — Professional electrical work"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Layered overlays (not flipped) */}
      <div className="absolute inset-0 bg-bg/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-bg/20 to-transparent" />

      {/* Content — anchored bottom-left, well-proportioned */}
      <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-20 md:pb-24 max-w-2xl">
        <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4 animate-fade-in-up">
          Licensed · Bonded · Insured · Broken Arrow, Oklahoma
        </p>

        <h1 className="text-white font-black leading-tight tracking-tight mb-5 animate-fade-in-up-delay-1">
          <span className="block text-4xl sm:text-5xl md:text-6xl">
            Tiger Electrical Services:
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl text-primary mt-1">
            YOUR ELECTRICIAN
          </span>
        </h1>

        <p className="text-text-muted text-sm md:text-base max-w-md mb-8 leading-relaxed animate-fade-in-up-delay-2">
          Locally owned and operated electrical contracting firm serving the greater Tulsa area and Green Country.
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-3 font-black text-xs tracking-widest uppercase hover:bg-white hover:text-bg transition-colors duration-200"
          >
            Contact Us
          </a>
          <a
            href="#projects"
            className="border border-white/50 text-white px-6 py-3 font-black text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Past Projects
          </a>
          <a
            href="#about"
            className="border border-white/20 text-text-muted px-6 py-3 font-black text-xs tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-200"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
