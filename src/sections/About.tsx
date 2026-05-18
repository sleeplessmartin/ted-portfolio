import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const edges = [
  "Production-grade engineering discipline applied to every automation pipeline",
  "Deep systems-thinking: designs that are maintainable, observable, and failure-tolerant",
  "17+ years of API integration experience — no black-box glue code",
  "Cloud-native architecture (Azure, AWS) that scales beyond the demo",
  "Hands-on LLM prompt engineering and RAG system design",
  "Code review rigor that most automation specialists skip entirely",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">About</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">My Edge</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground text-base leading-relaxed"
          >
            <p>
              Most AI automation specialists start from no-code tools and work outward. I started from
              enterprise-grade backend systems — C#, .NET Core, Go, cloud-native microservices — and
              moved into AI automation with all of that depth intact.
            </p>
            <p>
              That means when I build an n8n pipeline, I'm not just connecting nodes. I'm thinking
              about failure modes, retry logic, API rate limits, data integrity, and how it fits into
              a production architecture. The same engineering rigour that kept healthcare systems
              running at scale now goes into every automation I design.
            </p>
            <p>
              I bring 17+ years of systems-thinking to a space that badly needs it. My background in
              OAuth 2.0, JWT, HMAC signing, and secure API design means the automations I build
              aren't just functional — they're production-ready from day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {edges.map((edge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <p className="text-sm text-foreground">{edge}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
