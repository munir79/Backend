import { z } from "zod";

export const Months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

export const AcademicSemistarZodSchema = z.object({
  name: z.enum(["Autum", "summer", "fall"]),
  code: z.enum(["01", "02", "03"]),
  year: z.coerce.date(), // allows string inputs and coerces to Date
  startMonth: z.enum(Months),
  endMonth: z.enum(Months),
});
