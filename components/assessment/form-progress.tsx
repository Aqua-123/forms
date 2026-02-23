"use client"

import { TOTAL_STEPS, STEP_TITLES } from "@/lib/schema"
import { cn } from "@/lib/utils"

interface FormProgressProps {
  currentStep: number
}

export function FormProgress({ currentStep }: FormProgressProps) {
  return (
    <div className="mb-10">
      {/* Step indicators */}
      <div className="flex items-center gap-0">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => {
          const step = i + 1
          const isActive = step === currentStep
          const isCompleted = step < currentStep

          return (
            <div key={step} className="flex flex-1 items-center">
              {/* Step dot + label */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all duration-300",
                    isActive && "bg-white text-black ring-4 ring-white/10",
                    isCompleted && "bg-white/15 text-white",
                    !isActive && !isCompleted && "bg-white/[0.04] text-white/25 border border-white/[0.06]"
                  )}
                >
                  {isCompleted ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                      <path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                <span
                  className={cn(
                    "hidden text-[0.65rem] font-medium tracking-wide sm:block whitespace-nowrap transition-colors duration-300",
                    isActive && "text-white/90",
                    isCompleted && "text-white/40",
                    !isActive && !isCompleted && "text-white/20"
                  )}
                >
                  {STEP_TITLES[step].title}
                </span>
              </div>

              {/* Connector line */}
              {step < TOTAL_STEPS && (
                <div className="mx-2 h-px flex-1 sm:mx-3">
                  <div
                    className={cn(
                      "h-full transition-colors duration-500",
                      isCompleted ? "bg-white/20" : "bg-white/[0.05]"
                    )}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
