import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"
import { Video, FileSearch, MessageSquare, CalendarCheck, BookOpen } from "lucide-react"

const projects = [
  {
    icon: <Video className="h-6 w-6" />,
    title: "Automated YouTube Shorts & Facebook Reels Creator",
    problem: "Manual short-form video production is time-intensive and inconsistent, creating bottlenecks in content publishing cadence.",
    solution: "Built an end-to-end content automation pipeline that generates scripts, formats video assets, and publishes to YouTube Shorts and Facebook Reels on a fully scheduled basis.",
    outcome: "Eliminated manual content workflows entirely — enabling consistent publishing at zero marginal effort per video.",
    tools: ["n8n", "LLM APIs", "YouTube API", "Facebook Graph API", "Scheduled Triggers"],
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "AI Jobs Scraper + Resume Optimizer",
    problem: "Generic resumes consistently underperform in ATS screening, reducing interview conversion rates across the board.",
    solution: "Engineered an intelligent pipeline that scrapes job listings from multiple sources, uses AI to analyze role requirements and keywords, then automatically tailors resume content to maximize ATS match scores.",
    outcome: "Turned a hours-long manual process into a fully automated, per-application optimization engine.",
    tools: ["n8n", "Web Scraping", "LLM APIs", "ATS Analysis", "Multi-source Aggregation"],
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "AI Agent for Facebook Messenger",
    problem: "Businesses lose leads when human agents are unavailable to respond to Messenger inquiries, creating costly response latency.",
    solution: "Engineered a conversational AI agent integrated with Facebook Messenger that handles inbound user queries and generates context-aware responses autonomously.",
    outcome: "Drives engagement 24/7 — eliminating response latency and reducing dependency on human intervention for first-touch interactions.",
    tools: ["n8n", "LLM APIs", "Facebook Messenger API", "Webhook Automation"],
  },
  {
    icon: <CalendarCheck className="h-6 w-6" />,
    title: "AI Appointment Setter",
    problem: "Manual scheduling workflows consume significant sales and ops time through repeated back-and-forth coordination.",
    solution: "Designed an AI-powered scheduling automation that qualifies inbound leads, negotiates availability, and books confirmed appointments autonomously.",
    outcome: "Removed manual coordination overhead entirely and shortened time-to-meeting for qualified prospects.",
    tools: ["n8n", "LLM APIs", "Calendar APIs", "Lead Qualification Logic"],
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Company Rules Handbook Chatbot (RAG)",
    problem: "Employees repeatedly escalate routine HR and policy questions, creating significant support overhead and slow resolution times.",
    solution: "Built a RAG-based chatbot that ingests internal policy documents into a vector store and enables employees to query company rules, procedures, and handbook content in natural language.",
    outcome: "Delivers instant, accurate answers and measurably reduces repetitive HR support load.",
    tools: ["n8n", "RAG", "Vector Store", "LLM APIs", "Document Ingestion"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Automation Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Each project starts with a real business problem and ends with a production-quality automation that eliminates it.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProjectCard {...project} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
