"use client";

import { image } from "framer-motion/client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Swimming Pool Construction",
    description:
      "Custom-designed luxury pools that become the centerpiece of your outdoor space",
    features: [
      "Custom Design",
      "Infinity Pools",
      "Pool Lighting",
      "Water Features",
    ],
    image: "/Images/Swimming Pool.jpg",
  },
  {
    title: "Landscaping",
    description: "Complete garden transformations",
    features: ["Paving & Decking", "Planting Design", "Lighting"],
    image: "/Images/service-landscaping.jpg",
  },
  {
    title: "Automatic Irrigation",
    description: "Smart water-efficient systems",
    features: ["Drip Lines", "Sprinklers", "Controllers"],
    image: "/Images/Irrigation.jpg",
    video: "/Videos/irrigation.mp4",
  },
  {
    title: "Gazebos & Pergolas",
    description: "Shade structures that elevate your outdoors",
    features: ["Custom Sizes", "Motorized Louvers"],
    image: "/Images/Gazebo-Pergolas.jpg",
  },
  {
    title: "Barbecue & Bar Counters",
    description: "Outdoor kitchens and counters",
    features: ["Grills", "Sinks", "Stone Finishes"],
    image: "/Images/barbeque.jpg",
  },
  {
    title: "Interior Works",
    description: "Select interior enhancements",
    features: ["Feature Walls", "Flooring"],
    image: "/Images/interior works.jpg",
  },
  {
    title: "Renovations",
    description: "Comprehensive villa upgrades",
    features: ["Layout Reworks", "Premium Finishes"],
    image: "/Images/reno.jpg",
  },
];

export default function Services({
  onPortfolioClick,
}: {
  onPortfolioClick?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Try forcing video autoplay
    if (services[active].video && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked, try again muted
          videoRef.current!.muted = true;
          videoRef.current!.play();
        });
      }
    }
  }, [active]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActive((prev) => (prev === 0 ? services.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setActive((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Swipe/touch logic
  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }
  function handleTouchMove(e: React.TouchEvent) {
    touchEndX = e.touches[0].clientX;
  }
  function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
      setActive((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    } else if (touchEndX - touchStartX > 50) {
      setActive((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    }
    touchStartX = 0;
    touchEndX = 0;
  }

  function goLeft() {
    setActive((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }
  function goRight() {
    setActive((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }

  const s = services[active];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our Premium <span className="gradient-text">Services</span>
          </h2>
        </div>

        <div
          className="featured-service-slider"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "2rem",
            position: "relative",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop navigation arrows */}
          <button
            className="service-arrow service-arrow-left"
            aria-label="Previous Service"
            onClick={goLeft}
            style={{
              fontSize: "2rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            tabIndex={-1}
          >
            &#8592;
          </button>

          {/* Fixed frame wrapper */}
          <div
            className="service-image"
            style={{
              width: "100%",
              maxWidth: "500px",
              aspectRatio: "1/1",
              overflow: "hidden",
              borderRadius: "12px",
              flexShrink: 0,
              background: "#f5f5f5",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {s.video ? (
              <video
                ref={videoRef}
                src={s.video}
                autoPlay
                loop
                muted
                playsInline
                className="service-img responsive-media"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
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
              <Image
                src={s.image ?? "/Images/default-service.jpg"}
                alt={s.title}
                width={500}
                height={500}
                className="service-img responsive-media"
                style={{
                  objectFit: "cover",
                  borderRadius: "12px",
                  width: "100%",
                  height: "100%",
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
            {[
              "Swimming Pool Construction",
              "Landscaping",
              "Gazebos & Pergolas",
              "Jacuzzi & Hot Tubs",
            ].includes(s.title) && (
              <div className="service-badge">Most Popular</div>
            )}
          </div>

          {/* Description stays fixed */}
          <div className="service-content" style={{ maxWidth: "500px" }}>
            <div className="service-header">
              {/* No icon displayed */}
              <h3 className="service-title">{s.title}</h3>
            </div>
            <p className="service-description">{s.description}</p>
            <div className="service-features">
              {s.features.map((f) => (
                <div key={f} className="feature">
                  • {f}
                </div>
              ))}
            </div>
            <a className="btn btn-hero" href="#contact">
              Learn More
            </a>
          </div>
        </div>

        <button
          className="service-arrow service-arrow-right"
          aria-label="Next Service"
          onClick={goRight}
          style={{
            fontSize: "2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          tabIndex={-1}
        >
          &#8594;
        </button>

        <div className="services-grid" style={{ marginTop: "2rem" }}>
          {services.map((item, i) => (
            <button
              key={item.title}
              className={`service-item ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              style={{
                transition: "transform 0.4s cubic-bezier(.4,2,.3,1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {/* No icon displayed */}
              <p className="service-grid-title">{item.title}</p>
            </button>
          ))}
        </div>

        <div className="services-cta">
          <h3 className="cta-title">Ready to Transform Your Property?</h3>
          <p className="cta-description">
            Get a personalized consultation and detailed quote for your dream
            landscape project
          </p>
          <div className="cta-buttons">
            <a className="btn btn-hero btn-large" href="#contact">
              Schedule Consultation
            </a>
            <a
              className="btn btn-outline btn-large"
              href="#portfolio"
              onClick={onPortfolioClick}
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
