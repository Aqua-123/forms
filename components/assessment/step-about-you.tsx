"use client"

import { useFormContext, Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FieldGroup, Field, FieldLabel, FieldError } from "@/components/ui/field"
import { RadioWithOther } from "./radio-with-other"
import { CountrySelect } from "./country-select"
import { INDUSTRY_OPTIONS } from "@/lib/form-options"
import { STEP_TITLES } from "@/lib/schema"
import type { AssessmentFormData } from "@/lib/schema"

export function StepAboutYou() {
  const { register, control, watch, formState: { errors } } = useFormContext<AssessmentFormData>()
  const recordEmail = watch("recordEmail")

  return (
    <div className="space-y-2">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{STEP_TITLES[1].title}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{STEP_TITLES[1].description}</p>
      </div>

      <FieldGroup className="stagger-children">
        <Field>
          <Label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.03] has-data-checked:border-white/[0.18] has-data-checked:bg-white/[0.04]">
            <Controller
              name="recordEmail"
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <span className="text-sm text-white/80">Record my email with this response</span>
          </Label>
          {recordEmail && (
            <div className="mt-2 space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="border-white/[0.08] bg-white/[0.02]"
                {...register("email")}
              />
              {errors.email?.message && <FieldError>{errors.email.message as string}</FieldError>}
            </div>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Full Name <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            placeholder="Your full name"
            className="border-white/[0.08] bg-white/[0.02]"
            {...register("fullName")}
          />
          {errors.fullName?.message && <FieldError>{errors.fullName.message as string}</FieldError>}
        </Field>

        <Field>
          <FieldLabel>
            Company <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            placeholder="Your company name"
            className="border-white/[0.08] bg-white/[0.02]"
            {...register("company")}
          />
          {errors.company?.message && <FieldError>{errors.company.message as string}</FieldError>}
        </Field>

        <Field>
          <FieldLabel>
            Job Title / Role <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            placeholder="e.g. Product Manager, CTO, Developer"
            className="border-white/[0.08] bg-white/[0.02]"
            {...register("jobTitle")}
          />
          {errors.jobTitle?.message && <FieldError>{errors.jobTitle.message as string}</FieldError>}
        </Field>

        <Field>
          <FieldLabel>
            Industry <span className="text-destructive">*</span>
          </FieldLabel>
          <RadioWithOther name="industry" options={INDUSTRY_OPTIONS} />
        </Field>

        <Field>
          <FieldLabel>
            Country <span className="text-destructive">*</span>
          </FieldLabel>
          <CountrySelect name="country" />
        </Field>
      </FieldGroup>
    </div>
  )
}
