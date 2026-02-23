"use client"

import { FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { CheckboxWithOther } from "./checkbox-with-other"
import { RadioWithOther } from "./radio-with-other"
import { PRIMARY_GOALS_OPTIONS, EXCITED_FEATURES_OPTIONS, MONTHLY_BUDGET_OPTIONS } from "@/lib/form-options"
import { STEP_TITLES } from "@/lib/schema"

export function StepGoals() {
  return (
    <div className="space-y-2">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{STEP_TITLES[4].title}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{STEP_TITLES[4].description}</p>
      </div>

      <FieldGroup className="stagger-children">
        <Field>
          <FieldLabel>
            What is your primary goal for using FuturixAI? <span className="text-destructive">*</span>
          </FieldLabel>
          <FieldDescription>Check all that apply</FieldDescription>
          <CheckboxWithOther name="primaryGoals" options={PRIMARY_GOALS_OPTIONS} />
        </Field>

        <Field>
          <FieldLabel>
            Which feature are you most excited to try in FuturixAI? <span className="text-destructive">*</span>
          </FieldLabel>
          <FieldDescription>Check all that apply</FieldDescription>
          <CheckboxWithOther name="excitedFeatures" options={EXCITED_FEATURES_OPTIONS} />
        </Field>

        <Field>
          <FieldLabel>
            What is your estimated monthly budget for AI tools? <span className="text-destructive">*</span>
          </FieldLabel>
          <RadioWithOther name="monthlyBudget" options={MONTHLY_BUDGET_OPTIONS} />
        </Field>
      </FieldGroup>
    </div>
  )
}
