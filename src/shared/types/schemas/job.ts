import { z } from "zod";

export const SSelect = z.array(
  z.object({
    value: z.string(),
    label: z.string(),
  }),
  { message: "Invalid field" }
);

const SEmail = z.union([z.literal(""), z.string().email()]);
const STime = z.union([z.literal(""), z.string().time()]);

export const SJob = z.object({
  firstName: z
    .string()
    .min(1, { message: "Empty field" })
    .max(50, { message: "Invalid first name" }),
  lastName: z
    .string()
    .min(1, { message: "Empty field" })
    .max(50, { message: "Invalid last name" }),
  phone: z.string().min(1, { message: "Empty field" }),
  email: SEmail,
  jobType: SSelect,
  jobSource: SSelect,
  jobDescription: z.string().max(250, "Invalid job description").optional(),
  address: z.string().min(1, { message: "Empty field" }),
  city: z.string().min(1, { message: "Empty field" }),
  state: z.string().min(1, { message: "Empty field" }),
  zipcode: z.string().min(1, { message: "Empty field" }),
  area: SSelect,
  startDate: z.string().date().optional(),
  startTime: STime,
  endTime: STime,
  testSelect: SSelect,
});
