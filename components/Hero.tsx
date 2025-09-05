"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Star } from "lucide-react";

export default function HeroRoyal() {
  return (
    <section className="hero relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background */}
      <div className="hero-background">
        <Image
          src="/Images/Background.jpg"
          alt="Luxury Pool at Royal Track"
          fill
          priority
          className="hero-img object-cover"
          style={{ objectPosition: "center -10%" }}
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto hero-content z-10 text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className="hero-badge tracking-wide uppercase text-white/90 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Luxury Outdoor Living
        </motion.span>

        <motion.h1
          className="hero-title text-3xl md:text-5xl font-extrabold mt-2"
          style={{
            fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
            padding: "0.5rem 0",
            display: "inline-block",
            letterSpacing: "0.04em",
            lineHeight: 1.1,
            color: "#fff",
            textShadow: "0 4px 24px rgba(23,76,60,0.55)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Transform Your{" "}
          <span
            style={{
              color: "#FFC857", // Gold/yellow for "Villa Dreams"
              textShadow: "0 2px 8px #174c3c",
            }}
          >
            Villa Dreams
          </span>{" "}
          Into Reality
        </motion.h1>

        <motion.p
          className="hero-description font-bold text-white/90 mt-4 max-w-2xl mx-auto text-base md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          From luxury swimming pools to stunning outdoor spaces, we create
          exceptional landscapes for discerning villa and property owners.
        </motion.p>
      </motion.div>
    </section>
  );
}
