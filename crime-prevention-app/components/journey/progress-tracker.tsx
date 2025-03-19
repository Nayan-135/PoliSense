"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProgressTrackerProps {
  currentStep: number
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
}

export function ProgressTracker({ currentStep, totalSteps, onPrevious, onNext }: ProgressTrackerProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={onPrevious} disabled={currentStep === 1} className="gap-1">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <div className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </div>
        <Button variant="outline" size="sm" onClick={onNext} disabled={currentStep === totalSteps} className="gap-1">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex w-full gap-1.5">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 flex-1 rounded-full transition-colors ${index < currentStep ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  )
}

