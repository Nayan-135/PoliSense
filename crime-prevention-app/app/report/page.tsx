import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CrimeReportForm } from "@/components/report/crime-form"
import { EducationSection } from "@/components/report/education-section"

export default function ReportPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <h2 className="text-3xl font-bold tracking-tight">Report Crime</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover">
          <CardContent className="p-6">
            <h3 className="mb-6 text-lg font-semibold">Anonymous Crime Reporting</h3>
            <CrimeReportForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="education">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="education">How It Works</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="education" className="pt-4">
              <EducationSection />
            </TabsContent>
            <TabsContent value="faq" className="pt-4">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-accent p-4">
                      <h4 className="text-sm font-medium text-primary">Is my report anonymous?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, when you select the anonymous option, we don't collect any personally identifiable
                        information.
                      </p>
                    </div>

                    <div className="rounded-lg bg-accent p-4">
                      <h4 className="text-sm font-medium text-primary">What happens after I submit?</h4>
                      <p className="text-sm text-muted-foreground">
                        Your report is analyzed by our AI system and, when appropriate, shared with local law
                        enforcement.
                      </p>
                    </div>

                    <div className="rounded-lg bg-accent p-4">
                      <h4 className="text-sm font-medium text-primary">How accurate is the AI system?</h4>
                      <p className="text-sm text-muted-foreground">
                        Our system currently achieves 89% accuracy in predicting crime patterns, based on historical
                        data and community reports.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

