import { convertFormToFields } from "../lib/helpers/Deal";
import { TJob } from "../types/job";
import { API_ROUTES } from "./common";

export const getFieldValues = async (
  dealId: string,
  userId: string,
  companyId: string,
  signal: AbortSignal
) => {
  const res = await fetch(
    `${API_ROUTES.getFieldsData}?id=${dealId}&userId=${userId}&companyId=${companyId}`,
    {
      signal,
    }
  );
  const data = await res.json();
  return data;
};

export const updateDealFields = async (
  dealId: string,
  userId: string,
  companyId: string,
  data: TJob
) => {
  const res = await fetch(
    `${API_ROUTES.updateFieldsData}?id=${dealId}&userId=${userId}&companyId=${companyId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }
  );
};
