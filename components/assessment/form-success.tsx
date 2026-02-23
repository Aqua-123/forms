"use client"

export function FormSuccess() {
  return (
    <div className="animate-scale-in">
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Animated check circle */}
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-white"
              >
                <path
                  d="M8 16.5L13.5 22L24 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-[success-check_0.6s_0.3s_ease-out_forwards]"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                />
              </svg>
            </div>
            {/* Subtle glow ring */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-xl" />
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Thank you
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your AI Workflow Assessment has been submitted successfully.
              We&apos;ll review your responses and get back to you soon about
              the FuturixAI beta program.
            </p>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/60" />
            </span>
            <span className="text-xs text-white/40">
              We&apos;ll be in touch
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
