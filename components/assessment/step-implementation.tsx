"use client"

import { useFormContext, Controller } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { FieldGroup, Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"
import { CheckboxWithOther } from "./checkbox-with-other"
import { INTEGRATIONS_OPTIONS, TIMELINE_OPTIONS, FEEDBACK_OPTIONS } from "@/lib/form-options"
import { STEP_TITLES } from "@/lib/schema"
import type { AssessmentFormData } from "@/lib/schema"

export function StepImplementation() {
  const { register, control, formState: { errors } } = useFormContext<AssessmentFormData>()

  return (
    <div className="space-y-2">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{STEP_TITLES[5].title}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{STEP_TITLES[5].description}</p>
      </div>

      <FieldGroup className="stagger-children">
        <Field>
          <FieldLabel>
            Are there any specific integrations you absolutely require? <span className="text-destructive">*</span>
          </FieldLabel>
          <FieldDescription>Check all that apply</FieldDescription>
          <CheckboxWithOther name="requiredIntegrations" options={INTEGRATIONS_OPTIONS} />
        </Field>

        <Field>
          <FieldLabel>
            How soon are you looking to implement an AI solution like FuturixAI? <span className="text-destructive">*</span>
          </FieldLabel>
          <Controller
            name="implementationTimeline"
            control={control}
            render={({ field }) => (
              <RadioGroup value={field.value} onValueChange={field.onChange} className="gap-1.5">
                {TIMELINE_OPTIONS.map((option) => {
                  const isSelected = field.value === option.value
                  return (
                    <Label
                      key={option.value}
                      data-selected={isSelected}
                      className="selection-card flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.03] data-[selected=true]:border-white/[0.18] data-[selected=true]:bg-white/[0.04]"
                    >
                      <RadioGroupItem value={option.value} />
                      <span className="text-sm text-white/80">{option.label}</span>
                    </Label>
                  )
                })}
              </RadioGroup>
            )}
          />
          {errors.implementationTimeline?.message && (
            <FieldError>{errors.implementationTimeline.message as string}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel>
            If accepted into the beta, are you willing to provide feedback? <span className="text-destructive">*</span>
          </FieldLabel>
          <Controller
            name="feedbackWillingness"
            control={control}
            render={({ field }) => (
              <RadioGroup value={field.value} onValueChange={field.onChange} className="gap-1.5">
                {FEEDBACK_OPTIONS.map((option) => {
                  const isSelected = field.value === option.value
                  return (
                    <Label
                      key={option.value}
                      data-selected={isSelected}
                      className="selection-card flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.03] data-[selected=true]:border-white/[0.18] data-[selected=true]:bg-white/[0.04]"
                    >
                      <RadioGroupItem value={option.value} />
                      <span className="text-sm text-white/80">{option.label}</span>
                    </Label>
                  )
                })}
              </RadioGroup>
            )}
          />
          {errors.feedbackWillingness?.message && (
            <FieldError>{errors.feedbackWillingness.message as string}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Is there anything else you&apos;d like us to know about your workflow or use case?
          </FieldLabel>
          <Textarea
            placeholder="Share any additional context..."
            rows={4}
            className="border-white/[0.08] bg-white/[0.02] focus-visible:border-white/[0.15]"
            {...register("anythingElse")}
          />
        </Field>
      </FieldGroup>
    </div>
  )
}
