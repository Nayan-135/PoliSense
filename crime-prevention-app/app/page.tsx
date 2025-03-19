import { ArrowUpRight, ShieldAlert, TrendingUp, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { StatsCard } from "@/components/dashboard/stats-card"
import { CrimePredictionsTable } from "@/components/dashboard/crime-predictions-table"
import { HotspotCard } from "@/components/dashboard/hotspot-card"
import { InnovationFeatureCard } from "@/components/dashboard/innovation-feature-card"
import { crimePredictions, crimeHotspots, innovationFeatures } from "@/lib/data"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <Button size="sm" className="w-full sm:w-auto">
          <ShieldAlert className="mr-2 h-4 w-4" />
          Emergency Alert
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Active Alerts"
          value="24"
          description="In your monitored areas"
          icon={ShieldAlert}
          trend={{ value: 12, isPositive: false }}
        />
        <StatsCard title="Risk Level" value="Medium" description="Current assessment" icon={TrendingUp} />
        <StatsCard
          title="Prediction Accuracy"
          value="89%"
          description="Based on historical data"
          icon={Clock}
          trend={{ value: 4, isPositive: true }}
        />
        <StatsCard title="Monitored Locations" value="5" description="Home, work, and others" icon={MapPin} />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="innovation">Innovation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="card-hover md:col-span-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Recent Crime Predictions</h3>
                <CrimePredictionsTable predictions={crimePredictions.slice(0, 3)} />
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Nearby Hotspots</h3>
                <div className="space-y-4">
                  {crimeHotspots.slice(0, 2).map((hotspot) => (
                    <HotspotCard key={hotspot.id} hotspot={hotspot} />
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/heatmap" className="flex items-center justify-center gap-1">
                      View All Hotspots
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <Card className="card-hover">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">All Crime Predictions</h3>
              <CrimePredictionsTable predictions={crimePredictions} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="innovation" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {innovationFeatures.map((feature) => (
              <InnovationFeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

