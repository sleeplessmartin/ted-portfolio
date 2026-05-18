import * as React from "react"
import { cn } from "@/lib/utils"

export interface AwardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
}

const AwardCard = React.forwardRef<HTMLDivElement, AwardCardProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex min-w-[200px] items-center gap-4 rounded-xl border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0 text-primary">{icon}</div>
        <div className="flex flex-col text-left">
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="font-semibold text-card-foreground text-sm">{description}</p>
        </div>
      </div>
    )
  }
)
AwardCard.displayName = "AwardCard"
export { AwardCard }
