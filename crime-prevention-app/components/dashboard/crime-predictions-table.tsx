import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { CrimePrediction } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

interface CrimePredictionsTableProps {
  predictions: CrimePrediction[]
}

export function CrimePredictionsTable({ predictions }: CrimePredictionsTableProps) {
  const getRiskBadgeClass = (risk: string) => {
    switch (risk) {
      case "High":
        return "risk-high"
      case "Medium":
        return "risk-medium"
      case "Low":
        return "risk-low"
      default:
        return ""
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Location</TableHead>
            <TableHead>Crime Type</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Predicted Time</TableHead>
            <TableHead className="text-right">Confidence</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {predictions.map((prediction) => (
            <TableRow key={prediction.id} className="hover:bg-accent/50">
              <TableCell className="font-medium">{prediction.location}</TableCell>
              <TableCell>{prediction.crimeType}</TableCell>
              <TableCell>
                <Badge className={getRiskBadgeClass(prediction.riskLevel)}>{prediction.riskLevel}</Badge>
              </TableCell>
              <TableCell>{formatDistanceToNow(new Date(prediction.timestamp), { addSuffix: true })}</TableCell>
              <TableCell className="text-right">{(prediction.confidence * 100).toFixed(0)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

