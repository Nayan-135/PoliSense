import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({ title, value, description, icon: Icon, trend, className }: StatsCardProps) {
  return (
    <Card className={cn("card-hover overflow-hidden", className)}>
      <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 transform rounded-full bg-primary/5" />
      <CardContent className="p-6">
        <div className="icon-container mb-3">
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">{description}</p>
          {trend && (
            <div className={trend.isPositive ? "stat-trend-up" : "stat-trend-down"}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%<span className="text-xs">from last month</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

