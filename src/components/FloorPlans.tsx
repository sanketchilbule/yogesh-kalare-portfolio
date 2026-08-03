import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const getPublicImageUrl = (path: string) => encodeURI(path);

const floorPlanningImages = [
  {
    src: "/WhatsApp Image 2026-08-02 at 8.30.19 PM.jpeg",
    title: "Farmhouse Plan",
    caption: "Open-plan flow with relaxed proportions.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.30.19 PM (1).jpeg",
    title: "Ground Floor",
    caption: "Functional circulation and storage clarity.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.30.20 PM.jpeg",
    title: "First Floor",
    caption: "A calm and private retreat concept.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.30.20 PM (1).jpeg",
    title: "Roof Floor",
    caption: "Practical planning with clean service lines.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.30.20 PM (2).jpeg",
    title: "Bagde's Floor plan",
    caption: "Dining space with a strong visual anchor.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.30.21 PM.jpeg",
    title: "Floor Plan",
    caption: "Fluid movement between key spaces.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.30.21 PM (1).jpeg",
    title: "Floor Plan",
    caption: "A complete planning overview in one frame.",
  },
];

const structuralDesignImages = [
  {
    src: "/WhatsApp Image 2026-08-02 at 8.36.58 PM.jpeg",
    title: "Footing Detail",
    caption: "Load-bearing elements coordinated with clarity and precision.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.36.59 PM.jpeg",
    title: "Beam Detail",
    caption:
      "Detailed reinforcement and member coordination for construction readiness.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.36.59 PM (1).jpeg",
    title: "Staircase Detail",
    caption:
      "Support layout and foundation logic developed for structural stability.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.36.59 PM (2).jpeg",
    title: "Foundation Detail",
    caption:
      "A cohesive structural view covering foundation logic and support clarity.",
  },
];

const FloorPlans = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<
    null | (typeof floorPlanningImages)[number]
  >(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % floorPlanningImages.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  const showPrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + floorPlanningImages.length) % floorPlanningImages.length,
    );
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % floorPlanningImages.length);
  };

  return (
    <section className="bg-slate-50 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Floor Planning
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              Planning studies
            </h3>
          </div>
          <p className="hidden text-sm text-slate-500 sm:block">
            Select a view to explore
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] sm:p-3">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img
                src={getPublicImageUrl(floorPlanningImages[activeIndex].src)}
                alt={floorPlanningImages[activeIndex].title}
                className="h-[300px] w-full cursor-pointer object-cover sm:h-[400px]"
                loading="lazy"
                onClick={() =>
                  setSelectedImage(floorPlanningImages[activeIndex])
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 sm:p-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-200">
                    Featured view
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-white">
                    {floorPlanningImages[activeIndex].title}
                  </h4>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={showPrev}
                    className="rounded-full border border-white/40 bg-white/85 p-2 text-slate-800 shadow-md transition hover:bg-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={showNext}
                    className="rounded-full border border-white/40 bg-white/85 p-2 text-slate-800 shadow-md transition hover:bg-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-3 sm:p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-700">
                  Collection
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A curated set of planning references focused on flow, privacy,
                  and spatial clarity.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {floorPlanningImages.map((image, index) => (
                  <button
                    key={image.title}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-3 rounded-[0.95rem] border p-2 text-left transition ${
                      index === activeIndex
                        ? "border-blue-700 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[0.7rem]">
                      <img
                        src={getPublicImageUrl(image.src)}
                        alt={image.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {image.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {index + 1}. {image.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-5xl rounded-[1.5rem] bg-white p-3 shadow-2xl sm:p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-800 shadow-sm transition hover:bg-white"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={getPublicImageUrl(selectedImage.src)}
              alt={selectedImage.title}
              className="max-h-[80vh] w-full rounded-[1rem] object-contain"
            />
            <div className="mt-3 px-1">
              <p className="text-lg font-semibold text-slate-900">
                {selectedImage.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="border-t border-slate-200 bg-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                Structural Design
              </p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">
                Structural details
              </h3>
            </div>
            <p className="hidden text-sm text-slate-500 sm:block">
              Detail-focused references
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-2 sm:p-3">
            <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img
                  src={getPublicImageUrl(structuralDesignImages[0].src)}
                  alt={structuralDesignImages[0].title}
                  className="h-[260px] w-full cursor-pointer object-cover sm:h-[340px]"
                  loading="lazy"
                  onClick={() => setSelectedImage(structuralDesignImages[0])}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-200">
                    Featured detail
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {structuralDesignImages[0].title}
                  </p>
                </div>
              </div>

              <div className="grid gap-2">
                {structuralDesignImages.slice(1).map((image) => (
                  <button
                    key={image.title}
                    onClick={() => setSelectedImage(image)}
                    className="flex items-center gap-3 rounded-[1rem] border border-slate-200 bg-white p-2 text-left transition hover:border-blue-300"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[0.8rem]">
                      <img
                        src={getPublicImageUrl(image.src)}
                        alt={image.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {image.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {image.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FloorPlans;
