import { motion } from "framer-motion"
import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller"
import { AwardCard } from "@/components/ui/achievement-cards"
import { Briefcase, Cpu, Code2, Clock } from "lucide-react"

const stats = [
  { icon: Clock, title: "Years of Experience", description: "17+ Years" },
  { icon: Cpu, title: "AI Projects Shipped", description: "5+ Automations" },
  { icon: Code2, title: "Core Languages", description: "Go · C# · TypeScript" },
  { icon: Briefcase, title: "Enterprise Companies", description: "Optum · Lore Health" },
]

const logos = [
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftazure.svg",
    alt: "Microsoft Azure",
    gradient: { from: "#0078D4", via: "#005A9E", to: "#003D6B" },
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonwebservices.svg",
    alt: "Amazon AWS",
    gradient: { from: "#FF9900", via: "#FF8C00", to: "#CC7000" },
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/n8n.svg",
    alt: "n8n",
    gradient: { from: "#EA4B71", via: "#D63960", to: "#A02848" },
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/go.svg",
    alt: "Go",
    gradient: { from: "#00ACD7", via: "#0092B8", to: "#006A85" },
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/dotnet.svg",
    alt: ".NET",
    gradient: { from: "#512BD4", via: "#3E21A8", to: "#2B167A" },
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
    alt: "React",
    gradient: { from: "#61DAFB", via: "#40CCFF", to: "#00AADD" },
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg",
    alt: "TypeScript",
    gradient: { from: "#3178C6", via: "#2563A8", to: "#1A4A8A" },
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg",
    alt: "OpenAI",
    gradient: { from: "#412991", via: "#2D1D6B", to: "#1A1145" },
  },
]

export function SocialProof() {
  return (
    <section id="social-proof" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <AwardCard icon={<stat.icon className="h-6 w-6" />} title={stat.title} description={stat.description} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MarqueeLogoScroller
            title="Full-Stack Across the Modern AI + Cloud Stack"
            description="From enterprise healthcare platforms to end-to-end AI automation pipelines — the tools that power production-grade systems."
            logos={logos}
            speed="normal"
          />
        </motion.div>
      </div>
    </section>
  )
}
