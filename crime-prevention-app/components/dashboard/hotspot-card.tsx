import { Card, CardContent } from "@/components/ui/card"
import type { CrimeHotspot } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

interface HotspotCardProps {
  hotspot: CrimeHotspot
}

export function HotspotCard({ hotspot }: HotspotCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High":
        return "text-red-500"
      case "Medium":
        return "text-amber-500"
      case "Low":
        return "text-emerald-500"
      default:
        return ""
    }
  }

  return (
    <Card className="card-hover">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <h3 className="font-medium">{hotspot.name}</h3>
          </div>
          <div className={`text-sm font-bold ${getRiskColor(hotspot.riskLevel)}`}>{hotspot.riskLevel} Risk</div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {hotspot.crimeTypes.map((type) => (
            <Badge key={type} variant="outline" className="text-xs">
              {type}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

