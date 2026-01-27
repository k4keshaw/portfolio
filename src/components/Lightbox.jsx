import { useEffect, useState } from "react";
import getProjectAsset from "../utils/getProjectAsset";

export default function Lightbox({ project, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
        transition-opacity duration-200
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={handleClose}
        className="fixed top-6 right-6 z-50 text-white text-2xl"
      >
        ✕
      </button>

      {/* CENTERED TITLE */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none">
        <h1 className="text-white text-sm md:text-base tracking-widest uppercase">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-white/50 text-xs mt-1">
            {project.subtitle}
          </p>
        )}
      </div>

      {/* SCROLLABLE CONTENT */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-5xl mx-auto px-6 py-32 space-y-10
          max-h-screen overflow-y-auto no-scrollbar
          transition-transform duration-200
          ${visible ? "translate-y-0 scale-100" : "translate-y-4 scale-95"}`}
      >
        {/* VIDEO */}
        {project.vimeoId && (
          <iframe
            src={`https://player.vimeo.com/video/${project.vimeoId}`}
            className="w-full aspect-video rounded-xl"
            loading="lazy"
            allow="autoplay; fullscreen"
          />
        )}

        {/* IMAGES */}
        {Array.from({ length: 10 }).map((_, index) => {
          const imgIndex = index + 1;
          const src = getProjectAsset(project.id, `image-${imgIndex}`);

          return (
            <img
              key={imgIndex}
              src={src}
              loading="lazy"
              className="rounded-xl"
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
