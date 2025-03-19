"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import type { CrimeType } from "@/lib/data"
import { CalendarIcon, MapPin } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const crimeTypes: CrimeType[] = ["Theft", "Assault", "Burglary", "Robbery", "Vandalism", "Fraud", "Other"]

export function CrimeReportForm() {
  const [crimeType, setCrimeType] = useState<CrimeType | "">("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [description, setDescription] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setCrimeType("")
      setLocation("")
      setDate(new Date())
      setDescription("")
      setIsAnonymous(false)
      setIsSuccess(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="crime-type">Type of Crime</Label>
        <Select value={crimeType} onValueChange={(value) => setCrimeType(value as CrimeType)}>
          <SelectTrigger id="crime-type">
            <SelectValue placeholder="Select crime type" />
          </SelectTrigger>
          <SelectContent>
            {crimeTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-primary" />
          Location
        </Label>
        <Input
          id="location"
          placeholder="Enter address or describe location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date and Time</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe what happened in detail"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
        <Label htmlFor="anonymous">Submit anonymously</Label>
      </div>

      <Button type="submit" className="w-full transition-all duration-300" disabled={isSubmitting || isSuccess}>
        {isSubmitting ? "Submitting..." : isSuccess ? "Report Submitted! ✓" : "Submit Report"}
      </Button>
    </form>
  )
}

