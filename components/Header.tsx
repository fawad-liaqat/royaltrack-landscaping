"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleSmooth = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = (e.currentTarget.getAttribute("href") ?? "").replace("/", "");
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Image
              src="/Images/FINAL LOGO.jpg"
              alt="Royal Track Landscaping And General Contracting LLC"
              width={96}
              height={96}
              className="logo-img"
            />
            <div
              className="logo-text"
              style={{
                minWidth: "220px",
                maxWidth: "100%",
                overflow: "visible",
                whiteSpace: "normal",
                textOverflow: "clip",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <h1
                className="company-name"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.1,
                  textOverflow: "clip",
                  overflow: "visible",
                  whiteSpace: "normal",
                }}
              >
                Royal Track
              </h1>
              <p
                className="company-subtitle"
                style={{
                  fontSize: "0.95rem",
                  margin: 0,
                  color: "#3a3a3a",
                  textOverflow: "clip",
                  overflow: "visible",
                  whiteSpace: "normal",
                }}
              >
                Landscaping And General Contracting LLC
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link href="#home" className="nav-link" onClick={handleSmooth}>
              Home
            </Link>
            <Link href="#about" className="nav-link" onClick={handleSmooth}>
              About
            </Link>
            <Link href="#services" className="nav-link" onClick={handleSmooth}>
              Services
            </Link>
            <Link href="#portfolio" className="nav-link" onClick={handleSmooth}>
              Portfolio
            </Link>
            <Link href="#contact" className="nav-link" onClick={handleSmooth}>
              Contact
            </Link>
          </nav>

          {/* Contact & CTA */}
          <div className="header-cta">
            <a href="#contact" className="btn btn-hero" onClick={handleSmooth}>
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="menu-icon">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? "active" : ""}`} id="mobileMenu">
          <nav className="mobile-nav">
            <Link
              href="#home"
              className="mobile-nav-link"
              onClick={handleSmooth}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="mobile-nav-link"
              onClick={handleSmooth}
            >
              About
            </Link>
            <Link
              href="#services"
              className="mobile-nav-link"
              onClick={handleSmooth}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="mobile-nav-link"
              onClick={handleSmooth}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="mobile-nav-link"
              onClick={handleSmooth}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
