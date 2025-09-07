"use client";
import { useState } from "react";

export default function SocialWidgets() {
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  const widgetStyle = {
    borderRadius: "50%",
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    transition: "transform 0.2s, boxShadow 0.2s",
    cursor: "pointer",
  };

  const whatsappNumbers = ["+971522485027", "+971552252897"];

  const handleWhatsAppClick = (number: string) => {
    setShowWhatsAppOptions(false); // close dropdown
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        zIndex: 1000,
      }}
    >
      {/* WhatsApp Main Icon */}
      <div style={{ position: "relative" }}>
        <div
          style={{ ...widgetStyle, background: "white", color: "#25D366" }}
          aria-label="WhatsApp"
          onClick={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
          }}
        >
          {/* WhatsApp SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M16 7.5C11.26 7.5 7.5 11.26 7.5 16C7.5 17.37 7.87 18.67 8.56 19.81L7.5 24.5L12.19 23.44C13.33 24.13 14.63 24.5 16 24.5C20.74 24.5 24.5 20.74 24.5 16C24.5 11.26 20.74 7.5 16 7.5ZM16 22.5C14.87 22.5 13.77 22.19 12.81 21.62L12.5 21.44L9.5 22.06L10.12 19.06L9.94 18.75C9.37 17.79 9.06 16.69 9.06 15.56C9.06 12.13 12.13 9.06 15.56 9.06C18.99 9.06 22.06 12.13 22.06 15.56C22.06 18.99 18.99 22.06 15.56 22.06H16Z"
              fill="white"
            />
            <path
              d="M19.5 17.5C19.33 17.5 18.67 17.5 18.5 17.5C18.33 17.5 18.17 17.67 18.08 17.83C17.92 18.08 17.5 18.67 17.33 18.83C17.17 19 16.92 19 16.75 18.92C16.58 18.83 16.08 18.67 15.5 18.17C14.92 17.67 14.5 17.08 14.42 16.92C14.33 16.75 14.33 16.5 14.5 16.33C14.67 16.17 14.83 16 15 15.83C15.17 15.67 15.25 15.5 15.33 15.33C15.42 15.17 15.33 15 15.25 14.83C15.17 14.67 14.67 13.67 14.5 13.33C14.33 13 14.17 13 14 13C13.83 13 13.67 13 13.5 13C13.33 13 13.17 13.08 13.08 13.17C12.92 13.33 12.5 13.83 12.5 14.5C12.5 15.17 13.08 16.08 13.17 16.25C13.25 16.42 14.08 17.67 15.33 18.67C16.58 19.67 17.83 20.5 18 20.58C18.17 20.67 19.08 21.25 19.75 21.25C20.42 21.25 20.92 20.83 21.08 20.67C21.17 20.58 21.25 20.42 21.25 20.25C21.25 20.08 21.25 19.92 21.25 19.75C21.25 19.58 21.25 19.42 21.17 19.25C21.08 19.08 20.67 18.67 20.5 18.5C20.33 18.33 20.17 18.17 20 18.08C19.83 18 19.67 17.83 19.5 17.5Z"
              fill="#25D366"
            />
          </svg>
        </div>

        {/* WhatsApp Options Dropdown */}
        {showWhatsAppOptions && (
          <div
            style={{
              position: "absolute",
              bottom: "70px",
              right: "0",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              padding: "0.5rem",
              gap: "0.5rem",
            }}
          >
            {whatsappNumbers.map((num) => (
              <button
                key={num}
                onClick={() => handleWhatsAppClick(num)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#25D366",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {num}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Instagram Icon */}
      <a
        href="https://instagram.com/royaltracklandscaping"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...widgetStyle, background: "white", color: "#E1306C" }}
        aria-label="Instagram"
      >
        {/* Instagram SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="8" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="32"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fd1d1d" />
              <stop offset="0.5" stopColor="#833ab4" />
              <stop offset="1" stopColor="#fcb045" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="2" />
          <circle cx="16" cy="16" r="4" stroke="white" strokeWidth="2" />
          <circle cx="22" cy="10" r="1.5" fill="white" />
        </svg>
      </a>

      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com/share/19g7g18gcn/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...widgetStyle, background: "white", color: "#1877F2" }}
        aria-label="Facebook"
      >
        {/* Facebook SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1877F2"
        >
          <path
            d="M22.675 0H1.325C.593 0 0 .593 0 
            1.326v21.348C0 23.407.593 24 1.325 
            24h11.495v-9.294H9.692V11.41h3.128V8.797c0-3.1 
            1.893-4.788 4.659-4.788 1.325 0 2.463.099 
            2.794.143v3.24h-1.918c-1.504 
            0-1.796.716-1.796 1.765v2.312h3.587l-.467 
            3.296h-3.12V24h6.116c.73 
            0 1.324-.593 1.324-1.326V1.326C24 
            .593 23.407 0 22.675 0z"
          />
        </svg>
      </a>
    </div>
  );
}
