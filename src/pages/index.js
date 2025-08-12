// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Shadi Maliyekkal | Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/4ogo.jpg" />
      </Head>

      <main className="max-w-[1400px] mx-auto my-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="bg-[#111] text-white px-4 sm:px-8 py-3 flex justify-between items-center h-20 shadow sticky top-0 z-[1000]">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Logo"
              className="rounded-full object-cover"
              width={50}
              height={50}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                className="text-[#ccc] font-medium text-base transition-colors hover:text-white"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </header>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <nav className="bg-[#111] md:hidden flex flex-col items-center py-4 gap-4">
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                className="text-[#ccc] font-medium text-lg hover:text-white"
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        )}

        {/* Hero Section */}
        <section className="h-[70vh] sm:h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] rounded-xl mb-16 text-center shadow px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#333]">
            Hey! I&apos;m Shadi Maliyekkal
          </h1>
          <h2 className="text-lg sm:text-2xl mt-4 text-[#666]">
            I&apos;m a Full-Stack Developer
          </h2>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col lg:flex-row items-start bg-white p-4 sm:p-8 rounded-lg shadow gap-6"
        >
          <Image
            src="/about.jpg"
            alt="Profile"
            className="w-full lg:w-[400px] h-auto object-cover rounded-md"
            width={400}
            height={500}
          />
          <div className="flex-1">
            <h2 className="mt-0 text-xl sm:text-2xl font-semibold">About Me</h2>
            <p className="text-base sm:text-lg leading-[1.6] text-[#555] mt-2">
              Hi, I&apos;m{" "}
              <strong className="text-blue-400">Shadi Maliyekkal</strong>, a
              passionate Computer Science student currently pursuing my higher
              studies with a strong ambition to become a full-time web
              developer...
            </p>

            {/* Personal Info */}
            <div className="mt-5">
              <h3 className="text-lg font-medium text-[#555]">Personal Info</h3>
              <ul className="text-gray-500 text-sm mt-2 space-y-1">
                <li>
                  <strong>Name:</strong> Shadi Maliyekkal
                </li>
                <li>
                  <strong>DOB:</strong> 08-05-2006
                </li>
                <li>
                  <strong>Address:</strong> Malappuram, Kerala, India
                </li>
                <li>
                  <strong>Zip:</strong> 676304
                </li>
                <li>
                  <strong>Email:</strong> shadimaliyekkal100@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> +91 9497793478
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="text-center mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#444]">
            MY PROJECTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                img: "/port.jpg",
                title: "Portfolio",
                desc: "This isn’t just a portfolio. It’s the beginning...",
                demo: "https://portfolio-delta-ruby-20jsldjcp7.vercel.app/",
                code: "https://github.com/ShadiMaliyekkal/portfolio",
              },
              {
                img: "/stone.jpg",
                title: "Stone Paper Scissors",
                desc: "A simple game. Infinite outcomes. Let’s play!",
                demo: "https://btn-three.vercel.app/",
                code: "https://github.com/ShadiMaliyekkal/Btn",
              },
              {
                img: "/clone.jpg",
                title: "Clone",
                desc: "I clone to learn — every pixel teaches me something new.",
                demo: "https://valorant-sage.vercel.app/",
                code: "https://github.com/ShadiMaliyekkal/Valorant",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] text-white p-6 rounded-xl shadow max-w-[300px] mx-auto hover:-translate-y-1 transition-transform"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[180px] object-cover rounded-lg mb-4"
                  width={300}
                  height={180}
                />
                <h3 className="mb-2 text-lg">{p.title}</h3>
                <p className="text-sm text-[#ccc] mb-4">{p.desc}</p>
                <div className="flex gap-4 justify-center">
                  <a
                    className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-4 py-2 text-sm sm:px-6 sm:py-2 font-semibold hover:scale-105 transition"
                    href={p.demo}
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-4 py-2 text-sm sm:px-6 sm:py-2 font-semibold hover:scale-105 transition"
                    href={p.code}
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="p-4 sm:p-8 bg-white rounded-lg text-center my-16"
        >
          <h2 className="text-xl sm:text-2xl mb-4 text-[#222]">Skills</h2>
          <p className="text-base sm:text-lg max-w-[800px] mx-auto text-[#555] leading-[1.6]">
            As a full-stack developer, I have a well-rounded skill set...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              {
                title: "Frontend",
                skills: ["HTML, CSS", "JavaScript", "React.js, Next.js", "Responsive Design"],
              },
              {
                title: "Backend",
                skills: ["Python, Django", "REST API", "SQLite, PostgreSQL", "Auth & Admin"],
              },
              {
                title: "Tools & Tech",
                skills: ["Git & GitHub", "VS Code", "Vercel, Netlify", "DevTools"],
              },
              {
                title: "Soft Skills",
                skills: ["Problem Solving", "Continuous Learning", "Time Management", "Collaboration"],
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-[#f9f9f9] rounded-xl p-6 shadow text-left"
              >
                <h3 className="mb-4 text-[#333] text-lg">{s.title}</h3>
                <ul className="space-y-2 text-sm text-[#3e3e3e]">
                  {s.skills.map((sk, idx) => (
                    <li key={idx}>{sk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gray-800 rounded-lg shadow p-4 sm:p-8 mb-8"
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            If you’d like to collaborate, work on a project, or just say hello...
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-semibold text-blue-400">Email:</span>
              <a
                href="mailto:shadimaliyekkal100@gmail.com"
                className="text-blue-400 hover:underline text-sm"
              >
                shadimaliyekkal100@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-semibold text-blue-400">GitHub:</span>
              <a
                href="https://github.com/ShadiMaliyekkal"
                className="text-blue-400 hover:underline text-sm"
                target="_blank"
              >
                github.com/ShadiMaliyekkal
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 bg-[#111] text-[#ccc] text-sm">
        <p>
          &copy; {new Date().getFullYear()} Shadi Maliyekkal. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

