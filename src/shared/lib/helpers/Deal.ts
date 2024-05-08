import { TJob } from "@/shared/types/job";

export const convertFieldsToForm = (fields: any) => {
  if (!fields) return {};
  return {
    ...fields,
    // "Job type": null,
    // "Job source": null,
    // Area: null,
    // "Select technician": null,
  };
};

export const convertFormToFields = (fields: TJob) => {
  if (!fields) return {};
  // console.log(fields);
  return {
    ...fields,
    // "Job type": fields["Job type"]?.value || "",
    // "Job source": fields["Job source"]?.value || "",
    // Area: fields["Area"]?.value || "",
    // "Select technician": fields["Select technician"]?.value || "",
  };
};
