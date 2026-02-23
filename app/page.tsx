import Image from "next/image";
import { AssessmentForm } from "@/components/assessment/assessment-form";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.20_0.01_285/15%),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[680px] px-5 pb-20 pt-10 sm:px-6 sm:pt-14">
        {/* Logo */}
        <div className="mb-12 sm:mb-14">
          <Image
            src="/futurixAI.svg"
            alt="FuturixAI"
            width={140}
            height={15}
            className="h-auto w-[120px] sm:w-[140px]"
            priority
          />
        </div>

        {/* Header */}
        <header className="mb-14 sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/80" />
            </span>
            <span className="text-xs font-medium tracking-wide text-white/60">
              Beta Program
            </span>
          </div>

          <h1 className="font-display text-[2.25rem] font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            AI Workflow
            <br />
            Assessment
          </h1>

          <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
            This quick assessment (~3 minutes) helps us understand your needs
            and tailor the FuturixAI experience for you.
          </p>
        </header>

        <AssessmentForm />
      </div>
    </main>
  );
}
