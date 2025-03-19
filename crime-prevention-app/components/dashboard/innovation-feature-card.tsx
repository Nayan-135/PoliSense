import { Card, CardContent } from "@/components/ui/card"
import { Brain, Link, Bell, Users, type LucideIcon } from "lucide-react"

interface InnovationFeatureProps {
  title: string
  description: string
  icon: string
}

export function InnovationFeatureCard({ title, description, icon }: InnovationFeatureProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Brain":
        return Brain
      case "Link":
        return Link
      case "Bell":
        return Bell
      case "Users":
        return Users
      default:
        return Brain
    }
  }

  const Icon = getIcon()

  return (
    <Card className="card-hover h-full">
      <CardContent className="p-6">
        <div className="icon-container mb-4">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

