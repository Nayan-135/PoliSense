"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "lucide-react"

export function RouteSafety() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would calculate the safest route
    console.log("Calculating safe route from", origin, "to", destination)
  }

  return (
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="icon-container">
            <Navigation className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Safe Route Planning</h3>
            <p className="text-xs text-muted-foreground">Find the safest path to your destination</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="origin" className="text-sm">
              Starting Point
            </Label>
            <Input
              id="origin"
              placeholder="Your location"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm">
              Destination
            </Label>
            <Input
              id="destination"
              placeholder="Where you're going"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Find Safest Route
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

