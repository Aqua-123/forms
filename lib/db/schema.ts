import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core"

export const assessments = pgTable("assessments", {
  id: serial("id").primaryKey(),

  // Step 1 - About You
  recordEmail: boolean("record_email").notNull().default(false),
  email: text("email").notNull().default(""),
  fullName: text("full_name").notNull(),
  company: text("company").notNull(),
  jobTitle: text("job_title").notNull(),
  industry: jsonb("industry").notNull(), // { selected, otherText }
  country: text("country").notNull(),

  // Step 2 - Your Workflow
  companySize: jsonb("company_size").notNull(),
  timeConsumingTasks: jsonb("time_consuming_tasks").notNull(),
  taskToAutomate: text("task_to_automate").notNull(),

  // Step 3 - Current Setup
  currentTools: jsonb("current_tools").notNull(),
  aiFamiliarity: jsonb("ai_familiarity").notNull(),

  // Step 4 - Goals & Interests
  primaryGoals: jsonb("primary_goals").notNull(),
  excitedFeatures: jsonb("excited_features").notNull(),
  monthlyBudget: jsonb("monthly_budget").notNull(),

  // Step 5 - Final Details
  requiredIntegrations: jsonb("required_integrations").notNull(),
  implementationTimeline: text("implementation_timeline").notNull(),
  feedbackWillingness: text("feedback_willingness").notNull(),
  anythingElse: text("anything_else").notNull().default(""),

  // Metadata
  submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow(),
  status: text("status").notNull().default("new"),
})
