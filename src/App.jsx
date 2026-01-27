import { useEffect, useState } from "react";
import { FaLinkedin, FaBehance, FaInstagram, FaImdb } from "react-icons/fa";
import { imdbProjects } from "./data/imdbData";
import { projects } from "./data/projectsData";
import getProjectAsset from "./utils/getProjectAsset";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [activeTab, setActiveTab] = useState("creative");
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F2F3F5] text-[#1A1A1A] overflow-hidden">

      {/* SOCIALS */}
      <div className="fixed top-6 right-6 z-40">
        <div
          className={`flex items-center gap-6 transition-all duration-300
            ${scrolled ? "text-black" : "text-black/50"}
          `}
        >
        {/* GET IN TOUCH */}
        <a
          href="mailto:keshaw@email.com"
          className={`
            px-4 py-2 text-xs uppercase tracking-[0.3em] rounded-full
            transition-all duration-300
            ${
              scrolled
                ? "text-white border"
                : "border bg-white/70"
            }
          `}
          style={{
            backgroundColor: scrolled ? "#6A5CFF" : "transparent",
            borderColor: "#6A5CFF",
            color: scrolled ? "#ffffff" : "#6A5CFF",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#6A5CFF";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = scrolled ? "#6A5CFF" : "transparent";
            e.currentTarget.style.color = scrolled ? "#ffffff" : "#6A5CFF";
          }}
        >
          Get in touch
        </a>


          {/* ICONS */}
          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://linkedin.com/in/k4keshaw"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`transition-all duration-300 ${
                scrolled ? "text-black" : "text-black/50 hover:text-black"
              }`}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://behance.net/k4keshaw"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              className={`transition-all duration-300 ${
                scrolled ? "text-black" : "text-black/50 hover:text-black"
              }`}
            >
              <FaBehance />
            </a>

            <a
              href="https://www.imdb.com/name/nm8751429"
              target="_blank"
              rel="noreferrer"
              aria-label="IMDb"
              className={`transition-all duration-300 ${
                scrolled ? "text-black" : "text-black/50 hover:text-black"
              }`}
            >
              <FaImdb />
            </a>

            <a
              href="https://instagram.com/k4keshaw"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={`transition-all duration-300 ${
                scrolled ? "text-black" : "text-black/50 hover:text-black"
              }`}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
              
      {/* HERO */}
      <header className="border-b border-black/10 bg-gradient-to-b from-white via-[#F5F6F8] to-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          {/* LEFT — IDENTITY + VISION */}
          <div className="max-w-2xl">
            {/* NAME */}
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black leading-tight">
              Keshaw Singh
            </h1>

            {/* TAGLINE */}
            <p className="mt-4 text-sm italic text-black/60">
              Obsessed with pixels.
            </p>

            {/* VISION */}
            <p className="mt-10 max-w-[38rem] text-xl md:text-2xl leading-snug text-black">
              I design motion systems that turn complex ideas into
              clear, expressive visual experiences.
            </p>

            {/* ABOUT / SCOPE */}
            <p className="mt-6 max-w-[36rem] text-base leading-relaxed text-black/70">
              Motion Designer at{" "}
              <a
                href="https://supra.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium transition-opacity hover:opacity-80"
                style={{ color: "#6A5CFF" }}
              >
                Supra
              </a>
              , creating motion-led videos for products, marketing, and social —
              working across film, gaming, and emerging tech to build scalable
              visual systems using motion, VFX, and 3D.
            </p>
          </div>

          {/* RIGHT — FOCUS AREAS */}
          <div className="pt-10">
            <p className="text-xs uppercase tracking-[0.4em] text-black/40 mb-12">
              Focus Areas
            </p>

            <ul className="space-y-6">
              {[
                "Scalable Motion Design Assets",
                "Motion Design & Visual Systems",
                "Technical / Conceptual Visualization",
                "CGI & VFX Pipelines",
                "FX Simulations (Particles / RBD / Pyro)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6">
                  {/* PURPLE OUTLINE BULLET */}
                  <span
                    className="mt-[7px] h-2 w-2 rounded-full border"
                    style={{ borderColor: "#6A5CFF" }}
                  />

                  {/* TEXT */}
                  <span className="text-base text-black/70 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </header>







      {/* TABS */}
      <div className="sticky top-0 z-30 bg-[#F2F3F5]/90 backdrop-blur border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center gap-12">
          <button
            onClick={() => setActiveTab("creative")}
            className={
              activeTab === "creative"
                ? "font-semibold border-b-2 border-black"
                : "text-black/40"
            }
          >
            Creative / 3D Works
          </button>

          <button
            onClick={() => setActiveTab("film")}
            className={
              activeTab === "film"
                ? "font-semibold border-b-2 border-black"
                : "text-black/40"
            }
          >
            Film Works (IMDb)
          </button>
        </div>
      </div>

      {/* CREATIVE GRID */}
      {activeTab === "creative" && (
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative cursor-pointer overflow-hidden"
            >
              <img
                src={getProjectAsset(project.id, "cover")}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition"
                alt=""
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <p className="text-white font-semibold text-lg text-center px-6">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </main>
      )}

      {/* IMDb GRID */}
      {activeTab === "film" && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {imdbProjects.map((movie, i) => (
              <a
                key={i}
                href={movie.link}
                target="_blank"
                rel="noreferrer"
                className="group block space-y-2"
              >
                {/* Poster */}
                <img
                  src={movie.poster}
                  alt={movie.title}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition"
                />

                {/* Meta */}
                <div className="text-center px-1">
                  {/* Title + Year */}
                  <p className="text-xs font-medium text-black/80 leading-snug">
                    {movie.title}{" "}
                    <span className="text-black/50 font-normal">
                      ({movie.year})
                    </span>
                  </p>

                  {/* Role */}
                  {movie.role && (
                    <p className="text-[11px] text-black/50 mt-0.5">
                      {movie.role}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}



      {/* LIGHTBOX */}
      {activeProject && (
        <Lightbox
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
