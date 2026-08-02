import { ArrowRight, Compass, LayoutGrid } from "lucide-react";

const getPublicImageUrl = (path: string) => encodeURI(path);

const sitePlanImages = [
  {
    src: "/WhatsApp Image 2026-08-02 at 8.27.31 PM.jpeg",
    title: "Entry Perspective",
    caption: "Warm welcome with strong visual balance.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.27.32 PM.jpeg",
    title: "Courtyard Flow",
    caption: "Open circulation and natural light.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.27.32 PM (1).jpeg",
    title: "Landscape Detail",
    caption: "Outdoor experience shaped with care.",
  },
  {
    src: "/WhatsApp Image 2026-08-02 at 8.27.32 PM (2).jpeg",
    title: "Full Site Vision",
    caption: "A complete concept brought into focus.",
  },
];

const SitePlans = () => {
  return (
    <section
      id="site-plans"
      className="py-16 sm:py-20 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_40%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_55%,_#eef6ff_100%)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_80px_-25px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                <LayoutGrid className="h-4 w-4" />
                Site Plan Showcase
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                A sharper, more immersive view of the project
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                The layout is compact, modern, and image-led so the design story
                feels more premium and less repetitive.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Compass className="h-4 w-4 text-blue-700" />
                  Spatial Flow
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <ArrowRight className="h-4 w-4 text-blue-700" />
                  Visual Clarity
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sitePlanImages.map((image, index) => (
              <div
                key={image.title}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-sm ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={getPublicImageUrl(image.src)}
                  alt={image.title}
                  className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                    index === 0 ? "min-h-[280px]" : "min-h-[220px]"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-white">
                    {image.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitePlans;
