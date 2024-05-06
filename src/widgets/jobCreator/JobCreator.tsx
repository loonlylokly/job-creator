"use client";
import { FieldsClient } from "./ui/fields/fieldsClient/FieldsClient";

export const JobCreator = () => {
  console.log("Job Creator");

  return (
    <form>
      <FieldsClient />
      <button>Create job</button>
      <button type="button">Save info</button>
    </form>
  );
};
