"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface LocationSearchProps {
  onSearch: (location: string) => void
}

export function LocationSearch({ onSearch }: LocationSearchProps) {
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (location.trim()) {
      onSearch(location)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter address or neighborhood"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" className="gap-2">
        <Search className="h-4 w-4" />
        Search
      </Button>
    </form>
  )
}

