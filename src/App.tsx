import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Bot } from "lucide-react"
import { Hero } from "./sections/Hero"
import { SocialProof } from "./sections/SocialProof"
import { About } from "./sections/About"
import { Skills } from "./sections/Skills"
import { Projects } from "./sections/Projects"
import { Services } from "./sections/Services"
import { Experience } from "./sections/Experience"
import { Certifications } from "./sections/Certifications"
import { Testimonials } from "./sections/Testimonials"
import { Contact } from "./sections/Contact"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleNav(href: string) {
    setMobileOpen(false)
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors"
        >
          <Bot className="h-5 w-5 text-primary" />
          Ted Martin
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={() => handleNav("#contact")}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Hire Me
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-primary" />
          <span>Ted Martin Hermosisima</span>
        </div>
        <p>AI Automation Engineer · Senior Software Engineer · Metro Cebu, Philippines</p>
        <a
          href="mailto:ted.martin.hermosisima@gmail.com"
          className="hover:text-primary transition-colors"
        >
          ted.martin.hermosisima@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
