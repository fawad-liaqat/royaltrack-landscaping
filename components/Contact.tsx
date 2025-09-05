"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      setMessage(
        "Thank you! We'll contact you within 24 hours to discuss your project."
      );
      form.reset();
    } catch (err) {
      setState("error");
      setMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Let's Create Your <span className="gradient-text">Dream Space</span>
          </h2>
          <p className="section-description">
            Ready to transform your property? Contact us for a free
            consultation, personalized quote, or to request a site visit.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-subtitle">Get In Touch</h3>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+971 52 248 5027</p>
                <p>+971 55 225 2897</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>Royaltrack432@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"> 📍</div>
              <div className="contact-details">
                <h4>Office</h4>
                <p>New Shahama Abu Dhabi</p>
                <p>By Appointment Only</p>
                <a
                  href="#contact"
                  className="btn btn-primary"
                  style={{
                    marginTop: "1rem",
                    display: "inline-block",
                    background: "#3b82f6",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Book Appointment
                </a>
              </div>
            </div>

            <div className="emergency-contact">
              <h4>Emergency Services</h4>
              <p>24/7 support for irrigation and pool system emergencies</p>
              <a className="btn btn-secondary" href="tel:+971 55 225 2897">
                Emergency Hotline
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-card">
              <div className="form-header">
                <h3 className="form-title">Request Your Free Consultation</h3>
                <p className="form-description">
                  Tell us about your project and we'll provide a detailed quote
                  within 24 hours.
                </p>
              </div>

              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option value="swimming-pool">
                      Swimming Pool Construction
                    </option>
                    <option value="jacuzzi">Jacuzzi & Hot Tubs</option>
                    <option value="landscaping">Hard & Soft Landscaping</option>
                    <option value="irrigation">Automatic Irrigation</option>
                    <option value="pergolas">Aluminum & Wooden Pergolas</option>
                    <option value="gazebos">Outdoor Gazebos</option>
                    <option value="barbecue">Barbecue & Bar Counters</option>
                    <option value="interior">Interior Works</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, property size, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-hero btn-large btn-full"
                  disabled={state === "submitting"}
                  style={{
                    background: "#3b82f6",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  {state === "submitting" ? "Sending..." : "Send Request"}
                  <span
                    className="icon"
                    style={{ display: "inline-block", verticalAlign: "middle" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M2 21l21-9-21-9v7l15 2-15 2z" fill="#fff" />
                    </svg>
                  </span>
                </button>
                {/* ...existing code... */}
                {state !== "idle" && (
                  <p
                    className="form-note"
                    role="status"
                    style={{
                      textAlign: "center",
                      color: "#3b82f6",
                      fontWeight: 500,
                    }}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
