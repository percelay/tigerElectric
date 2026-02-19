'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

interface GalleryModalProps {
  projectName: string;
  description: string;
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryModal({
  projectName,
  description,
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryModalProps) {
  const handlePrev = useCallback(() => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/98 flex flex-col">
      {/* Header bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-surface/60 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
            <Images className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-black text-base leading-tight">{projectName}</h3>
            <p className="text-text-muted text-xs">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-text-muted text-sm font-mono">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(images.length).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-white/20 flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main image area */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden min-h-0">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 w-12 h-12 bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image container */}
        <div className="relative w-full h-full px-16">
          <Image
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${projectName} — Photo ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 85vw"
            priority
          />
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 w-12 h-12 bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex-shrink-0 border-t border-white/10 py-3 px-4 bg-surface/40">
        <div className="thumbnail-strip overflow-x-auto">
          <div className="flex gap-2 w-max mx-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                className={`relative w-14 h-14 flex-shrink-0 overflow-hidden transition-all duration-200 ${
                  i === currentIndex
                    ? 'ring-2 ring-primary ring-offset-1 ring-offset-black opacity-100'
                    : 'opacity-40 hover:opacity-80'
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="flex-shrink-0 flex items-center justify-center gap-6 py-2 bg-black/40">
        <span className="text-text-muted text-[10px] tracking-widest uppercase">
          ← → Arrow keys to navigate · Esc to close
        </span>
      </div>
    </div>
  );
}
