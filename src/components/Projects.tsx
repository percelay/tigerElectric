'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Home,
  GraduationCap,
  HardHat,
  Snowflake,
  Factory,
  UtensilsCrossed,
  ShieldCheck,
  Wrench,
  Flame,
  Wind,
  Wine,
  BookOpen,
  Building2,
  ExternalLink,
} from 'lucide-react';
import GalleryModal from './GalleryModal';

const towerImages = [
  '/images/cms_upload_tower1_1491520986.jpg',
  '/images/cms_upload_tower2_1491521023.jpg',
  '/images/cms_upload_tower3_1491521052.jpg',
  '/images/cms_upload_tower4_1491521080.jpg',
  '/images/cms_upload_tower5_1491521127.jpg',
  '/images/cms_upload_tower6_1491521162.jpg',
  '/images/cms_upload_tower7_1491521199.jpg',
  '/images/cms_upload_tower8_1491521225.jpg',
  '/images/cms_upload_tower9_1491521259.jpg',
  '/images/cms_upload_tower10_1491521289.jpg',
  '/images/cms_upload_tower11_1491521927.jpg',
  '/images/cms_upload_tower12_1491521966.jpg',
  '/images/cms_upload_tower13_1491522011.jpg',
  '/images/cms_upload_tower14_1491522049.jpg',
  '/images/cms_upload_tower15_1491522126.jpg',
  '/images/cms_upload_tower16_1491522172.jpg',
  '/images/cms_upload_tower17_1491522224.jpg',
  '/images/cms_upload_tower18_1491522272.jpg',
  '/images/cms_upload_tower19_1491522308.jpg',
  '/images/cms_upload_tower20_1491522336.jpg',
  '/images/cms_upload_tower21_1491522370.jpg',
  '/images/cms_upload_tower22_1491522397.jpg',
  '/images/cms_upload_tower23_1491522432.jpg',
  '/images/cms_upload_tower24_1491522462.jpg',
  '/images/cms_upload_tower25_1491522505.jpg',
  '/images/cms_upload_tower26_1491522536.jpg',
  '/images/cms_upload_tower27_1491522569.jpg',
];

const foodBankImages = [
  '/images/cms_upload_food_1491518879.jpg',
  '/images/cms_upload_food1_1491518940.jpg',
  '/images/cms_upload_food2_1491519107.jpg',
  '/images/cms_upload_food3_1491519149.jpg',
  '/images/cms_upload_food4_1491519205.jpg',
  '/images/cms_upload_food5_1491520394.jpg',
  '/images/cms_upload_food6_1491520437.jpg',
  '/images/cms_upload_food7_1491520476.jpg',
  '/images/cms_upload_food8_1491520527.jpg',
  '/images/cms_upload_food9_1491520568.jpg',
  '/images/cms_upload_food10_1491520616.jpg',
  '/images/cms_upload_food11_1491520653.jpg',
  '/images/cms_upload_foodcharger_1491523799.jpg',
  '/images/cms_upload_foodcharger1_1491523850.jpg',
  '/images/cms_upload_foodcharger2_1491523896.jpg',
  '/images/cms_upload_foodcharger3_1491523929.jpg',
  '/images/cms_upload_foodcharger4_1491524002.jpg',
  '/images/cms_upload_foodcharger5_1491524096.jpg',
];

const featuredProjects = [
  {
    id: 'tower',
    name: 'Tower Components',
    description: 'Commercial electrical integration for high-rise telecommunication towers.',
    images: towerImages,
    cover: '/images/cms_upload_tower1_1491520986.jpg',
    imageCount: towerImages.length,
    span: 'md:col-span-2',
  },
  {
    id: 'foodbank',
    name: 'Food Bank of Eastern Oklahoma',
    description: 'Comprehensive warehouse lighting and climate-control power routing.',
    images: foodBankImages,
    cover: '/images/cms_upload_food1_1491518940.jpg',
    imageCount: foodBankImages.length,
    span: '',
  },
];

const iconProjects = [
  {
    icon: Home,
    title: 'Residential Services',
    desc: 'Custom home wiring, panel upgrades, and smart home integrations.',
  },
  {
    icon: GraduationCap,
    title: 'Bishop Kelley',
    desc: 'Campus-wide electrical maintenance and stadium lighting.',
  },
  {
    icon: HardHat,
    title: 'Custom Homes',
    desc: 'Bespoke electrical design for luxury builds.',
  },
  {
    icon: Snowflake,
    title: 'Blue Bell A Taste of Summer',
    desc: 'Commercial equipment wiring and refrigeration power support.',
  },
  {
    icon: Factory,
    title: 'Inserv',
    desc: 'Industrial facility power distribution.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Incredible Pizza',
    desc: 'Entertainment venue lighting and high-load kitchen electrical.',
  },
  {
    icon: ShieldCheck,
    title: 'BA Fire Station #6',
    desc: 'Municipal emergency power systems and secure facility wiring.',
  },
  {
    icon: Wrench,
    title: 'Prestige Roofing & Remodeling',
    desc: 'Integrated electrical solutions for full-scale remodels.',
  },
  {
    icon: Flame,
    title: 'Outdoor Kitchen',
    desc: 'Weatherproof circuitry and ambient landscape lighting.',
  },
  {
    icon: Wind,
    title: 'Commercial RTUs',
    desc: 'Rooftop HVAC unit electrical hookups and safety disconnects.',
  },
  {
    icon: Wine,
    title: 'Aspen Liquor',
    desc: 'Retail lighting design and point-of-sale network wiring.',
  },
  {
    icon: Wine,
    title: "CJ's Wine and Spirits",
    desc: 'Energy-efficient commercial showroom lighting.',
  },
  {
    icon: BookOpen,
    title: 'Owasso First Baptist',
    desc: 'Sanctuary lighting and AV power infrastructure.',
  },
  {
    icon: Building2,
    title: 'Oklahoma Methodist Manor',
    desc: 'Healthcare-compliant residential facility wiring.',
  },
];

interface GalleryState {
  isOpen: boolean;
  name: string;
  description: string;
  images: string[];
  currentIndex: number;
}

const closedGallery: GalleryState = {
  isOpen: false,
  name: '',
  description: '',
  images: [],
  currentIndex: 0,
};

export default function Projects() {
  const [gallery, setGallery] = useState<GalleryState>(closedGallery);

  const openGallery = (project: (typeof featuredProjects)[0]) => {
    setGallery({
      isOpen: true,
      name: project.name,
      description: project.description,
      images: project.images,
      currentIndex: 0,
    });
  };

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
          Our Work
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-text-muted text-lg mb-12 max-w-xl">
          Click any featured project to browse the full image gallery.
        </p>

        {/* Featured bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {featuredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => openGallery(project)}
              className={`${project.span} relative h-80 md:h-96 overflow-hidden group text-left cursor-pointer border border-white/5 hover:border-primary/40 transition-colors duration-300`}
              aria-label={`Open ${project.name} gallery`}
            >
              {/* Background image */}
              <Image
                src={project.cover}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-20 right-4 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Image count badge */}
                <div className="inline-flex items-center gap-1.5 bg-primary/90 px-3 py-1 mb-3">
                  <ExternalLink className="w-3 h-3 text-white" />
                  <span className="text-white text-[10px] font-black tracking-widest uppercase">
                    {project.imageCount} Photos
                  </span>
                </div>

                <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-1">
                  {project.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center gap-2 text-primary text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Gallery</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-text-muted text-xs tracking-[0.3em] uppercase">More Projects</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Icon cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {iconProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="bg-surface border border-white/5 p-6 flex flex-col gap-3 hover:border-primary/20 transition-colors duration-200 group"
              >
                <div className="w-9 h-9 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-white font-black text-sm leading-snug">{project.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{project.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery modal */}
      <GalleryModal
        projectName={gallery.name}
        description={gallery.description}
        images={gallery.images}
        currentIndex={gallery.currentIndex}
        isOpen={gallery.isOpen}
        onClose={() => setGallery(closedGallery)}
        onNavigate={(index) =>
          setGallery((prev) => ({ ...prev, currentIndex: index }))
        }
      />
    </section>
  );
}
