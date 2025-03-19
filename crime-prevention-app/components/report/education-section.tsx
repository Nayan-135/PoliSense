import { Card, CardContent } from "@/components/ui/card"
import { FileText, Shield, Users } from "lucide-react"

export function EducationSection() {
  return (
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="icon-container">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">How Your Reports Help</h3>
            <p className="text-xs text-muted-foreground">Making a difference in your community</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium flex items-center gap-2 text-primary">
              <FileText className="h-4 w-4" />
              Improving Predictions
            </h3>
            <p className="text-sm text-muted-foreground">
              Your reports train our AI system to better predict and prevent future crimes, creating safer communities.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium flex items-center gap-2 text-primary">
              <Users className="h-4 w-4" />
              Community Network
            </h3>
            <p className="text-sm text-muted-foreground">
              Reports contribute to a community-wide safety network, helping neighbors stay informed about potential
              risks.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium flex items-center gap-2 text-primary">
              <Shield className="h-4 w-4" />
              Working with Authorities
            </h3>
            <p className="text-sm text-muted-foreground">
              We work with local law enforcement to ensure reports help allocate resources where they're needed most.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

