"use client";
import React, { useState } from "react";
import styles from "./Portfolio.module.css"; // Keep your CSS file

const projects = [
  {
    title: "Swimming Pool Construction",
    category: "Swimming Pools",
    image: "/Images/Swimming Pool.jpg",
  },
  {
    title: "Jacuzzi & Hot Tubs",
    category: "Swimming Pools",
    image: "/Images/jacuzzi 2.jpg",
  },
  {
    title: "Landscaping",
    category: "Outdoor Projects",
    image: "/Images/outdoor.jpg",
  },
  {
    title: "Automatic Irrigation",
    category: "Outdoor Projects",
    video: "/Videos/irrigationss.mp4", // ✅ Video project
  },
  {
    title: "Gazebos & Pergolas",
    category: "Outdoor Projects",
    image: "/Images/Pergolas.jpg",
  },
  {
    title: "Barbecue & Bar Counters",
    category: "Barbecue & Bar Counters",
    image: "/Images/barbequeee.jpg",
  },
  {
    title: "Interior Works",
    category: "Other",
    image: "/Images/interior works.jpg",
  },
  {
    title: "Renovations",
    category: "Other",
    image: "/Images/Rennovationss.jpg",
  },
];

const categories = [
  { label: "All Projects", value: "All" },
  { label: "Swimming Pools", value: "Swimming Pools" },
  { label: "Landscape", value: "Outdoor Projects" },
  { label: "Renovations", value: "Other" },
  { label: "Outdoor Living", value: "Outdoor Projects" },
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
        </div>
        <div
          className="portfolio-categories"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`portfolio-category-btn${
                selectedCategory === cat.value ? " active" : ""
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="portfolio-project-card"
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                padding: "1rem",
                textAlign: "center",
                transition: "transform 0.4s cubic-bezier(.4,2,.3,1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "transform 0.4s cubic-bezier(.4,2,.3,1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "transform 0.4s cubic-bezier(.4,2,.3,1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              )}
              <h3 style={{ margin: "1rem 0 0.5rem" }}>{project.title}</h3>
              <span style={{ color: "#888" }}>{project.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
