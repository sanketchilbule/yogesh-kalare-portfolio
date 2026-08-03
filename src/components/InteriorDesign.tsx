import { X } from "lucide-react";
import { useState } from "react";

const getPublicImageUrl = (path: string) => encodeURI(path);

const interiorDesignImages = [
  {
    src: "/WhatsApp Image 2026-08-02 at 9.25.24 PM.jpeg",
    title: "Dining & Kitchen",
    caption: "Warm textures and balanced proportions for a calm interior.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 9.25.25 PM.jpeg",
    title: "Living Hall tv unit",
    caption: "An inviting setting with a refined sense of flow.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 9.25.25 PM (1).jpeg",
    title: "Dining & Kitchen",
    caption: "Functionality wrapped in a clean, modern finish.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 9.25.26 PM.jpeg",
    title: "Living Hall tv unit",
    caption: "Soft materials and thoughtful composition for privacy.",
  },
];

const InteriorDesign = () => {
  const [selectedImage, setSelectedImage] = useState<
    null | (typeof interiorDesignImages)[number]
  >(null);

  return (
    <section
      id="interior-design"
      className="border-t border-slate-200 bg-white py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Interior Design
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              Interior perspectives
            </h3>
          </div>
          <p className="hidden text-sm text-slate-500 sm:block">
            Material and mood in focus
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {interiorDesignImages.map((image, index) => (
            <button
              key={image.title}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-100 text-left ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={getPublicImageUrl(image.src)}
                alt={image.title}
                className={`h-full w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105 ${
                  index === 0
                    ? "min-h-[260px] sm:min-h-[320px]"
                    : "min-h-[200px]"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="text-sm font-semibold text-white">
                  {image.title}
                </p>
              </div>
            </button>
          ))}
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
    </section>
  );
};

export default InteriorDesign;
