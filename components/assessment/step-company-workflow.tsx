"use client"

import { useFormContext } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"
import { RadioWithOther } from "./radio-with-other"
import { CheckboxWithOther } from "./checkbox-with-other"
import { COMPANY_SIZE_OPTIONS, TIME_CONSUMING_TASKS_OPTIONS } from "@/lib/form-options"
import { STEP_TITLES } from "@/lib/schema"
import type { AssessmentFormData } from "@/lib/schema"

export function StepCompanyWorkflow() {
  const { register, formState: { errors } } = useFormContext<AssessmentFormData>()

  return (
    <div className="space-y-2">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{STEP_TITLES[2].title}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{STEP_TITLES[2].description}</p>
      </div>

      <FieldGroup className="stagger-children">
        <Field>
          <FieldLabel>
            Company Size <span className="text-destructive">*</span>
          </FieldLabel>
          <RadioWithOther name="companySize" options={COMPANY_SIZE_OPTIONS} />
        </Field>

        <Field>
          <FieldLabel>
            What is the most time-consuming part of your daily workflow? <span className="text-destructive">*</span>
          </FieldLabel>
          <FieldDescription>Check all that apply</FieldDescription>
          <CheckboxWithOther name="timeConsumingTasks" options={TIME_CONSUMING_TASKS_OPTIONS} />
        </Field>

        <Field>
          <FieldLabel>
            Briefly describe a specific task you wish you could automate: <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            placeholder="Describe the task, how often you do it, and what makes it tedious..."
            rows={4}
            className="border-white/[0.08] bg-white/[0.02] focus-visible:border-white/[0.15]"
            {...register("taskToAutomate")}
          />
          {errors.taskToAutomate?.message && <FieldError>{errors.taskToAutomate.message as string}</FieldError>}
        </Field>
      </FieldGroup>
    </div>
  )
}
