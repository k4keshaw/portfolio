/* ================= IMPORTS ================= */

import profile from "./assets/profile.jpg";
import { FaLinkedin, FaBehance, FaInstagram, FaImdb } from "react-icons/fa";
import { motion } from "framer-motion";

// IMDb posters (ALL imports must be here)
import wildcards from "./assets/imdb/wildcards.jpg";
import killTheGirl from "./assets/imdb/kill-the-girl.jpg";
import europa from "./assets/imdb/europa.jpg";
import blackHeat from "./assets/imdb/black-heat.jpg";
import tilDeath from "./assets/imdb/til-death-do-us-part.jpg";
import callHerKing from "./assets/imdb/call-her-king.jpg";
import murderAnyone from "./assets/imdb/murder-anyone.jpg";
import hotSeat from "./assets/imdb/hot-seat.jpg";
import aDayToDie from "./assets/imdb/a-day-to-die.jpg";
import deathRider from "./assets/imdb/death-rider-house-of-vampires.jpg";
import theCall from "./assets/imdb/the-call.jpg";
import hellOnBorder from "./assets/imdb/hell-on-the-border.jpg";
import atone from "./assets/imdb/atone.jpg";
import finalWish from "./assets/imdb/the-final-wish.jpg";
import riverRunsRed from "./assets/imdb/river-runs-red.jpg";
import finalShot from "./assets/imdb/final-shot.jpg";
import shadowEffect from "./assets/imdb/the-shadow-effect.jpg";
import prayerNeverFails from "./assets/imdb/prayer-never-fails.jpg";
import operator from "./assets/imdb/operator.jpg";
import unknownCaller from "./assets/imdb/unknown-caller.jpg";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ================= IMDb DATA ================= */

const imdbProjects = [
  {
    title: "Wildcards",
    year: 2025,
    role: "Visual Effects Supervisor",
    poster: wildcards,
    link: "https://www.imdb.com/title/tt28160373/",
    status: "Completed"
  },
  {
    title: "Kill the Girl",
    year: 2025,
    role: "Visual Effects Artist",
    poster: killTheGirl,
    link: "https://www.imdb.com/title/tt29721376/",
    status: "Post-production"
  },
  {
    title: "Europa",
    year: 2024,
    role: "Visual Effects Artist",
    poster: europa,
    link: "https://www.imdb.com/title/tt28452306/",
    status: "Short"
  },
  {
    title: "Black Heat",
    year: 2024,
    role: "Visual Effects Supervisor",
    poster: blackHeat,
    link: "https://www.imdb.com/title/tt1942818/"
  },
  {
    title: "Til Death Do Us Part",
    year: 2023,
    role: "Visual Effects Artist",
    poster: tilDeath,
    link: "https://www.imdb.com/title/tt27047448/"
  },
  {
    title: "Call Her King",
    year: 2022,
    role: "VFX Supervisor",
    poster: callHerKing,
    link: "https://www.imdb.com/title/tt27846110/"
  },
  {
    title: "Murder, Anyone?",
    year: 2022,
    role: "VFX Consultant",
    poster: murderAnyone,
    link: "https://www.imdb.com/title/tt13556744/"
  },
  {
    title: "Hot Seat",
    year: 2022,
    role: "Compositor",
    poster: hotSeat,
    link: "https://www.imdb.com/title/tt15690300/"
  },
  {
    title: "A Day to Die",
    year: 2022,
    role: "VFX Producer & Supervisor",
    poster: aDayToDie,
    link: "https://www.imdb.com/title/tt14412366/"
  },
  {
    title: "Death Rider in the House of Vampires",
    year: 2021,
    role: "VFX Artist",
    poster: deathRider,
    link: "https://www.imdb.com/title/tt11505680/"
  },
  {
    title: "The Call",
    year: 2020,
    role: "VFX Artist",
    poster: theCall,
    link: "https://www.imdb.com/title/tt12971924/"
  },
  {
    title: "Hell on the Border",
    year: 2019,
    role: "VFX Artist",
    poster: hellOnBorder,
    link: "https://www.imdb.com/title/tt8652584/"
  },
  {
    title: "Atone",
    year: 2019,
    role: "VFX Supervisor",
    poster: atone,
    link: "https://www.imdb.com/title/tt5531298/"
  },
  {
    title: "The Final Wish",
    year: 2018,
    role: "VFX Artist",
    poster: finalWish,
    link: "https://www.imdb.com/title/tt9109306/"
  },
  {
    title: "River Runs Red",
    year: 2018,
    role: "VFX Artist",
    poster: riverRunsRed,
    link: "https://www.imdb.com/title/tt5843780/"
  },
  {
    title: "Final Shot",
    year: 2018,
    role: "VFX Artist",
    poster: finalShot,
    link: "https://www.imdb.com/title/tt5867226/"
  },
  {
    title: "The Shadow Effect",
    year: 2017,
    role: "VFX Artist",
    poster: shadowEffect,
    link: "https://www.imdb.com/title/tt5044656/"
  },
  {
    title: "Prayer Never Fails",
    year: 2016,
    role: "VFX Artist",
    poster: prayerNeverFails,
    link: "https://www.imdb.com/title/tt4575782/"
  },
  {
    title: "Operator",
    year: 2015,
    role: "VFX Artist",
    poster: operator,
    link: "https://www.imdb.com/title/tt3849692/"
  },
  {
    title: "Unknown Caller",
    year: 2014,
    role: "Compositor / Roto Artist",
    poster: unknownCaller,
    link: "https://www.imdb.com/title/tt3384870/"
  }
];


/* ================= APP ================= */

export default function App() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="max-w-3xl text-center">

            {/* Profile */}
            <motion.img
              src={profile}
              alt="Keshaw Singh"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-8"
              variants={item}
              whileHover={{ scale: 1.05 }}
            />

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight"
              variants={item}
            >
              Keshaw Singh
            </motion.h1>

            {/* Role */}
            <motion.p
              className="mt-3 text-sm md:text-base uppercase tracking-widest text-gray-500"
              variants={item}
            >
              Motion Design · VFX · AI Visuals
            </motion.p>

            {/* Summary */}
            <motion.p
              className="mt-6 max-w-xl text-gray-600 text-base md:text-lg leading-relaxed"
              variants={item}
            >
              <span className="block">
                Creating cinematic visuals for film, brands, and emerging tech.
              </span>
              <span className="block mt-2 text-lg md:text-xl font-semibold text-gray-700">
                Motion design, VFX, 3D, and AI-driven workflows.
              </span>
            </motion.p>


            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-6"
              variants={item}
            >
              <a
                href="#film-credits"
                className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
              >
                View Film Credits
              </a>

              <a
                href="mailto:k4keshaw@gmail.com"
                className="px-6 py-3 rounded-full
                          border border-gray-900
                          text-sm font-semibold text-gray-900
                          hover:bg-gray-900 hover:text-white
                          transition"
              >
                Get in touch
              </a>
            </motion.div>


            {/* Socials */}
            <motion.div
              className="mt-10 flex justify-center gap-6 text-xl text-gray-500"
              variants={item}
            >
              <a href="https://linkedin.com/in/k4keshaw" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://behance.net/k4keshaw" target="_blank" rel="noreferrer"><FaBehance /></a>
              <a href="https://www.imdb.com/name/nm8751429" target="_blank" rel="noreferrer"><FaImdb /></a>
              <a href="https://instagram.com/k4keshaw" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </motion.div>

          </div>
        </motion.section>


      {/* ================= IMDb ================= */}
      
      <section className="py-24 px-6">
        <section id="film-credits" className="py-24 px-6"></section>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Film Credits <span className="text-gray-400">(IMDb)</span>
          </h2>
          <p className="mt-4 text-gray-600">Selected film & visual effects work</p>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {imdbProjects.map((movie, i) => (
              <motion.a
                key={i}
                href={movie.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border rounded-lg overflow-hidden bg-white hover:shadow-md transition cursor-pointer"
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >

                {/* Poster */}
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />

                {/* Info */}
                <div className="p-3 text-left">
                  <h3 className="font-semibold text-xs leading-tight">
                    {movie.title}
                  </h3>

                  <p className="text-[11px] text-gray-400">
                    {movie.year}
                  </p>

                  {/* Role Badge */}
                  {movie.status && (
                    <p className="text-[10px] text-gray-400 mt-1 italic">
                      {movie.status}
                    </p>
                  )}
                <p className="mt-2 text-[11px] font-semibold text-gray-900 tracking-wide">
                  {movie.role}
                </p>

                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
