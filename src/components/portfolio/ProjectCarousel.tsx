import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
}

const ProjectCarousel = ({ images, alt }: Props) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-[16/10] bg-muted flex items-center justify-center">
        <p className="text-muted-foreground text-sm font-mono">Project Preview Coming Soon</p>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-muted group">
      <img
        src={images[current]}
        alt={`${alt} - screenshot ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />


      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-10"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-4" : "bg-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
