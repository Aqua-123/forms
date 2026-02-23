export const INDUSTRY_OPTIONS = [
  { value: "software-tech", label: "Software / Tech" },
  { value: "marketing-agency", label: "Marketing / Agency" },
  { value: "media-content", label: "Media / Content" },
  { value: "healthcare-biotech", label: "Healthcare / Biotech" },
  { value: "finance-professional", label: "Finance / Professional" },
  { value: "education-research", label: "Education / Research" },
] as const

export const COMPANY_SIZE_OPTIONS = [
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-1000", label: "201-1000" },
  { value: "1001-5000", label: "1001-5000" },
  { value: "5000+", label: "5000+" },
] as const

export const TIME_CONSUMING_TASKS_OPTIONS = [
  { value: "data-entry", label: "Data entry, processing, or formatting (Excel/Sheets)" },
  { value: "writing-reports", label: "Writing reports, emails, or summaries" },
  { value: "research", label: "Research and information gathering" },
  { value: "presentations", label: "Creating presentations or visual materials" },
  { value: "coding", label: "Writing or debugging code" },
  { value: "customer-support", label: "Customer support / communication" },
  { value: "meeting-notes", label: "Meeting notes / follow-ups" },
] as const

export const CURRENT_TOOLS_OPTIONS = [
  { value: "google-workspace", label: "Google Workspace (Docs, Sheets, Slides)" },
  { value: "microsoft-office", label: "Microsoft Office (Word, Excel, PowerPoint)" },
  { value: "notion-airtable", label: "Notion, Airtable, or similar productivity tools" },
  { value: "crm-systems", label: "CRM systems (Salesforce, HubSpot, etc.)" },
] as const

export const AI_FAMILIARITY_OPTIONS = [
  { value: "beginner", label: "Beginner (Rarely use them)" },
  { value: "intermediate", label: "Intermediate (Use them occasionally)" },
  { value: "advanced", label: "Advanced (Use them regularly for work)" },
  { value: "expert", label: "Expert (Build or integrate AI solutions)" },
  { value: "none", label: "None of the above" },
] as const

export const PRIMARY_GOALS_OPTIONS = [
  { value: "save-time", label: "Save time" },
  { value: "reduce-costs", label: "Reduce costs" },
  { value: "improve-quality", label: "Improve quality of work" },
  { value: "automate-tasks", label: "Automate repetitive tasks" },
] as const

export const EXCITED_FEATURES_OPTIONS = [
  { value: "document-generation", label: "Automated document generation" },
  { value: "data-analysis", label: "Data analysis and insights" },
  { value: "custom-agents", label: "Custom AI agents for specific tasks" },
  { value: "integrations", label: "Integrations with existing tools" },
  { value: "voice-to-text", label: "Voice-to-text / Meeting summaries" },
] as const

export const MONTHLY_BUDGET_OPTIONS = [
  { value: "under-50", label: "Under $50/month" },
  { value: "50-200", label: "$50 - $200/month" },
  { value: "200-500", label: "$200 - $500/month" },
  { value: "500-plus", label: "$500+/month" },
] as const

export const INTEGRATIONS_OPTIONS = [
  { value: "slack-teams", label: "Slack / Microsoft Teams" },
  { value: "zapier-make", label: "Zapier / Make" },
  { value: "custom-apis", label: "Custom APIs / Webhooks" },
  { value: "crm", label: "Specific CRM (Salesforce, Hubspot, etc.)" },
  { value: "database", label: "Specific Database (SQL, MongoDB, etc.)" },
  { value: "no-requirements", label: "No specific requirements" },
] as const

export const TIMELINE_OPTIONS = [
  { value: "immediately", label: "Immediately (Within a week)" },
  { value: "within-month", label: "Within a month" },
  { value: "exploring", label: "Exploring options (1-3 months)" },
  { value: "researching", label: "Just researching (3+ months)" },
] as const

export const FEEDBACK_OPTIONS = [
  { value: "yes-surveys", label: "Yes, happy to participate in surveys or interviews" },
  { value: "yes-forms", label: "Yes, via short feedback forms" },
  { value: "maybe", label: "Maybe, depends on time" },
  { value: "no", label: "No, just want to use the product" },
] as const
