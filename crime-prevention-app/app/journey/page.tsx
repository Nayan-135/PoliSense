"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StepCard } from "@/components/journey/step-card"
import { ProgressTracker } from "@/components/journey/progress-tracker"
import { userJourneySteps } from "@/lib/data"

export default function JourneyPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleNext = () => {
    if (currentStep < userJourneySteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <h2 className="text-3xl font-bold tracking-tight">User Guide</h2>

      <Card className="card-hover">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Your SafeCity Experience</h3>
          <ProgressTracker
            currentStep={currentStep}
            totalSteps={userJourneySteps.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {userJourneySteps.map((step) => (
          <StepCard key={step.id} step={step} isActive={step.id === currentStep} />
        ))}
      </div>

      <Card className="card-hover bg-accent/30">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Why This Matters</h3>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              SafeCity is more than just an app—it's a community-driven platform that leverages cutting-edge AI
              technology to create safer neighborhoods for everyone.
            </p>
            <p className="text-sm text-muted-foreground">
              Our predictive policing algorithms become more accurate with each user interaction, allowing us to
              identify potential crime hotspots before incidents occur.
            </p>
            <div className="rounded-lg bg-primary/10 p-4 text-sm">
              <span className="font-medium text-primary">Impact: </span>
              This proactive approach has reduced crime rates by up to 35% in pilot communities.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

