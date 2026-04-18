import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, Calendar } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const YEARS = [2021, 2022, 2023, 2024, 2025];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const COVERS = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const GalleryArchive = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          {selectedYear !== null && (
            <button
              onClick={() => setSelectedYear(null)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={16} />
              All years
            </button>
          )}
        </div>

        <header className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">
            {selectedYear === null ? "Our Work Archive" : `Our Work · ${selectedYear}`}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {selectedYear === null
              ? "Five years of cleaner rivers, lakes and communities. Pick a year to explore month by month."
              : "Browse a month to relive the drives, plantations and campaigns from this year."}
          </p>
        </header>

        {selectedYear === null ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {YEARS.map((year, i) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={COVERS[i % COVERS.length]}
                  alt={`Highlights from ${year}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-80">Year</span>
                  <span className="font-serif text-5xl md:text-6xl font-bold mt-1">{year}</span>
                  <span className="mt-3 text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    View 12 months →
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {MONTHS.map((month, i) => (
              <div
                key={month}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-square bg-muted shadow-sm group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                  <img
                    src={COVERS[i % COVERS.length]}
                    alt={`${month} ${selectedYear}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-foreground">{month}</p>
                  <p className="text-xs text-muted-foreground">{selectedYear}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default GalleryArchive;
