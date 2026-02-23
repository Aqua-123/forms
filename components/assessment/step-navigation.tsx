"use client"

import { Button } from "@/components/ui/button"
import { TOTAL_STEPS } from "@/lib/schema"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"

interface StepNavigationProps {
  step: number
  onNext: () => void
  onBack: () => void
  isPending: boolean
}

export function StepNavigation({ step, onNext, onBack, isPending }: StepNavigationProps) {
  const isLastStep = step === TOTAL_STEPS

  return (
    <div className="mt-8 flex items-center justify-between">
      {step > 1 ? (
        <button
          type="button"
          onClick={onBack}
          disabled={isPending}
          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/50 transition-colors hover:text-white/80 disabled:opacity-50"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} className="size-4" />
          Back
        </button>
      ) : (
        <div />
      )}
      {isLastStep ? (
        <Button
          type="submit"
          disabled={isPending}
          className="h-10 rounded-xl bg-white px-6 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:opacity-50"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
              Submitting...
            </span>
          ) : (
            "Submit Assessment"
          )}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={onNext}
          className="h-10 rounded-xl bg-white px-6 text-sm font-medium text-black transition-all hover:bg-white/90"
        >
          Continue
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-1 size-4" />
        </Button>
      )}
    </div>
  )
}
