/* ────────────────  src/constants.ts  ──────────────── */
import type {
  CareerOpportunity,
  ProcurementOpportunity,
  TrackedCareer,
  TrackedTender,
  CareerStage,
  TenderStatus,
} from './types';

/* ------------  Careers  ---------------- */

export const MOCK_CAREERS: CareerOpportunity[] = [
  {
    id: 'j1',
    title: 'Project Manager - Education',
    organization: 'World Bank',
    logoUrl: 'https://placehold.co/64x64/e0e7ff/4338ca?text=WB',
    country: 'Senegal',
    deadline: '2024-08-30',
    tags: ['Urgent', 'French Speaking'],
    employmentType: 'Full-time',
    seniority: 'Senior',
    salary: { min: 90000, max: 120000 },
  },
  {
    id: 'j2',
    title: 'Health Specialist',
    organization: 'UNICEF',
    logoUrl: 'https://placehold.co/64x64/dbeafe/1d4ed8?text=UNICEF',
    country: 'Nigeria',
    deadline: '2024-09-15',
    tags: ['Top Responder'],
    employmentType: 'Consultant',
    seniority: 'Mid-level',
    salary: { min: 70000, max: 95000 },
  },
  /* … (resto idéntico) … */
];

export const CAREER_STAGES = [
  'Saved',
  'Applied',
  'In Review',
  'Interview',
  'Documentation',
  'Offer Received',
  'Rejected',
] as CareerStage[];

export const MOCK_TRACKED_CAREERS: TrackedCareer[] = [
  {
    id: 'j2',
    title: 'Health Specialist',
    organization: 'UNICEF',
    logoUrl: 'https://placehold.co/64x64/dbeafe/1d4ed8?text=UNICEF',
    country: 'Nigeria',
    deadline: '2024-09-15',
    stage: 'Applied',
    dutyStation: { type: 'On-site', location: 'Abuja, Nigeria' },
    profileSummary: 'Focus on maternal and child health programs.',
    applicationDate: '2024-07-20',
    checklist: [
      { id: 'jc1', text: 'Attach CV', completed: true },
      { id: 'jc2', text: 'Attach Cover Letter', completed: true },
      { id: 'jc3', text: 'Fill out online form', completed: true },
    ],
    documentChecklist: [
      { id: 'dc1', text: 'Passport Scan', completed: true },
      { id: 'dc2', text: "Master's Diploma", completed: false },
    ],
    notes: 'Sent application via UNICEF portal. Waiting for confirmation.',
    activityLog: [
      { id: 'al1', date: '2024-07-15', activity: 'Saved Opportunity' },
      { id: 'al2', date: '2024-07-20', activity: 'Submitted Application' },
    ],
  },
  /* … resto de objetos … */
];

/* ------------  Procurement  ------------ */

export const MOCK_TENDERS: ProcurementOpportunity[] = [
  {
    id: 't1',
    title: 'Supply of IT Equipment for Schools',
    agency: 'USAID',
    region: 'Latin America',
    country: 'Guatemala',
    publicationDate: '2024-07-01',
    deadline: '2024-08-20',
    type: 'Goods',
    logoUrl: 'https://placehold.co/64x64/fecaca/991b1b?text=USAID',
    tags: ['Education', 'Hardware'],
    budget: { min: 50000, max: 100000 },
  },
  /* … resto … */
];

export const TENDER_STAGES: TenderStatus[] = [
  'Identificada',
  'InPreparation',
  'Submitted',
  'Awarded',
  'Lost',
];

export const MOCK_TRACKED_TENDERS: TrackedTender[] = [
  {
    id: 't1',
    title: 'Supply of IT Equipment for Schools',
    agency: 'USAID',
    region: 'Latin America',
    country: 'Guatemala',
    publicationDate: '2024-07-01',
    deadline: '2024-08-20',
    type: 'Goods',
    logoUrl: 'https://placehold.co/64x64/fecaca/991b1b?text=USAID',
    tags: ['Education', 'Hardware'],
    budget: { min: 50000, max: 100000 },
    status: 'InPreparation',
    checklist: [
      { id: 'tc1', text: 'Preparar propuesta técnica', completed: true },
      { id: 'tc2', text: 'Formularios financieros', completed: false },
      { id: 'tc3', text: 'Documentación legal', completed: false },
    ],
    notes: 'Contactado a proveedor local para cotización de hardware.',
    activityLog: [
      { id: 'tal1', date: '2024-07-25', activity: 'Identified Opportunity' },
      { id: 'tal2', date: '2024-07-28', activity: 'Moved to En Preparación' },
    ],
  },
  /* … resto … */
];

/* ------------  Datos de análisis  -------- */

export const CAREER_ANALYSIS_DATA = {
  reviewed: 64,
  applications: 18,
  interviews: 4,
  successRate: [
    { name: 'Aplicaciones', value: 18 },
    { name: 'Rechazadas', value: 14 },
  ],
  statusDistribution: [
    { name: 'Applied', value: 8 },
    { name: 'In Review', value: 5 },
    { name: 'Interview', value: 4 },
    { name: 'Rejected', value: 1 },
  ],
};

export const TENDER_ANALYSIS_DATA = {
  followed: 42,
  submitted: 12,
  successRate: [
    { name: 'Adjudicadas', value: 3 },
    { name: 'No Adjudicadas', value: 9 },
  ],
  submissionRate: [
    { name: 'Presentadas', value: 12 },
    { name: 'No Presentadas', value: 30 },
  ],
};

/* ------------  Agencias  ------------------ */

export const MOCK_AGENCIES = [
  {
    name: 'UNDP',
    type: 'UN Agency',
    mandate:
      'Works to eradicate poverty and reduce inequalities through the sustainable development of nations.',
    websiteUrl: 'https://www.undp.org/',
  },
  /* … resto … */
];
