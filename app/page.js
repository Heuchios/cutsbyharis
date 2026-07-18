"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const timelyUrl = "https://cutsbyharis.setmore.com/haris";
  const mapsUrl = "https://maps.app.goo.gl/1tpSeQ26uABuFAp9A";
  const phone = "+16394141668";
  const instagram = "https://instagram.com/cutsbyharis";

  const sections = ["home", "services", "about", "gallery", "reviews", "booking", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileQuickActions, setShowMobileQuickActions] = useState(false);

  const services = [
    {
      name: "Haircut",
      price: "$35+",
      desc: "Clean, tailored haircut with sharp finishing details.",
    },
    {
      name: "Skin Fade",
      price: "$35+",
      desc: "Smooth blend with crisp lines and a modern premium look.",
    },
    {
      name: "Beard Trim",
      price: "$20+",
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
      const scrolledPastHeroStart = window.scrollY > 120;
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
      setShowMobileQuickActions(scrolledPastHeroStart);
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
    document.documentElement.classList.toggle("booking-modal-open", bookingOpen);
    document.body.classList.toggle("booking-modal-open", bookingOpen);

    return () => {
      document.documentElement.classList.remove("booking-modal-open");
      document.body.classList.remove("booking-modal-open");
    };
  }, [bookingOpen]);

  const navLabel = (id) => {
    if (id === "booking") return "Book";
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-[#f7f1e6] pb-24 text-[#17130d] md:pb-0">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 0.75s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }

        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-left {
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.85s cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 0.85s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }

        .slide-left.revealed {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-right {
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.85s cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 0.85s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
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

        @media (max-width: 767px) {
          .reveal,
          .slide-left,
          .slide-right {
            transform: translateY(18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .reveal,
          .slide-left,
          .slide-right {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17130d]/75 p-4 backdrop-blur-sm">
          <div className="relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#b8892f]/25 bg-[#fffaf1] shadow-[0_24px_70px_rgba(23,19,13,0.3)]">
            <div className="flex items-center justify-between border-b border-[#17130d]/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#b8892f]">
                  Online Booking
                </p>
                <h3 className="text-lg font-semibold text-[#17130d]">
                  Book your appointment
                </h3>
              </div>

              <button
                onClick={() => setBookingOpen(false)}
                className="rounded-full border border-[#17130d]/15 px-4 py-2 text-sm text-[#17130d] transition hover:border-[#b8892f] hover:text-[#8a621c]"
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
      <header className="sticky top-0 z-50 border-b border-[#17130d]/10 bg-[#fffaf1]/85 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
          <h1 className="text-lg font-black tracking-[0.2em] text-[#8a621c] sm:text-xl md:text-2xl md:tracking-[0.25em]">
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
                    ? "text-[#8a621c]"
                    : "text-[#17130d]/75 hover:text-[#8a621c]"
                }`}
              >
                {navLabel(id)}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#b8892f] transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="relative pb-1 text-[#17130d]/75 transition hover:text-[#8a621c]"
            >
              Location
            </a>
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${phone}`}
              className="rounded-full border border-[#b8892f]/50 px-4 py-2 text-sm font-semibold text-[#8a621c] transition hover:bg-[#b8892f] hover:text-white"
            >
              Call Now
            </a>

            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-full bg-[#17130d] px-5 py-2 font-semibold text-[#fffaf1] shadow-[0_12px_30px_rgba(23,19,13,0.22)] transition duration-300 hover:scale-105 hover:bg-[#b8892f]"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            className="min-h-11 rounded-full border border-[#b8892f]/40 px-4 py-2 text-sm font-semibold text-[#8a621c] transition hover:bg-[#b8892f] hover:text-white md:hidden"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="border-t border-[#17130d]/10 bg-[#fffaf1] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMobileMenu}
                  className={`transition ${
                    activeSection === id
                      ? "text-[#8a621c]"
                      : "text-[#17130d]/75 hover:text-[#8a621c]"
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
                className="text-[#17130d]/75 transition hover:text-[#8a621c]"
              >
                Location
              </a>

              <div className="mt-2 flex flex-col gap-3">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b8892f]/40 px-4 py-3 text-center font-semibold text-[#8a621c] transition hover:bg-[#b8892f] hover:text-white"
                >
                  Call Now
                </a>

                <button
                  onClick={() => {
                    closeMobileMenu();
                    setBookingOpen(true);
                  }}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#17130d] px-4 py-3 font-semibold text-[#fffaf1] shadow-[0_12px_24px_rgba(23,19,13,0.22)] transition hover:scale-[1.02] hover:bg-[#b8892f]"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <div
        aria-hidden={!showMobileQuickActions}
        className={`fixed inset-x-4 bottom-4 z-40 grid grid-cols-2 gap-3 rounded-full border border-[#17130d]/10 bg-[#fffaf1]/88 p-2 shadow-[0_18px_48px_rgba(23,19,13,0.2)] backdrop-blur-xl transition duration-300 md:hidden ${
          showMobileQuickActions
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <a
          href={`tel:${phone}`}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#17130d] px-4 text-sm font-semibold text-[#fffaf1]"
        >
          Call Now
        </a>

        <button
          onClick={() => setBookingOpen(true)}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#b8892f] px-4 text-sm font-semibold text-white"
        >
          Book Now
        </button>
      </div>

      {/* HERO */}
      <section className="px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="slide-left">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8a621c]">
              Luxury Barbershop Experience
            </p>

            <h2 className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Luxury Grooming.
              <br />
              <span className="text-[#8a621c]">Redefined.</span>
            </h2>

            <p className="mb-8 max-w-xl text-base leading-7 text-[#17130d]/70 md:text-lg">
              Modern barbershop experience with sharp fades, clean beard work,
              and premium service.
            </p>

            <div className="grid max-w-sm grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-[auto_auto_auto]">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#17130d] px-7 py-3 text-center font-semibold text-[#fffaf1] shadow-[0_14px_32px_rgba(23,19,13,0.24)] transition duration-300 hover:scale-105 hover:bg-[#b8892f]"
              >
                Book Appointment
              </button>

              <a
                href={`tel:${phone}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#17130d] px-7 py-3 text-center font-semibold text-[#fffaf1] shadow-[0_14px_32px_rgba(23,19,13,0.24)] transition duration-300 hover:scale-105 hover:bg-[#b8892f]"
              >
                Call Now
              </a>

              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#17130d]/15 bg-[#fffaf1]/55 px-7 py-3 text-center font-semibold text-[#17130d] transition duration-300 hover:border-[#b8892f] hover:text-[#8a621c]"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="slide-right relative flex justify-center">
            <div className="absolute -inset-6 rounded-full bg-[#b8892f]/15 blur-3xl" />

            <div className="relative w-full max-w-sm rounded-[2rem] border border-[#17130d]/10 bg-[#fffaf1]/70 p-5 backdrop-blur-md shadow-[0_24px_70px_rgba(23,19,13,0.12)] sm:p-6">
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.5rem] border border-[#b8892f]/20 bg-[linear-gradient(180deg,rgba(255,250,241,0.92),rgba(239,227,208,0.72))] p-7 text-center md:min-h-[420px] md:p-8">
                <Image
                  src="/logo.png"
                  alt="Cuts by Haris Logo"
                  width={280}
                  height={280}
                  className="w-52 object-contain sm:w-64 md:w-[280px]"
                />
                <p className="mt-6 text-sm uppercase tracking-[0.32em] text-[#17130d]/45">
                  At Sunsera Salon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="reveal px-5 pb-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Precision fades & sharp lines",
            "Luxury barbershop experience",
            "Modern clean environment",
          ].map((item, index) => (
            <div
              key={item}
              className={`reveal rounded-2xl border border-[#17130d]/10 bg-[#fffaf1]/65 p-6 text-center text-[#17130d]/82 backdrop-blur-md shadow-[0_18px_44px_rgba(23,19,13,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#b8892f]/40 hover:shadow-[0_20px_48px_rgba(184,137,47,0.12)] reveal-delay-${index + 1}`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="reveal px-5 py-16 md:px-8 md:py-20">
        <h3 className="mb-3 text-center text-3xl font-bold">Services</h3>
        <p className="mb-10 text-center text-[#17130d]/58">
          Premium cuts with clean presentation and luxury styling
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`reveal group rounded-2xl border border-[#17130d]/10 bg-[#fffaf1]/72 p-6 backdrop-blur-md shadow-[0_18px_48px_rgba(23,19,13,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#b8892f]/45 hover:shadow-[0_24px_54px_rgba(184,137,47,0.14)] reveal-delay-${Math.min(
                index + 1,
                4
              )}`}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h4 className="text-xl font-semibold">{service.name}</h4>
                <span className="rounded-full border border-[#b8892f]/25 bg-[#b8892f]/10 px-3 py-1 text-sm font-semibold text-[#8a621c]">
                  {service.price}
                </span>
              </div>

              <p className="text-[#17130d]/62">{service.desc}</p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#b8892f]/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="reveal bg-[#fffaf1]/62 px-5 py-16 text-center backdrop-blur-md md:px-8 md:py-20"
      >
        <h3 className="mb-6 text-center text-3xl font-bold">About</h3>

        <div className="mx-auto max-w-2xl space-y-5 text-base leading-8 text-[#17130d]/70 md:text-lg">
          <p>
            I graduated from MC College in 2020 and have built a reputation for precision and creativity behind the chair. I specialize in fades, beard work, and sharp lineups, and I’m passionate about complete transformations from the before look to the final styled finish.
          </p>

          <p>
            Every client can expect a detailed consultation, personalized recommendations, and a haircut tailored to their lifestyle. When I’m not cutting, I enjoy gaming, watching sports and TV, fishing, and riding my motorcycle in the summer.
          </p>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section id="gallery" className="reveal px-5 py-16 md:px-8 md:py-20">
        <h3 className="mb-3 text-center text-3xl font-bold">Gallery</h3>
        <p className="mb-10 text-center text-[#17130d]/58">
          Real work. Real style. Real results.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {videos.map((src, index) => (
            <div
              key={index}
              className={`reveal group overflow-hidden rounded-2xl border border-[#17130d]/10 bg-[#fffaf1]/70 backdrop-blur-md shadow-[0_18px_48px_rgba(23,19,13,0.1)] transition duration-300 hover:-translate-y-2 hover:border-[#b8892f]/40 hover:shadow-[0_24px_54px_rgba(184,137,47,0.14)] reveal-delay-${Math.min(
                index + 1,
                4
              )}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black md:aspect-square">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/20" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 shadow-[inset_0_0_60px_rgba(184,137,47,0.24)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_58%,rgba(0,0,0,0.75)_100%)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section id="reviews" className="reveal bg-[#fffaf1]/62 px-5 py-16 md:px-8 md:py-20">
        <h3 className="mb-3 text-center text-3xl font-bold">Client Reviews</h3>
        <p className="mb-10 text-center text-[#17130d]/58">
          Trusted service and a premium customer experience
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`reveal rounded-2xl border border-[#17130d]/10 bg-[#fffaf1]/76 p-6 backdrop-blur-md shadow-[0_18px_44px_rgba(23,19,13,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#b8892f]/40 hover:shadow-[0_22px_48px_rgba(184,137,47,0.12)] reveal-delay-${index + 1}`}
            >
              <div className="mb-4 text-[#b8892f]">★★★★★</div>
              <p className="mb-6 text-[#17130d]/70">{review.text}</p>
              <p className="font-semibold text-[#17130d]">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="reveal px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#b8892f]/20 bg-[linear-gradient(180deg,rgba(255,250,241,0.9),rgba(239,227,208,0.62))] p-6 backdrop-blur-md shadow-[0_24px_70px_rgba(23,19,13,0.12)] md:p-8">
          <div className="text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8a621c]">
              Online Booking
            </p>
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Book your next appointment
            </h3>
            <p className="mx-auto max-w-2xl text-[#17130d]/65">
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
                className={`reveal rounded-2xl border border-[#17130d]/10 bg-[#fffaf1]/68 p-6 text-center text-[#17130d]/72 reveal-delay-${index + 1}`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-block rounded-full bg-[#17130d] px-8 py-4 font-semibold text-[#fffaf1] shadow-[0_16px_36px_rgba(23,19,13,0.24)] transition duration-300 hover:scale-105 hover:bg-[#b8892f]"
            >
              Book Now
            </button>
            <p className="mt-4 text-sm text-[#17130d]/45">
              
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal bg-[#fffaf1]/62 px-5 py-16 text-center md:px-8 md:py-20">
        <h3 className="mb-6 text-center text-3xl font-bold">Contact</h3>

        <div className="space-y-3 text-[#17130d]/70">
          <a
            href={`tel:${phone}`}
            className="block transition hover:text-[#8a621c]"
          >
            Phone: (639) 414-1668
          </a>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-[#8a621c]"
          >
            Instagram: @cutsbyharis
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-[#8a621c]"
          >
            Location: Open in Google Maps
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#b8892f]/40 px-6 py-3 text-[#8a621c] transition hover:bg-[#b8892f] hover:text-white"
          >
            Open Location
          </a>

          <button
            onClick={() => setBookingOpen(true)}
            className="rounded-full bg-[#17130d] px-6 py-3 font-semibold text-[#fffaf1] shadow-[0_14px_30px_rgba(23,19,13,0.22)] transition duration-300 hover:scale-105 hover:bg-[#b8892f]"
          >
            Book Now
          </button>
        </div>
      </section>

            {/* FOOTER */}
      <footer className="reveal border-t border-[#17130d]/10 py-6 text-center text-[#17130d]/45">
        © 2026 CUTS BY HARIS. All rights reserved.
      </footer>
    </main>
  );
}

  
