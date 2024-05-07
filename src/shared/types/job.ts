import { z } from "zod";
import { SJob } from "./schemas/job";

export type TJob = z.infer<typeof SJob>;
