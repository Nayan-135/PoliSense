"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function GeofenceAlert() {
  const [enabled, setEnabled] = useState(false)
  const [radius, setRadius] = useState("500")
  const [alertLevel, setAlertLevel] = useState("medium")

  return (
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="icon-container">
            <Bell className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Geofencing Alerts</h3>
            <p className="text-xs text-muted-foreground">Get notified in high-risk areas</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="geofence-mode" checked={enabled} onCheckedChange={setEnabled} />
            <Label htmlFor="geofence-mode">Enable alerts</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="radius" className="text-sm">
              Alert radius (meters)
            </Label>
            <Input
              id="radius"
              type="number"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              min="100"
              max="5000"
              step="100"
              disabled={!enabled}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="alert-level" className="text-sm">
              Minimum risk level
            </Label>
            <Select disabled={!enabled} value={alertLevel} onValueChange={setAlertLevel}>
              <SelectTrigger id="alert-level">
                <SelectValue placeholder="Select risk level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full" disabled={!enabled}>
            Save Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

