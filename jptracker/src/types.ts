/* ────────────────  src/types.ts  ──────────────── */
export type Country = string;
export type Region  = string;

export interface SalaryRange {
  min: number;
  max: number;
}

export interface BudgetRange {
  min: number;
  max: number;
}

/* ────────────────  Careers  ───────────────────── */
export interface CareerOpportunity {
  id: string;
  title: string;
  organization: string;
  logoUrl: string;
  country: Country;
  deadline: string;               // ISO date

  /* Campos opcionales: solo cuando los tengas */
  tags?: string[];
  employmentType?: 'Full-time' | 'Consultant' | 'Remote';
  seniority?: 'Entry' | 'Mid-level' | 'Senior' | 'Expert';
  salary?: SalaryRange;
}

export type CareerStage =
  | 'Saved'
  | 'Applied'
  | 'In Review'
  | 'Interview'
  | 'Documentation'
  | 'Offer Received'
  | 'Rejected';

export interface CareerChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface DocumentChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface ActivityLogItem {
  id: string;
  date: string;         // ISO date
  activity: string;
}

export interface TrackedCareer extends CareerOpportunity {
  stage: CareerStage;
  dutyStation: { type: 'On-site' | 'Remote'; location: string };
  profileSummary: string;
  applicationDate?: string;
  responseDate?: string;
  checklist: CareerChecklistItem[];
  documentChecklist: DocumentChecklistItem[];
  notes?: string;
  activityLog: ActivityLogItem[];
}

/* ────────────────  Procurement  ──────────────── */
export interface ProcurementOpportunity {
  id: string;
  title: string;
  agency: string;
  country: Country;
  deadline: string;               // ISO date

  /* Opcionales */
  region?: Region;
  publicationDate?: string;       // ISO date
  type?: 'Goods' | 'Services' | 'Works';
  logoUrl?: string;
  tags?: string[];
  budget?: BudgetRange;
}

export type TenderStatus =
  | 'Identificada'
  | 'InPreparation'
  | 'Submitted'
  | 'Awarded'
  | 'Lost';

export interface TenderChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface TrackedTender extends ProcurementOpportunity {
  status: TenderStatus;
  checklist: TenderChecklistItem[];
  notes?: string;
  activityLog: ActivityLogItem[];
}
