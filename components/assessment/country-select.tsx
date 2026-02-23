"use client"

import { useFormContext, Controller } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select"
import { COUNTRIES } from "@/lib/countries"
import { FieldError } from "@/components/ui/field"

interface CountrySelectProps {
  name: string
}

export function CountrySelect({ name }: CountrySelectProps) {
  const { control, formState: { errors } } = useFormContext()
  const fieldError = errors[name] as { message?: string } | undefined

  return (
    <div className="space-y-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full border-white/[0.08] bg-white/[0.02]">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent position="popper" className="max-h-60 border-white/[0.08] bg-[oklch(0.12_0.002_285)]">
              <SelectGroup>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {fieldError?.message && <FieldError>{fieldError.message}</FieldError>}
    </div>
  )
}
