"use client"

import { useState, useTransition, useCallback } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { assessmentBaseSchema, STEP_FIELDS, TOTAL_STEPS, type AssessmentFormData } from "@/lib/schema"
import { submitAssessment } from "@/lib/actions"
import { FormProgress } from "./form-progress"
import { StepNavigation } from "./step-navigation"
import { StepAboutYou } from "./step-about-you"
import { StepCompanyWorkflow } from "./step-company-workflow"
import { StepCurrentSetup } from "./step-current-setup"
import { StepGoals } from "./step-goals"
import { StepImplementation } from "./step-implementation"
import { FormSuccess } from "./form-success"

const DEFAULT_VALUES: AssessmentFormData = {
  recordEmail: false,
  email: "",
  fullName: "",
  company: "",
  jobTitle: "",
  industry: { selected: "", otherText: "" },
  country: "",
  companySize: { selected: "", otherText: "" },
  timeConsumingTasks: { selected: [], otherText: "" },
  taskToAutomate: "",
  currentTools: { selected: [], otherText: "" },
  aiFamiliarity: { selected: "", otherText: "" },
  primaryGoals: { selected: [], otherText: "" },
  excitedFeatures: { selected: [], otherText: "" },
  monthlyBudget: { selected: "", otherText: "" },
  requiredIntegrations: { selected: [], otherText: "" },
  implementationTimeline: "",
  feedbackWillingness: "",
  anythingElse: "",
}

export function AssessmentForm() {
  const [step, setStep] = useState(1)
  const [isPending, startTransition] = useTransition()
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const form = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentBaseSchema),
    mode: "onTouched",
    defaultValues: DEFAULT_VALUES,
  })

  const triggerAnimation = useCallback(() => {
    setAnimationKey((k) => k + 1)
  }, [])

  async function handleNext() {
    const fieldsToValidate = STEP_FIELDS[step]
    const isValid = await form.trigger(fieldsToValidate)
    if (isValid) {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS))
      triggerAnimation()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  function handleBack() {
    setStep((s) => Math.max(s - 1, 1))
    triggerAnimation()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function onSubmit(data: AssessmentFormData) {
    setSubmitError(null)
    startTransition(async () => {
      const result = await submitAssessment(data)
      if (result.success) {
        setIsSuccess(true)
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.")
      }
    })
  }

  if (isSuccess) {
    return <FormSuccess />
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FormProgress currentStep={step} />

        {/* Form card */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
          <div key={animationKey} className="animate-step-enter">
            {step === 1 && <StepAboutYou />}
            {step === 2 && <StepCompanyWorkflow />}
            {step === 3 && <StepCurrentSetup />}
            {step === 4 && <StepGoals />}
            {step === 5 && <StepImplementation />}
          </div>
        </div>

        <StepNavigation
          step={step}
          onNext={handleNext}
          onBack={handleBack}
          isPending={isPending}
        />

        {submitError && (
          <div className="mt-5 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-center text-sm text-destructive">
            {submitError}
          </div>
        )}
      </form>
    </FormProvider>
  )
}
