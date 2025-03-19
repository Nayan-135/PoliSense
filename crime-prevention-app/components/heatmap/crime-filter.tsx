"use client"

import type { CrimeType } from "@/lib/data"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useState } from "react"

const crimeTypes: CrimeType[] = ["Theft", "Assault", "Burglary", "Robbery", "Vandalism", "Fraud", "Other"]

interface CrimeFilterProps {
  onFilterChange: (selectedTypes: CrimeType[]) => void
}

export function CrimeFilter({ onFilterChange }: CrimeFilterProps) {
  const [open, setOpen] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState<CrimeType[]>([])

  const handleSelect = (type: CrimeType) => {
    const newSelection = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type]

    setSelectedTypes(newSelection)
    onFilterChange(newSelection)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {selectedTypes.length > 0 ? `${selectedTypes.length} crime types selected` : "Filter by crime type"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search crime type..." />
          <CommandList>
            <CommandEmpty>No crime type found.</CommandEmpty>
            <CommandGroup>
              {crimeTypes.map((type) => (
                <CommandItem key={type} value={type} onSelect={() => handleSelect(type)}>
                  <Check className={cn("mr-2 h-4 w-4", selectedTypes.includes(type) ? "opacity-100" : "opacity-0")} />
                  {type}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

