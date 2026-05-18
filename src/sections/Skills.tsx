import { motion } from "framer-motion"
import { Bot, Server } from "lucide-react"

const automationStack = [
  "n8n", "LLM API Integration", "RAG Architecture", "Conversational AI Agents",
  "Workflow Automation", "Zapier", "Prompt Engineering", "Vector Stores",
  "Document Ingestion", "Webhook Automation", "Scheduled Triggers",
]

const engineeringStack = [
  "Go", "C# / .NET Core", "ASP.NET", "TypeScript", "React", "React Native",
  "RESTful API Design", "Microservices", "Entity Framework Core",
  "Azure", "AWS Lambda", "EventBridge", "API Gateway", "SQS", "S3",
  "SQL Server", "NoSQL", "OAuth 2.0", "JWT", "HMAC",
  "Git", "Azure DevOps", "CI/CD",
]

function SkillPill({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className="inline-flex items-center rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground"
    >
      {label}
    </motion.span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Stack</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Skills & Tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Automation Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {automationStack.map((skill, i) => (
                <SkillPill key={skill} label={skill} delay={i * 0.04} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border bg-card p-6 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Engineering Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {engineeringStack.map((skill, i) => (
                <SkillPill key={skill} label={skill} delay={i * 0.04} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
