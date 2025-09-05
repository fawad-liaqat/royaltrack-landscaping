import React from "react";
import { motion } from "framer-motion";

// SVG icons for stats
const icons = [
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>,
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="7" />
    <path d="M12 15v6" />
    <path d="M9 21h6" />
  </svg>,
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
  </svg>,
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9", label: "Client Rating" },
];

export default function HeroStats() {
  return (
    <section
      className="hero-stats-section"
      style={{
        background: "#fff",
        color: "#174c3c",
        padding: "48px 0 40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "180px",
        borderRadius: "0 0 32px 32px",
        boxShadow: "0 4px 32px rgba(23,76,60,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "64px",
          width: "100%",
          maxWidth: "900px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            style={{
              textAlign: "center",
              background: "rgba(255,255,255,0.7)",
              borderRadius: "18px",
              padding: "24px 32px",
              boxShadow: "0 2px 12px rgba(23,76,60,0.08)",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.13, boxShadow: "0 8px 32px #4dd0e1" }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
          >
            <motion.div
              style={{ marginBottom: "10px" }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
            >
              {icons[i]}
            </motion.div>
            <span
              style={{
                fontSize: "2.3rem",
                fontWeight: "bold",
                display: "block",
                color: "#174c3c",
                textShadow: "0 2px 8px #b2ebf2",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                marginTop: "8px",
                color: "#1976d2",
                textShadow: "0 2px 8px #e0f7fa",
                fontSize: "1.08rem",
                display: "block",
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
