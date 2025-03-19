import { Card, CardContent } from "@/components/ui/card"
import { Bell, FileText, Map, UserPlus, Users, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StepCardProps {
  step: {
    id: number
    title: string
    description: string
    benefits: string[]
    icon: string
  }
  isActive: boolean
}

export function StepCard({ step, isActive }: StepCardProps) {
  const getIcon = (): LucideIcon => {
    switch (step.icon) {
      case "UserPlus":
        return UserPlus
      case "Map":
        return Map
      case "Bell":
        return Bell
      case "FileText":
        return FileText
      case "Users":
        return Users
      default:
        return UserPlus
    }
  }

  const Icon = getIcon()

  return (
    <Card
      className={cn(
        "card-hover transition-all duration-300",
        isActive ? "border-primary/50 shadow-md ring-1 ring-primary/20" : "",
      )}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">
              Step {step.id}: {step.title}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isActive && <span className="text-primary">Active - </span>}
              Follow the guide
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">{step.description}</p>

        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {step.benefits.map((benefit, index) => (
              <Badge
                key={index}
                variant={isActive ? "default" : "outline"}
                className={isActive ? "" : "text-muted-foreground"}
              >
                {benefit}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

