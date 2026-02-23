"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/field";

type Option = { value: string; label: string };

interface CheckboxWithOtherProps {
  name: string;
  options: readonly Option[];
}

export function CheckboxWithOther({ name, options }: CheckboxWithOtherProps) {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedValues: string[] = watch(`${name}.selected`) || [];

  const fieldError = errors[name] as
    | {
        selected?: { message?: string };
        otherText?: { message?: string };
        root?: { message?: string };
      }
    | undefined;

  return (
    <div className="space-y-2">
      <Controller
        name={`${name}.selected`}
        control={control}
        render={({ field }) => (
          <div className="grid gap-1.5">
            {options.map((option) => {
              const isSelected = field.value?.includes(option.value);
              return (
                <Label
                  key={option.value}
                  data-selected={isSelected}
                  className="selection-card flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.03] data-[selected=true]:border-white/[0.18] data-[selected=true]:bg-white/[0.04]"
                >
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={(checked) => {
                      const current: string[] = field.value || [];
                      if (checked) {
                        field.onChange([...current, option.value]);
                      } else {
                        field.onChange(
                          current.filter((v: string) => v !== option.value),
                        );
                      }
                    }}
                  />
                  <span className="text-sm text-white/80">{option.label}</span>
                </Label>
              );
            })}
            <Label
              data-selected={selectedValues.includes("other")}
              className="selection-card flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.03] data-[selected=true]:border-white/[0.18] data-[selected=true]:bg-white/[0.04]"
            >
              <Checkbox
                checked={selectedValues.includes("other")}
                onCheckedChange={(checked) => {
                  const current: string[] = field.value || [];
                  if (checked) {
                    field.onChange([...current, "other"]);
                  } else {
                    field.onChange(
                      current.filter((v: string) => v !== "other"),
                    );
                  }
                }}
              />
              <span className="text-sm text-white/80">Other</span>
            </Label>
          </div>
        )}
      />
      {selectedValues.includes("other") && (
        <Controller
          name={`${name}.otherText`}
          control={control}
          render={({ field }) => (
            <div>
              <Input
                {...field}
                placeholder="Please specify..."
                className="border-white/[0.08] bg-white/[0.02]"
              />
            </div>
          )}
        />
      )}
      {(fieldError?.selected?.message ||
        fieldError?.root?.message ||
        fieldError?.otherText?.message) && (
        <FieldError>
          {fieldError?.selected?.message ||
            fieldError?.root?.message ||
            fieldError?.otherText?.message}
        </FieldError>
      )}
    </div>
  );
}
