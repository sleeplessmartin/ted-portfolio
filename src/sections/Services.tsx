import { motion } from "framer-motion"
import { Bot, Workflow, Database, Plug } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Bot,
    number: "001",
    title: "Custom AI Agents",
    description: "Conversational agents built on LLM APIs that handle inbound queries, qualify leads, set appointments, and operate 24/7 without human intervention. Integrated with your existing channels — Messenger, WhatsApp, Slack, web.",
    gradient: "from-blue-950/80 to-cyan-950/80",
  },
  {
    icon: Workflow,
    number: "002",
    title: "Workflow Automation",
    description: "End-to-end n8n pipelines that eliminate manual, repetitive processes. From content creation and publishing, to data aggregation and reporting — engineered for reliability, not just functionality.",
    gradient: "from-violet-950/80 to-purple-950/80",
  },
  {
    icon: Database,
    number: "003",
    title: "RAG Chatbots",
    description: "Retrieval-Augmented Generation systems that ingest your documents, policies, and knowledge bases into vector stores — giving employees and customers instant, accurate answers over internal information.",
    gradient: "from-emerald-950/80 to-teal-950/80",
  },
  {
    icon: Plug,
    number: "004",
    title: "API & Systems Integration",
    description: "19+ years of API design and integration experience applied to connecting your stack. CRMs, calendars, social platforms, healthcare systems, payment providers — built with OAuth, JWT, and production-grade security.",
    gradient: "from-amber-950/80 to-orange-950/80",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Services</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What I Build</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Production-ready automation systems backed by enterprise engineering discipline.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 bg-gradient-to-br border border-border ${service.gradient}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground">( {service.number} )</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Let's talk →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
