"use server"

import { assessmentSchema, type AssessmentFormData } from "@/lib/schema"
import { db } from "@/lib/firebase-admin"

export type SubmitResult = {
  success: boolean
  error?: string
}

export async function submitAssessment(
  data: AssessmentFormData
): Promise<SubmitResult> {
  const result = assessmentSchema.safeParse(data)
  if (!result.success) {
    return {
      success: false,
      error: "Validation failed. Please check your responses and try again.",
    }
  }

  try {
    await db.collection("assessments").add({
      ...result.data,
      submittedAt: new Date().toISOString(),
      status: "new",
    })

    return { success: true }
  } catch (error) {
    console.error("Firestore write error:", error)
    return {
      success: false,
      error: "Failed to submit your assessment. Please try again.",
    }
  }
}
