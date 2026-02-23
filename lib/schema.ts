import { z } from "zod"

const radioWithOtherSchema = z.object({
  selected: z.string().min(1, "Please select an option"),
  otherText: z.string().optional(),
})

const checkboxWithOtherSchema = z.object({
  selected: z.array(z.string()).min(1, "Select at least one option"),
  otherText: z.string().optional(),
})

export const assessmentBaseSchema = z.object({
  // Step 1 - About You
  recordEmail: z.boolean(),
  email: z.string(),
  fullName: z.string().min(1, "Full name is required").max(100),
  company: z.string().min(1, "Company is required").max(100),
  jobTitle: z.string().min(1, "Job title / role is required").max(100),
  industry: radioWithOtherSchema,
  country: z.string().min(1, "Country is required"),

  // Step 2 - Your Workflow
  companySize: radioWithOtherSchema,
  timeConsumingTasks: checkboxWithOtherSchema,
  taskToAutomate: z.string().min(10, "Please describe in at least 10 characters").max(2000),

  // Step 3 - Current Setup
  currentTools: checkboxWithOtherSchema,
  aiFamiliarity: radioWithOtherSchema,

  // Step 4 - Goals & Interests
  primaryGoals: checkboxWithOtherSchema,
  excitedFeatures: checkboxWithOtherSchema,
  monthlyBudget: radioWithOtherSchema,

  // Step 5 - Final Details
  requiredIntegrations: checkboxWithOtherSchema,
  implementationTimeline: z.string().min(1, "Please select a timeline"),
  feedbackWillingness: z.string().min(1, "Please select an option"),
  anythingElse: z.string().max(2000),
})

// Full schema with cross-field refinements (used server-side)
export const assessmentSchema = assessmentBaseSchema
  .refine(
    (data) => !data.recordEmail || (data.email && data.email.length > 0),
    { message: "Email is required when you opt in to record it", path: ["email"] }
  )
  .refine(
    (data) => {
      const radioFields = ["industry", "companySize", "aiFamiliarity", "monthlyBudget"] as const
      for (const field of radioFields) {
        const val = data[field]
        if (val.selected === "other" && (!val.otherText || val.otherText.trim().length === 0)) {
          return false
        }
      }
      return true
    },
    { message: "Please specify your answer for 'Other' selections" }
  )

// Type for form state (from base schema, no refinements)
export type AssessmentFormData = z.infer<typeof assessmentBaseSchema>

// Field names per step for per-step validation
export const STEP_FIELDS: Record<number, (keyof AssessmentFormData)[]> = {
  1: ["recordEmail", "email", "fullName", "company", "jobTitle", "industry", "country"],
  2: ["companySize", "timeConsumingTasks", "taskToAutomate"],
  3: ["currentTools", "aiFamiliarity"],
  4: ["primaryGoals", "excitedFeatures", "monthlyBudget"],
  5: ["requiredIntegrations", "implementationTimeline", "feedbackWillingness", "anythingElse"],
}

export const TOTAL_STEPS = 5

export const STEP_TITLES: Record<number, { title: string; description: string }> = {
  1: { title: "About You", description: "Tell us a bit about yourself and your company." },
  2: { title: "Your Workflow", description: "Help us understand your daily work and pain points." },
  3: { title: "Current Setup", description: "What tools do you use and how familiar are you with AI?" },
  4: { title: "Goals & Interests", description: "What are you hoping to achieve with FuturixAI?" },
  5: { title: "Final Details", description: "A few more details to complete your assessment." },
}
