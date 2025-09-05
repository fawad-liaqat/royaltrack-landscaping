"use client";
import { motion } from "framer-motion";
import HeroStats from "./HeroStats";

export default function AboutRoyal() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <motion.div
            className="about-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              className="about-text"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h2>Your Vision, Our Expertise</h2>
              <p>
                We specialize in creating breathtaking outdoor environments for
                discerning villa owners and private property developers. Our
                comprehensive approach combines artistic vision with technical
                excellence.
              </p>
              <p>
                From concept to completion, we handle every aspect of your
                landscape transformation - swimming pools, outdoor living
                spaces, garden design, and automated systems that enhance your
                lifestyle.
              </p>
              <p>
                Our team of certified professionals brings decades of combined
                experience, ensuring your investment delivers both immediate
                beauty and long-term value.
              </p>
            </motion.div>

            <motion.div
              className="promise-box"
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h4>Our Promise</h4>
              <p>
                Every Royal Track project is backed by our commitment to
                excellence, comprehensive warranties, and ongoing support to
                maintain your investment.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: (
                  <span className="value-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#3b82f6" />
                      <path
                        d="M12 8v4l3 2"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ),
                title: "Premium Quality",
                desc: "We use only the finest materials and proven techniques to ensure lasting beauty and durability.",
              },
              {
                icon: (
                  <span className="value-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#3b82f6" />
                      <path
                        d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="12" r="2" fill="#fff" />
                    </svg>
                  </span>
                ),
                title: "Precision Design",
                desc: "Every project is meticulously planned and executed to meet your exact vision and requirements.",
              },
              {
                icon: (
                  <span className="value-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#3b82f6" />
                      <path
                        d="M12 8v4l3 2"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ),
                title: "Innovation",
                desc: "We stay ahead of trends, bringing cutting-edge solutions and sustainable practices to your property.",
              },
              {
                icon: (
                  <span className="value-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#3b82f6" />
                      <path
                        d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 16v1a3 3 0 0 0 6 0v-1"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ),
                title: "Client-Focused",
                desc: "Your satisfaction is our priority. We work closely with you throughout every phase of the project.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="value-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {value.icon}
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <HeroStats />
      {/* Portfolio section should come after this */}
    </>
  );
}
