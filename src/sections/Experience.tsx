import { motion } from "framer-motion"

const experience = [
  {
    company: "Optum",
    role: "Senior Software Engineer",
    period: "Oct 2024 – Present",
    location: "Cebu, Philippines",
    highlights: [
      "Designing cloud-native Go microservices for enterprise healthcare platforms on AWS — Lambda, AppSync, API Gateway, SQS, EventBridge.",
      "Implemented JWT and OAuth 2.0 (client_credentials, private_key_jwt) with HMAC signing across distributed healthcare services.",
    ],
  },
  {
    company: "Lore | Contagious Health",
    role: "Senior Software Engineer",
    period: "Aug 2022 – Sep 2024",
    location: "Remote (Azure)",
    highlights: [
      "Architected full-stack Azure solutions in C#, .NET Core, React/TypeScript — driving measurable improvements in system reliability.",
      "Provisioned Azure resources (App Service, Function Apps, Logic Apps, Service Bus, Key Vault) and led end-to-end engineering hiring.",
    ],
  },
  {
    company: "Optum Labs PH",
    role: "Manager, Software Engineering",
    period: "Jan 2020 – Mar 2022",
    location: "Cebu, Philippines",
    highlights: [
      "Led a cross-functional engineering team as both manager and individual contributor, delivering C#, .NET Core, and SQL Server applications.",
      "Set technical direction, mentored developers, conducted performance reviews, and managed capacity planning across cross-team initiatives.",
    ],
  },
  {
    company: "Optum Labs PH",
    role: "Research & Development Manager",
    period: "Jul 2017 – Jan 2020",
    location: "Cebu, Philippines",
    highlights: [
      "Planned and oversaw design, development, and integration of enterprise platforms aligned with corporate architecture standards.",
      "Managed multi-team delivery across Application Developers, Database Developers, QA Testers, and Process Engineers.",
    ],
  },
  {
    company: "Optum Labs PH",
    role: "Software Developer",
    period: "Sep 2010 – Jun 2017",
    location: "Cebu, Philippines",
    highlights: [
      "Developed, tested, deployed, and maintained ASP.NET web applications supporting enterprise healthcare operations.",
      "Screened and interviewed developer applicants; trained and onboarded new hires.",
    ],
  },
  {
    company: "Paint The Web Asia",
    role: ".NET Web Developer",
    period: "Sep 2007 – Sep 2010",
    location: "Lapu-Lapu City, Philippines",
    highlights: [
      "Developed C# and VB.NET business-logic layers for U.S.-facing web applications using ASP.NET.",
      "Created and maintained MSSQL Server scripts, stored procedures, and web UI components.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">History</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Work Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 md:left-4 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold text-foreground">{job.role}</h3>
                      <p className="text-sm text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{job.period}</p>
                      <p className="text-xs text-muted-foreground">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
