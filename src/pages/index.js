// pages/index.js
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shadi Maliyekkal | Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/4ogo.jpg" />
      </Head>

      <main className="bg-white max-w-[1400px] mx-auto my-8">
        <header className="bg-[#111] text-white px-4 py-2 grid grid-cols-[1fr_auto_1fr] items-center h-20 shadow sticky top-0 z-[1000] max-[640px]:grid-cols-1 max-[640px]:h-auto max-[640px]:px-2 max-[640px]:py-2">
          <div className="flex items-center justify-start max-[640px]:justify-center">
            <Image
              src="/logo.jpg"
              alt="Logo"
              className="rounded-full object-cover w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[32px]"
              width={40}
              height={40}
            />
          </div>
          <div className="text-center max-[640px]:mt-2">
            <h1 className="text-[1.2rem] font-semibold text-[#f5f5f5] m-0 max-[640px]:text-[1rem]">
              Shadi Maliyekkal
            </h1>
          </div>
          <nav className="flex justify-end items-center gap-4 max-[640px]:justify-center max-[640px]:gap-2 max-[640px]:flex-wrap">
            <a
              className="text-[#ccc] font-medium text-sm transition-colors hover:text-white hover:text-shadow"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-[#ccc] font-medium text-sm transition-colors hover:text-white hover:text-shadow"
              href="#about"
            >
              About
            </a>
            <a
              className="text-[#ccc] font-medium text-sm transition-colors hover:text-white hover:text-shadow"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-[#ccc] font-medium text-sm transition-colors hover:text-white hover:text-shadow"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-[#ccc] font-medium text-sm transition-colors hover:text-white hover:text-shadow"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </header>

        <section className="h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] rounded-xl mb-8 text-center shadow max-[640px]:h-[40vh] max-[640px]:mb-4">
          <h1 className="text-[2rem] font-bold text-[#333] m-0 max-[640px]:text-[1.2rem]">
            Hey! I&apos;m Shadi Maliyekkal
          </h1>
          <h2 className="text-[1.2rem] text-[#666] mt-2 max-[640px]:text-[1rem]">
            I&apos;m a Full-Stack Developer
          </h2>
        </section>

        <section
          id="about"
          className="flex flex-wrap items-start bg-white p-4 rounded-lg shadow gap-4 max-[640px]:flex-col max-[640px]:items-center max-[640px]:p-2"
        >
          <Image
            src="/about.jpg"
            alt="Profile"
            className="w-[200px] h-[320px] object-cover rounded-lg max-[640px]:w-[120px] max-[640px]:h-[180px]"
            width={200}
            height={320}
          />
          <div className="flex-1 min-w-[150px] max-[640px]:min-w-0 max-[640px]:text-center">
            <h2 className="mt-0 text-[1.1rem] max-[640px]:text-[1rem]">
              About Me
            </h2>
            <p className="text-[0.95rem] leading-[1.5] text-[#555] max-[640px]:text-[0.85rem]">
              Hi, I&apos;m{" "}
              <strong className="text-blue-400">Shadi Maliyekkal</strong>, a
              passionate Computer Science student currently pursuing my higher
              studies with a strong ambition to become a full-time web
              developer. My journey in tech began with a curiosity for how
              websites work, which soon turned into a deep passion for building
              them. Over time, I&apos;ve gained hands-on experience with a
              variety of technologies, including HTML, CSS, JavaScript, React,
              and Next.js for frontend development, along with Python and Django
              for backend development. Learning these tools has not only
              strengthened my technical skills but also fueled my excitement for
              creating functional, user-friendly, and visually appealing web
              applications. What drives me is the challenge of solving
              real-world problems through code and constantly learning new ways
              to improve the user experience. I take pride in writing clean,
              maintainable code and continuously seek opportunities to grow as a
              developer. My dream is to become a skilled web developer who
              builds impactful digital solutions and contributes to meaningful
              projects that make a difference. I&apos;m excited to continue this
              journey and bring my creativity, dedication, and passion for web
              development into everything I build.
            </p>
            <div className="mt-3 text-[0.95rem] text-[#555] max-[640px]:text-[0.85rem]">
              Personal Info
            </div>
            <div className="text-gray-400 text-xs mt-2">
              <strong>Name:</strong> Shadi Maliyekkal
            </div>
            <div className="text-gray-400 text-xs mt-1">
              <strong>Date of birth:</strong> 08-05-2006
            </div>
            <div className="text-gray-400 text-xs mt-1">
              <strong>Address:</strong> Malappuram, Kerala, India
            </div>
            <div className="text-gray-400 text-xs mt-1">
              <strong>Zip code:</strong> 676304
            </div>
            <div className="text-gray-400 text-xs mt-1">
              <strong>Email:</strong> shadimaliyekkal100@gmail.com
            </div>
            <div className="text-gray-400 text-xs mt-1">
              <strong>Phone:</strong> +91 9497793478
            </div>
          </div>
        </section>

        <section id="projects" className="text-center mb-4 max-[640px]:mb-2">
          <h2 className="text-[1.2rem] mb-2 text-[#444] max-[640px]:text-[1rem]">
            MY PROJECT
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-4 justify-items-center max-[640px]:gap-2">
            <div className="bg-[#1a1a1a] text-[#f0f0f0] p-3 rounded-xl shadow max-w-[220px] text-center transition-transform hover:-translate-y-1 max-[640px]:p-2 max-[640px]:max-w-[160px]">
              <Image
                src="/port.jpg"
                alt="Portfolio"
                className="w-full h-[90px] object-cover rounded-lg mb-2 max-[640px]:h-[60px]"
                width={160}
                height={60}
              />
              <h3 className="mb-1 text-base text-white max-[640px]:text-sm">
                Portfolio
              </h3>
              <p className="text-xs text-[#ccc] mb-2">
                This isn&apos;t just a portfolio. It&apos;s the beginning of
                what I&apos;m building for the future.
              </p>
              <div className="flex gap-2 mt-2">
                <a
                  className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-3 py-1 font-semibold text-xs transition hover:from-[#64748b] hover:to-[#1e293b] hover:scale-105"
                  href="https://portfolio-delta-ruby-20jsldjcp7.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-3 py-1 font-semibold text-xs transition hover:from-[#64748b] hover:to-[#1e293b] hover:scale-105"
                  href="https://github.com/ShadiMaliyekkal/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="bg-[#1a1a1a] text-[#f0f0f0] p-3 rounded-xl shadow max-w-[220px] text-center transition-transform hover:-translate-y-1 max-[640px]:p-2 max-[640px]:max-w-[160px]">
              <Image
                src="/stone.jpg"
                alt="Stone Paper Scissors"
                className="w-full h-[90px] object-cover rounded-lg mb-2 max-[640px]:h-[60px]"
                width={160}
                height={60}
              />
              <h3 className="mb-1 text-base text-white max-[640px]:text-sm">
                Stone Paper Scissors
              </h3>
              <p className="text-xs text-[#ccc] mb-2">
                A simple game. Infinite outcomes. Let&apos;s play!
              </p>
              <div className="flex gap-2 mt-2">
                <a
                  className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-3 py-1 font-semibold text-xs transition hover:from-[#64748b] hover:to-[#1e293b] hover:scale-105"
                  href="https://btn-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-3 py-1 font-semibold text-xs transition hover:from-[#64748b] hover:to-[#1e293b] hover:scale-105"
                  href="https://github.com/ShadiMaliyekkal/Btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="bg-[#1a1a1a] text-[#f0f0f0] p-3 rounded-xl shadow max-w-[220px] text-center transition-transform hover:-translate-y-1 max-[640px]:p-2 max-[640px]:max-w-[160px]">
              <Image
                src="/clone.jpg"
                alt="Clone App"
                className="w-full h-[90px] object-cover rounded-lg mb-2 max-[640px]:h-[60px]"
                width={160}
                height={60}
              />
              <h3 className="mb-1 text-base text-white max-[640px]:text-sm">
                Clone
              </h3>
              <p className="text-xs text-[#ccc] mb-2">
                I clone to learn — every pixel and feature teaches me something
                new.
              </p>
              <div className="flex gap-2 mt-2">
                <a
                  className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-3 py-1 font-semibold text-xs transition hover:from-[#64748b] hover:to-[#1e293b] hover:scale-105"
                  href="https://valorant-sage.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="bg-gradient-to-r from-[#1e293b] to-[#64748b] text-white rounded-lg px-3 py-1 font-semibold text-xs transition hover:from-[#64748b] hover:to-[#1e293b] hover:scale-105"
                  href="https://github.com/ShadiMaliyekkal/Valorant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 max-[640px]:mb-2">
          <h2 className="text-[1.2rem] mb-2 text-[#444] max-[640px]:text-[1rem]">
            Section Title
          </h2>
        </section>

        <section
          id="skills"
          className="p-4 bg-white rounded-lg text-center mb-8 max-[640px]:p-2 max-[640px]:mb-2"
        >
          <h2 className="text-lg mb-2 text-[#222] max-[640px]:text-base">
            Skills
          </h2>
          <p className="text-[0.95rem] max-w-[320px] mx-auto mb-4 text-[#555] leading-[1.5] max-[640px]:text-[0.85rem]">
            As a full-stack developer, I have a well-rounded skill set that
            allows me to build complete, responsive, and performance-driven web
            applications. From designing intuitive user interfaces to developing
            secure backend systems, I enjoy working across the entire stack to
            bring ideas to life.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-2 max-[640px]:gap-2">
            <div className="bg-[#f9f9f9] rounded-xl p-3 shadow text-left max-[640px]:p-2">
              <h3 className="mb-2 text-[#333] text-base max-[640px]:text-sm">
                Frontend
              </h3>
              <ul className="list-none pl-0">
                <li className="mb-1 text-[#3e3e3e] text-xs">HTML, CSS</li>
                <li className="mb-1 text-[#3e3e3e] text-xs">JavaScript</li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  React.js, Next.js
                </li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Responsive Design & Accessibility
                </li>
              </ul>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-3 shadow text-left max-[640px]:p-2">
              <h3 className="mb-2 text-[#333] text-base max-[640px]:text-sm">
                Backend
              </h3>
              <ul className="list-none pl-0">
                <li className="mb-1 text-[#3e3e3e] text-xs">Python, Django</li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  REST API Development
                </li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Database Management (SQLite, PostgreSQL)
                </li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  User Authentication & Admin Panel
                </li>
              </ul>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-3 shadow text-left max-[640px]:p-2">
              <h3 className="mb-2 text-[#333] text-base max-[640px]:text-sm">
                Tools & Technologies
              </h3>
              <ul className="list-none pl-0">
                <li className="mb-1 text-[#3e3e3e] text-xs">Git & GitHub</li>
                <li className="mb-1 text-[#3e3e3e] text-xs">VS Code</li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Deployment: Vercel, Netlify
                </li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Chrome DevTools
                </li>
              </ul>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-3 shadow text-left max-[640px]:p-2">
              <h3 className="mb-2 text-[#333] text-base max-[640px]:text-sm">
                Soft Skills
              </h3>
              <ul className="list-none pl-0">
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Problem Solving
                </li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Continuous Learning
                </li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Time Management
                </li>
                <li className="mb-1 text-[#3e3e3e] text-xs">
                  Team Collaboration
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-gray-800 rounded-lg shadow p-2 mb-4 max-[640px]:p-1 max-[640px]:mb-2"
        >
          <h2 className="text-base font-semibold mb-1 text-white max-[640px]:text-sm">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 text-xs mb-2 max-[640px]:text-[0.7rem]">
            If you&apos;d like to collaborate, work on a project, or just say
            hello — feel free to reach out anytime.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <span className="font-semibold text-blue-400 text-xs">Email:</span>
              <a
                href="mailto:shadimaliyekkal100@gmail.com"
                className="text-blue-400 hover:underline text-xs"
              >
                shadimaliyekkal100@gmail.com
              </a>
            </div>
            <div className="flex gap-1 items-center">
              <span className="font-semibold text-blue-400 text-xs">GitHub:</span>
              <a
                href="https://github.com/ShadiMaliyekkal"
                className="text-blue-400 hover:underline text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ShadiMaliyekkal
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 bg-[#111] text-[#ccc]">
        <p>
          &copy; {new Date().getFullYear()} Shadi Maliyekkal. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
