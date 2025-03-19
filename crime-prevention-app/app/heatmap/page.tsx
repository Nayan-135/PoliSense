"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { CrimeType } from "@/lib/data"
import { MapPlaceholder } from "@/components/heatmap/map-placeholder"
import { LocationSearch } from "@/components/heatmap/location-search"
import { CrimeFilter } from "@/components/heatmap/crime-filter"
import { GeofenceAlert } from "@/components/heatmap/geofence-alert"
import { RouteSafety } from "@/components/heatmap/route-safety"

export default function HeatmapPage() {
  const [location, setLocation] = useState("")
  const [selectedCrimeTypes, setSelectedCrimeTypes] = useState<CrimeType[]>([])

  const handleLocationSearch = (searchLocation: string) => {
    setLocation(searchLocation)
    // In a real app, this would update the map view
  }

  const handleFilterChange = (types: CrimeType[]) => {
    setSelectedCrimeTypes(types)
    // In a real app, this would filter the map data
  }

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <h2 className="text-3xl font-bold tracking-tight">Crime Map</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Search Location</h3>
              </div>
              <LocationSearch onSearch={handleLocationSearch} />
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filter Crime Types</h3>
              </div>
              <CrimeFilter onFilterChange={handleFilterChange} />
            </CardContent>
          </Card>

          <MapPlaceholder className="h-[400px] md:h-[500px]" />

          {location && (
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Results for: {location}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {selectedCrimeTypes.length > 0
                    ? `Filtered by: ${selectedCrimeTypes.join(", ")}`
                    : "Showing all crime types"}
                </p>
                <div className="rounded-lg bg-accent p-4">
                  <p className="text-sm">
                    This area has a <span className="font-medium text-amber-500">medium risk level</span> with 24
                    reported incidents in the last 30 days. Most common: Theft (42%) and Vandalism (28%).
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="geofence">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="geofence">Alerts</TabsTrigger>
              <TabsTrigger value="route">Routes</TabsTrigger>
            </TabsList>
            <TabsContent value="geofence" className="pt-4">
              <GeofenceAlert />
            </TabsContent>
            <TabsContent value="route" className="pt-4">
              <RouteSafety />
            </TabsContent>
          </Tabs>

          <Card className="card-hover">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Safety Tips</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-accent p-3">
                  <h4 className="text-sm font-medium text-primary">High-Risk Areas</h4>
                  <p className="text-sm text-muted-foreground">Avoid downtown transit hub between 10 PM and 2 AM.</p>
                </div>
                <div className="rounded-lg bg-accent p-3">
                  <h4 className="text-sm font-medium text-primary">Safer Alternatives</h4>
                  <p className="text-sm text-muted-foreground">
                    Use eastern entrance to shopping center (70% fewer incidents).
                  </p>
                </div>
                <div className="rounded-lg bg-accent p-3">
                  <h4 className="text-sm font-medium text-primary">Time-Based Safety</h4>
                  <p className="text-sm text-muted-foreground">
                    Residential areas show lower risk during daylight hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

