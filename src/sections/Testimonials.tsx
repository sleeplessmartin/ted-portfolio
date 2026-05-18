import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Your testimonial will appear here. I'd love to feature your words about working together.",
    name: "Name Here",
    role: "Title · Company",
    initials: "TK",
  },
  {
    quote: "Your testimonial will appear here. I'd love to feature your words about working together.",
    name: "Name Here",
    role: "Title · Company",
    initials: "MC",
  },
  {
    quote: "Your testimonial will appear here. I'd love to feature your words about working together.",
    name: "Name Here",
    role: "Title · Company",
    initials: "JR",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What Clients Say</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 gap-4"
            >
              <Quote className="h-6 w-6 text-primary/60" />
              <p className="text-muted-foreground text-sm italic flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
