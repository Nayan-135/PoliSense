// Mock data for the application

export type CrimeType = "Theft" | "Assault" | "Burglary" | "Robbery" | "Vandalism" | "Fraud" | "Other"

export interface CrimePrediction {
  id: string
  location: string
  coordinates: [number, number]
  crimeType: CrimeType
  riskLevel: "Low" | "Medium" | "High"
  timestamp: string
  confidence: number
}

export interface CrimeHotspot {
  id: string
  name: string
  coordinates: [number, number]
  riskLevel: "Low" | "Medium" | "High"
  crimeTypes: CrimeType[]
  lastUpdated: string
}

export interface CrimeReport {
  id: string
  crimeType: CrimeType
  location: string
  coordinates: [number, number]
  timestamp: string
  description: string
  isAnonymous: boolean
  status: "Submitted" | "Under Review" | "Investigated" | "Closed"
}

// Mock crime predictions
export const crimePredictions: CrimePrediction[] = [
  {
    id: "pred-1",
    location: "Downtown, Main St & 5th Ave",
    coordinates: [40.7128, -74.006],
    crimeType: "Theft",
    riskLevel: "High",
    timestamp: "2025-03-11T14:30:00Z",
    confidence: 0.87,
  },
  {
    id: "pred-2",
    location: "Westside Mall, Parking Area B",
    coordinates: [40.7135, -74.009],
    crimeType: "Robbery",
    riskLevel: "Medium",
    timestamp: "2025-03-11T18:15:00Z",
    confidence: 0.72,
  },
  {
    id: "pred-3",
    location: "Central Park, North Entrance",
    coordinates: [40.7142, -74.003],
    crimeType: "Assault",
    riskLevel: "Medium",
    timestamp: "2025-03-12T22:00:00Z",
    confidence: 0.65,
  },
  {
    id: "pred-4",
    location: "Riverside Apartments, Block C",
    coordinates: [40.715, -74.007],
    crimeType: "Burglary",
    riskLevel: "High",
    timestamp: "2025-03-12T02:30:00Z",
    confidence: 0.81,
  },
  {
    id: "pred-5",
    location: "Tech District, Innovation Blvd",
    coordinates: [40.712, -74.005],
    crimeType: "Vandalism",
    riskLevel: "Low",
    timestamp: "2025-03-13T16:45:00Z",
    confidence: 0.58,
  },
]

// Mock crime hotspots
export const crimeHotspots: CrimeHotspot[] = [
  {
    id: "hot-1",
    name: "Downtown Transit Hub",
    coordinates: [40.7128, -74.006],
    riskLevel: "High",
    crimeTypes: ["Theft", "Robbery"],
    lastUpdated: "2025-03-11T09:00:00Z",
  },
  {
    id: "hot-2",
    name: "Nightlife District",
    coordinates: [40.7135, -74.009],
    riskLevel: "Medium",
    crimeTypes: ["Assault", "Vandalism"],
    lastUpdated: "2025-03-11T09:00:00Z",
  },
  {
    id: "hot-3",
    name: "Shopping Center",
    coordinates: [40.7142, -74.003],
    riskLevel: "Medium",
    crimeTypes: ["Theft", "Fraud"],
    lastUpdated: "2025-03-11T09:00:00Z",
  },
  {
    id: "hot-4",
    name: "Residential Area A",
    coordinates: [40.715, -74.007],
    riskLevel: "Low",
    crimeTypes: ["Burglary"],
    lastUpdated: "2025-03-11T09:00:00Z",
  },
  {
    id: "hot-5",
    name: "Industrial Zone",
    coordinates: [40.712, -74.005],
    riskLevel: "Low",
    crimeTypes: ["Vandalism", "Theft"],
    lastUpdated: "2025-03-11T09:00:00Z",
  },
]

// Mock crime reports
export const crimeReports: CrimeReport[] = [
  {
    id: "rep-1",
    crimeType: "Theft",
    location: "Downtown, Main St & 5th Ave",
    coordinates: [40.7128, -74.006],
    timestamp: "2025-03-10T14:30:00Z",
    description: "Smartphone stolen while at outdoor cafe",
    isAnonymous: false,
    status: "Under Review",
  },
  {
    id: "rep-2",
    crimeType: "Vandalism",
    location: "Central Park, South Entrance",
    coordinates: [40.7142, -74.003],
    timestamp: "2025-03-09T22:15:00Z",
    description: "Graffiti on public monument",
    isAnonymous: true,
    status: "Submitted",
  },
  {
    id: "rep-3",
    crimeType: "Assault",
    location: "Nightlife District, Club Row",
    coordinates: [40.7135, -74.009],
    timestamp: "2025-03-08T01:45:00Z",
    description: "Verbal and physical altercation outside nightclub",
    isAnonymous: false,
    status: "Investigated",
  },
  {
    id: "rep-4",
    crimeType: "Burglary",
    location: "Residential Area B, Oak Street",
    coordinates: [40.715, -74.007],
    timestamp: "2025-03-07T03:20:00Z",
    description: "Home break-in through back window",
    isAnonymous: false,
    status: "Closed",
  },
  {
    id: "rep-5",
    crimeType: "Fraud",
    location: "Online",
    coordinates: [40.712, -74.005],
    timestamp: "2025-03-06T10:00:00Z",
    description: "Phishing attempt claiming to be from local bank",
    isAnonymous: true,
    status: "Under Review",
  },
]

// User journey steps
export const userJourneySteps = [
  {
    id: 1,
    title: "Register & Onboard",
    description: "Create your account and set up your profile with your neighborhood and safety preferences.",
    benefits: ["Personalized safety alerts", "Community connection", "Secure account"],
    icon: "UserPlus",
  },
  {
    id: 2,
    title: "Explore Crime Map",
    description: "View the interactive crime heatmap to understand safety levels in different areas.",
    benefits: ["Visual risk assessment", "Historical crime data", "Predictive hotspots"],
    icon: "Map",
  },
  {
    id: 3,
    title: "Set Up Alerts",
    description: "Configure custom alerts for your home, work, and frequently visited locations.",
    benefits: ["Real-time notifications", "Geofenced protection", "Customizable thresholds"],
    icon: "Bell",
  },
  {
    id: 4,
    title: "Report Incidents",
    description: "Easily report crimes or suspicious activities to help improve community safety.",
    benefits: ["Anonymous reporting option", "Photo evidence upload", "Follow-up notifications"],
    icon: "FileText",
  },
  {
    id: 5,
    title: "Engage & Share",
    description: "Connect with neighbors and share safety tips within your community network.",
    benefits: ["Community forums", "Safety resources", "Local authority updates"],
    icon: "Users",
  },
]

// Innovation features
export const innovationFeatures = [
  {
    id: "feat-1",
    title: "AI Predictive Analysis",
    description:
      "Advanced machine learning algorithms analyze crime patterns to predict potential incidents before they occur.",
    icon: "Brain",
  },
  {
    id: "feat-2",
    title: "Blockchain Verification",
    description: "Secure and immutable record-keeping ensures the integrity of all reported data and predictions.",
    icon: "Link",
  },
  {
    id: "feat-3",
    title: "Real-time Alert System",
    description: "Instant notifications about emerging threats in your area based on real-time data analysis.",
    icon: "Bell",
  },
  {
    id: "feat-4",
    title: "Community Crowdsourcing",
    description: "Leverages collective intelligence from community reports to enhance prediction accuracy.",
    icon: "Users",
  },
]

