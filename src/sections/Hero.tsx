import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Mail, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <Bot className="h-4 w-4" />
            AI Automation Engineer · Senior Software Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl"
          >
            Ted Martin
            <br />
            <span className="text-primary">Hermosisima</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            19+ years of enterprise engineering depth — now weaponized for AI automation.
            I build production-grade pipelines, RAG chatbots, and LLM-integrated agents that
            actually ship and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="h-4 w-4" />
              Work With Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              See My Work
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/ted-martin-hermosisima-206b4052", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ted.martin.hermosisima@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
