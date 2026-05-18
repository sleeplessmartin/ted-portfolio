import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

const certifications = [
  "Build AI Agents and Automate Workflows with n8n",
  "Build with AI: Create Custom Chatbots with n8n",
  "Vibe Code Your Weekly Productivity App: Build with Gemini in Google AI Studio & Google Antigravity",
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Credentials</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Education & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Education</h3>
            </div>
            <div className="pl-2 space-y-1">
              <p className="font-medium text-foreground">Bachelor of Science, Information Technology</p>
              <p className="text-sm text-primary">University of Cebu</p>
              <p className="text-sm text-muted-foreground">2000 – 2005</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Certifications & Continuous Learning</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-0.5 shrink-0">›</span>
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
