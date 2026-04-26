"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const timelyUrl = "https://cutsbyharis.setmore.com/haris";
  const mapsUrl = "https://maps.google.com?q=Aziz Barbershop";
  const phone = "+16394141668";
  const instagram = "https://instagram.com/cutsbyharis";

  const sections = ["home", "services", "about", "gallery", "reviews", "booking", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      name: "Haircut",
      price: "$35+",
      desc: "Clean, tailored haircut with sharp finishing details.",
    },
    {
      name: "Skin Fade",
      price: "$38+",
      desc: "Smooth blend with crisp lines and a modern premium look.",
    },
    {
      name: "Beard Trim",
      price: "$15+",
      desc: "Precise shaping and cleanup for a polished finish.",
    },
    {
      name: "Haircut + Beard",
      price: "$50+",
      desc: "Complete grooming package for a fresh confident style.",
    },
  ];

  const reviews = [
    {
      name: "Michael R.",
      text: "Best fade I’ve had in a long time. Clean shop, professional service, and attention to detail.",
    },
    {
      name: "Daniel T.",
      text: "Really impressed with the quality and the atmosphere. Everything felt sharp and premium.",
    },
    {
      name: "Chris A.",
      text: "Great haircut, clean beard work, and easy to book. Definitely coming back.",
    },
  ];

  const videos = [
    "/gallery/cut1.mp4",
    "/gallery/cut2.mp4",
    "/gallery/cut3.mp4",
    "/gallery/cut4.mp4",
  ];

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".reveal, .slide-left, .slide-right");

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.forEach((el) => animationObserver.observe(el));

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 140;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setBookingOpen(false);
        setMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEsc);

    return () => {
      animationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = bookingOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  const navLabel = (id) => {
    if (id === "booking") return "Book";
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main id="home" className="min-h-screen bg-[#050505] text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .slide-left.revealed {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .slide-right.revealed {
          opacity: 1;
          transform: translateX(0);
        }

        .reveal-delay-1 {
          transition-delay: 0.1s;
        }

        .reveal-delay-2 {
          transition-delay: 0.2s;
        }

        .reveal-delay-3 {
          transition-delay: 0.3s;
        }

        .reveal-delay-4 {
          transition-delay: 0.4s;
        }
      `}</style>

      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#d4a63f]/25 bg-[#070707] shadow-[0_0_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#d4a63f]/80">
                  Timely Booking
                </p>
                <h3 className="text-lg font-semibold text-white">
                  Book your appointment
                </h3>
              </div>

              <button
                onClick={() => setBookingOpen(false)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-[#d4a63f] hover:text-[#d4a63f]"
              >
                Close
              </button>
            </div>

            <iframe
              src={timelyUrl}
              title="Timely Booking"
              className="h-[calc(85vh-73px)] w-full bg-white"
              style={{ border: 0 }}
            />
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-5 md:px-8 md:py-6">
          <h1 className="text-xl font-black tracking-[0.22em] text-[#d4a63f] md:text-2xl md:tracking-[0.25em]">
            CUTS BY HARIS
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden gap-8 text-sm md:flex">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative pb-1 transition ${
                  activeSection === id
                    ? "text-[#d4a63f]"
                    : "text-white hover:text-[#d4a63f]"
                }`}
              >
                {navLabel(id)}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#d4a63f] transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="relative pb-1 text-white transition hover:text-[#d4a63f]"
            >
              Location
            </a>
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${phone}`}
              className="rounded-full border border-[#d4a63f]/40 px-4 py-2 text-sm font-semibold text-[#d4a63f] transition hover:bg-[#d4a63f] hover:text-black"
            >
              Call Now
            </a>

            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-full bg-[#d4a63f] px-5 py-2 font-semibold text-black shadow-[0_0_25px_rgba(212,166,63,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(212,166,63,0.8)]"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-[#d4a63f]/30 px-4 py-2 text-sm font-semibold text-[#d4a63f] transition hover:bg-[#d4a63f] hover:text-black md:hidden"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMobileMenu}
                  className={`transition ${
                    activeSection === id
                      ? "text-[#d4a63f]"
                      : "text-white hover:text-[#d4a63f]"
                  }`}
                >
                  {navLabel(id)}
                </a>
              ))}

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="text-white transition hover:text-[#d4a63f]"
              >
                Location
              </a>

              <div className="mt-2 flex flex-col gap-3">
                <a
                  href={`tel:${phone}`}
                  className="rounded-full border border-[#d4a63f]/40 px-4 py-3 text-center font-semibold text-[#d4a63f] transition hover:bg-[#d4a63f] hover:text-black"
                >
                  Call Now
                </a>

                <button
                  onClick={() => {
                    closeMobileMenu();
                    setBookingOpen(true);
                  }}
                  className="rounded-full bg-[#d4a63f] px-4 py-3 font-semibold text-black shadow-[0_0_20px_rgba(212,166,63,0.45)] transition hover:scale-[1.02]"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="slide-left">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4a63f]/80">
              Luxury Barbershop Experience
            </p>

            <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Luxury Grooming.
              <br />
              <span className="text-[#d4a63f]">Redefined.</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg text-white/70">
              Modern barbershop experience with sharp fades, clean beard work,
              and premium service.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setBookingOpen(true)}
                className="rounded-full bg-[#d4a63f] px-7 py-3 text-center font-semibold text-black shadow-[0_0_25px_rgba(212,166,63,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(212,166,63,0.8)]"
              >
                Book Appointment
              </button>

              <a
                href="#services"
                className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white transition duration-300 hover:border-[#d4a63f] hover:text-[#d4a63f]"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="slide-right relative flex justify-center">
            <div className="absolute -inset-6 rounded-full bg-[#d4a63f]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.35)]">
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[1.5rem] border border-[#d4a63f]/20 bg-[radial-gradient(circle_at_top,rgba(212,166,63,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-8 text-center">
                <Image
                  src="/logo.png"
                  alt="Cuts by Haris Logo"
                  width={280}
                  height={280}
                  className="object-contain"
                />
                <p className="mt-6 text-sm uppercase tracking-[0.32em] text-white/35">
                  At Aziz Barbershop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="reveal px-8 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Precision fades & sharp lines",
            "Luxury barbershop experience",
            "Modern clean environment",
          ].map((item, index) => (
            <div
              key={item}
              className={`reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d4a63f]/40 hover:shadow-[0_0_30px_rgba(212,166,63,0.08)] reveal-delay-${index + 1}`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="reveal px-8 py-20">
        <h3 className="mb-3 text-center text-3xl font-bold">Services</h3>
        <p className="mb-10 text-center text-white/55">
          Premium cuts with clean presentation and luxury styling
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`reveal group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#d4a63f]/50 hover:shadow-[0_0_35px_rgba(212,166,63,0.12)] reveal-delay-${Math.min(
                index + 1,
                4
              )}`}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h4 className="text-xl font-semibold">{service.name}</h4>
                <span className="rounded-full border border-[#d4a63f]/25 bg-[#d4a63f]/10 px-3 py-1 text-sm font-semibold text-[#d4a63f]">
                  {service.price}
                </span>
              </div>

              <p className="text-white/60">{service.desc}</p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#d4a63f]/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="reveal bg-white/[0.03] px-8 py-20 text-center backdrop-blur-md"
      >
        <h3 className="mb-6 text-center text-3xl font-bold">About</h3>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
          I graduated from MC College in 2020 and have built a reputation for precision and creativity behind the chair. I specialize in fades, beard work, and sharp lineups, and I’m passionate about complete transformations—from the “before” look to the final styled finish. Every client can expect a detailed consultation, personalized recommendations, and a haircut tailored to their lifestyle.

When I’m not cutting, I enjoy gaming, watching sports and TV, fishing, and riding my motorcycle in the summer.
        </p>
      </section>

      {/* VIDEO GALLERY */}
      <section id="gallery" className="reveal px-8 py-20">
        <h3 className="mb-3 text-center text-3xl font-bold">Gallery</h3>
        <p className="mb-10 text-center text-white/55">
          Real work. Real style. Real results.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {videos.map((src, index) => (
            <div
              key={index}
              className={`reveal group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#d4a63f]/40 hover:shadow-[0_0_30px_rgba(212,166,63,0.1)] reveal-delay-${Math.min(
                index + 1,
                4
              )}`}
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/20" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 shadow-[inset_0_0_60px_rgba(212,166,63,0.22)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_58%,rgba(0,0,0,0.75)_100%)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section id="reviews" className="reveal bg-white/[0.03] px-8 py-20">
        <h3 className="mb-3 text-center text-3xl font-bold">Client Reviews</h3>
        <p className="mb-10 text-center text-white/55">
          Trusted service and a premium customer experience
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`reveal rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d4a63f]/40 hover:shadow-[0_0_30px_rgba(212,166,63,0.08)] reveal-delay-${index + 1}`}
            >
              <div className="mb-4 text-[#d4a63f]">★★★★★</div>
              <p className="mb-6 text-white/70">{review.text}</p>
              <p className="font-semibold text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="reveal px-8 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d4a63f]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-8 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.35)]">
          <div className="text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#d4a63f]/80">
              Online Booking
            </p>
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Book your next appointment
            </h3>
            <p className="mx-auto max-w-2xl text-white/65">
              Choose your service, date, and time through Timely. You’ll see live
              availability and get automatic confirmation from your booking system.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Choose your haircut or beard service",
              "Pick from available dates and times",
              "Get instant confirmation and reminders",
            ].map((item, index) => (
              <div
                key={item}
                className={`reveal rounded-2xl border border-white/10 bg-black/30 p-6 text-center text-white/75 reveal-delay-${index + 1}`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-block rounded-full bg-[#d4a63f] px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(212,166,63,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,166,63,0.85)]"
            >
              Book Now
            </button>
            <p className="mt-4 text-sm text-white/45">
              
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal bg-white/[0.03] px-8 py-20 text-center">
        <h3 className="mb-6 text-center text-3xl font-bold">Contact</h3>

        <div className="space-y-3 text-white/70">
          <a
            href={`tel:${phone}`}
            className="block transition hover:text-[#d4a63f]"
          >
            Phone: (639) 414-1668
          </a>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-[#d4a63f]"
          >
            Instagram: @cutsbyharis
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-[#d4a63f]"
          >
            Location: Open in Google Maps
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d4a63f]/40 px-6 py-3 text-[#d4a63f] transition hover:bg-[#d4a63f] hover:text-black"
          >
            Open Location
          </a>

          <button
            onClick={() => setBookingOpen(true)}
            className="rounded-full bg-[#d4a63f] px-6 py-3 font-semibold text-black shadow-[0_0_25px_rgba(212,166,63,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(212,166,63,0.8)]"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="reveal border-t border-white/10 py-6 text-center text-white/40">
        © 2026 CUTS BY HARIS. All rights reserved.
      </footer>
    </main>
  );
}