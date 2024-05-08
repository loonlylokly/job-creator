import { z } from "zod";

export const SSelect = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .optional();

const SEmail = z.union([z.literal(""), z.string().email()]);
const STime = z.union([z.literal(""), z.string().time()]);

export const SJob = z.object({
  "First name": z
    .string()
    .min(1, { message: "Empty field" })
    .max(50, { message: "Invalid first name" }),
  "Last name": z
    .string()
    .min(1, { message: "Empty field" })
    .max(50, { message: "Invalid last name" }),
  Phone: z.string().min(1, { message: "Empty field" }),
  Email: SEmail,
  "Job type": SSelect,
  "Job source": SSelect,
  "Job description": z.string().max(250, "Invalid job description").optional(),
  Address: z.string().min(1, { message: "Empty field" }),
  City: z.string().min(1, { message: "Empty field" }),
  State: z.string().min(1, { message: "Empty field" }),
  Zipcode: z.string().min(1, { message: "Empty field" }),
  Area: SSelect,
  "Start date": z.string().date().optional(),
  "Start time": STime,
  "End time": STime,
  "Select technician": SSelect,
});
