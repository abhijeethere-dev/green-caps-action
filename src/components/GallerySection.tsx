import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Tree plantation drive" },
  { src: gallery2, alt: "Lake cleaning volunteers" },
  { src: gallery3, alt: "Awareness campaign rally" },
  { src: gallery4, alt: "Clean river after restoration" },
  { src: gallery5, alt: "Volunteer team after cleanup" },
  { src: gallery6, alt: "Sapling being planted" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Gallery</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Moments from our drives that fuel our mission.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end p-4">
                <span className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary-foreground/70"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
