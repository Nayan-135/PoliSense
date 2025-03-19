import { MapPin } from "lucide-react"

interface MapPlaceholderProps {
  className?: string
}

export function MapPlaceholder({ className }: MapPlaceholderProps) {
  return (
    <div className={`relative flex items-center justify-center rounded-lg border bg-card/50 p-8 ${className}`}>
      <div className="flex flex-col items-center text-center">
        <div className="icon-container mb-4">
          <MapPin className="h-5 w-5" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">Interactive Crime Map</h3>
        <p className="mb-4 max-w-md text-sm text-muted-foreground">
          View crime hotspots and risk levels across the city
        </p>
      </div>

      {/* Simulated hotspots */}
      <div className="absolute left-1/4 top-1/3 h-16 w-16 rounded-full bg-red-500/20 animate-pulse-slow"></div>
      <div className="absolute left-2/3 top-1/2 h-12 w-12 rounded-full bg-amber-500/20 animate-pulse-slow"></div>
      <div className="absolute left-1/2 top-1/4 h-10 w-10 rounded-full bg-emerald-500/20 animate-pulse-slow"></div>
    </div>
  )
}

