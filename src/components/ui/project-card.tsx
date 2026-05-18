import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  problem: string
  solution: string
  outcome: string
  tools: string[]
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, icon, title, problem, solution, outcome, tools, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40",
          className
        )}
        {...props}
      >
        <div className="p-6 flex flex-col gap-4 flex-1">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {icon}
            </div>
            <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          <div className="space-y-3 flex-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Problem</p>
              <p className="text-sm text-muted-foreground">{problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Solution</p>
              <p className="text-sm text-muted-foreground">{solution}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Outcome</p>
              <p className="text-sm text-muted-foreground">{outcome}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
ProjectCard.displayName = "ProjectCard"
export { ProjectCard }
