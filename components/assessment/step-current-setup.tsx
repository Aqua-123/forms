"use client"

import { FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { CheckboxWithOther } from "./checkbox-with-other"
import { RadioWithOther } from "./radio-with-other"
import { CURRENT_TOOLS_OPTIONS, AI_FAMILIARITY_OPTIONS } from "@/lib/form-options"
import { STEP_TITLES } from "@/lib/schema"

export function StepCurrentSetup() {
  return (
    <div className="space-y-2">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{STEP_TITLES[3].title}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{STEP_TITLES[3].description}</p>
      </div>

      <FieldGroup className="stagger-children">
        <Field>
          <FieldLabel>
            What tools do you currently use most often for these tasks? <span className="text-destructive">*</span>
          </FieldLabel>
          <FieldDescription>Check all that apply</FieldDescription>
          <CheckboxWithOther name="currentTools" options={CURRENT_TOOLS_OPTIONS} />
        </Field>

        <Field>
          <FieldLabel>
            How would you rate your familiarity with AI tools (ChatGPT, Claude, Midjourney, etc.)? <span className="text-destructive">*</span>
          </FieldLabel>
          <RadioWithOther name="aiFamiliarity" options={AI_FAMILIARITY_OPTIONS} />
        </Field>
      </FieldGroup>
    </div>
  )
}
